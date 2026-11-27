import { animate } from 'motion';
import { rubberBand } from '@ui-sdk/core/gesture';
import type { DrawerController, SnapPoint } from '@ui-sdk/react/drawer';

type Heights = readonly [number, number, number];
const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

// SwiftUI's bouncy preset has a half-second response and a 0.7 damping ratio.
const angularFrequency = (2 * Math.PI) / 0.5;
const releaseSpring = {
  type: 'spring' as const,
  stiffness: angularFrequency ** 2,
  damping: 2 * 0.7 * angularFrequency,
};

export function wheelTravel(height: number, [low, middle, high]: Heights) {
  const band = clamp(Math.min(middle - low, high - middle) * 0.2, 28, 84);
  let position = height;
  let direction = 0;
  let pressure = 0;
  let peak = 0;
  let steadyMs = 0;
  let steadySpeed = 0;
  let lastSpeed = 0;
  let held = false;
  let crossed = false;
  let velocity = 0;

  return {
    move(delta: number, dt: number) {
      const sign = Math.sign(delta);
      const speed = Math.abs(delta) / clamp(dt, 8, 48);
      let enteringDetent = false;
      if (sign !== direction) {
        pressure = peak = lastSpeed = steadyMs = steadySpeed = 0;
        held = Math.abs(position - middle) < 2;
        enteringDetent = held;
        crossed = false;
        direction = sign;
      }
      const accelerating = speed > lastSpeed * 1.35 && speed - lastSpeed > 0.12;
      const fading = speed < lastSpeed * 0.96;
      // Compare the whole interval. A long momentum tail can lose only a
      // few percent per event while slowing substantially across the interval.
      if (speed < 0.08 || Math.abs(speed - steadySpeed) > steadySpeed * 0.1) {
        steadySpeed = speed;
        steadyMs = 0;
      } else {
        steadyMs += Math.min(dt, 48);
      }
      if (accelerating || steadyMs >= 100) peak = speed;
      peak = Math.max(peak, speed);
      lastSpeed = speed;
      velocity = sign * speed;

      const next = clamp(position + delta, low, high);
      if (
        !held &&
        !crossed &&
        (middle - position) * sign > 0 &&
        (next - middle) * sign >= 0
      ) {
        held = true;
        enteringDetent = true;
        delta = next - middle;
      }
      if (held) {
        // Fading momentum can arrive for hundreds of milliseconds. Only
        // sustained or strengthening input earns travel through the detent.
        if (!fading && speed >= peak * 0.72 && speed > 0.025) {
          // A coalesced event can span the entire band. Require a subsequent
          // sample to confirm the push before releasing the middle stop.
          pressure += enteringDetent
            ? Math.min(Math.abs(delta), band / 2)
            : Math.abs(delta);
        }
        if (pressure < band) {
          position = middle + sign * pressure * 0.22;
          return position;
        }
        held = false;
        crossed = true;
        position = clamp(
          middle + sign * (band * 0.22 + pressure - band),
          low,
          high,
        );
      } else {
        position = next;
      }
      return position;
    },
    target() {
      if (held) return 1;
      if (crossed) return direction > 0 ? 2 : 0;
      const projected = position + clamp(velocity * 90, -band, band);
      if (projected < (low + middle) / 2) return 0;
      return projected > (middle + high) / 2 ? 2 : 1;
    },
    // The sheet moves at a fraction of wheel speed while it resists at medium.
    velocity: () => clamp(velocity * (held ? 0.22 : 1) * 1000, -1400, 1400),
  };
}

export function bindInspectorWheel(
  frame: () => HTMLElement | null,
  controller: Pick<DrawerController, 'getSnapPoint' | 'setSnapPoint'>,
  stops: readonly SnapPoint[],
  backdrop: () => HTMLElement | null,
) {
  let travel: ReturnType<typeof wheelTravel> | undefined;
  let heights: Heights;
  let height = 0;
  let reachedFull = false;
  let lastTime = -Infinity;
  let lastX = NaN;
  let lastY = NaN;
  let release: ReturnType<typeof setTimeout>;
  let spring: ReturnType<typeof animate<number>> | undefined;
  let painted: HTMLElement | null = null;

  let generation = 0;

  function paint(value: number) {
    const sheet = frame()?.parentElement;
    if (!sheet) return;
    // Let a release compress briefly at either end. The frame stays anchored
    // at its bottom, with less than 8px of additional travel at the top.
    const bounded = clamp(value, heights[0], heights[2]);
    const excess = value - bounded;
    height = bounded + Math.sign(excess) * rubberBand(Math.abs(excess), 8);
    painted = sheet;
    sheet.style.setProperty('--wheel-height', height + 'px');
    sheet.setAttribute('data-wheel-height', '');
    backdrop()?.style.setProperty(
      '--wheel-dim',
      String(clamp((height - heights[0]) / (heights[1] - heights[0]), 0, 1)),
    );
    backdrop()?.setAttribute('data-wheel-dim', '');
  }

  function clear() {
    generation++;
    clearTimeout(release);
    spring?.stop();
    spring = undefined;
    travel = undefined;
    painted?.removeAttribute('data-wheel-height');
    painted?.style.removeProperty('--wheel-height');
    painted = null;
    backdrop()?.removeAttribute('data-wheel-dim');
    backdrop()?.style.removeProperty('--wheel-dim');
  }

  function settle() {
    if (!travel) return;
    clearTimeout(release);
    const ticket = ++generation;
    const index = travel.target();
    const velocity = travel.velocity();
    travel = undefined;
    controller.setSnapPoint(stops[index]);
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      clear();
      return;
    }
    spring = animate(height, heights[index], {
      ...releaseSpring,
      velocity,
      onUpdate: paint,
      onComplete: () => {
        // Keep the wheel presentation until the SDK's underlying snap also rests.
        const running = frame()?.parentElement?.getAnimations() ?? [];
        Promise.allSettled(running.map((animation) => animation.finished)).then(
          () => {
            if (ticket === generation) clear();
          },
        );
      },
    });
  }

  function wheel(event: WheelEvent) {
    const panel = frame();
    const sheet = panel?.parentElement;
    if (!panel || !sheet || event.ctrlKey || !event.deltaY) return;
    const target = event.target as Node;
    const samePlace =
      Math.abs(event.clientX - lastX) < 3 &&
      Math.abs(event.clientY - lastY) < 3;
    if (
      !panel.contains(target) &&
      !(
        samePlace &&
        (travel || spring || sheet.getAttribute('aria-modal') === 'true')
      )
    )
      return;
    const full = controller.getSnapPoint() === stops[2];
    if (Math.abs(event.deltaX) >= Math.abs(event.deltaY)) {
      if (!full || travel) event.preventDefault();
      return;
    }

    const body = panel.querySelector<HTMLElement>('[data-inspector-scroll]');
    if (
      !travel &&
      (!spring || reachedFull || height >= heights[2] - 1) &&
      full &&
      body?.contains(target) &&
      (event.deltaY > 0 || body.scrollTop > 1)
    )
      return;
    event.preventDefault();
    if (!travel) {
      const bounds = sheet.getBoundingClientRect();
      const viewport = sheet.parentElement!.getBoundingClientRect();
      heights = [
        parseFloat(getComputedStyle(document.documentElement).fontSize) *
          parseFloat(String(stops[0])),
        viewport.height * Number(stops[1]),
        bounds.height,
      ];
      height = clamp(viewport.bottom - bounds.top, heights[0], heights[2]);
      generation++;
      spring?.stop();
      spring = undefined;
      reachedFull = false;
      travel = wheelTravel(height, heights);
    }
    const unit =
      event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? heights[2] : 1;
    paint(travel.move(event.deltaY * unit, event.timeStamp - lastTime));
    lastX = event.clientX;
    lastY = event.clientY;
    lastTime = event.timeStamp;
    clearTimeout(release);
    if (event.deltaY > 0 && height === heights[2]) {
      reachedFull = true;
      settle();
    } else release = setTimeout(settle, 75);
  }

  document.addEventListener('wheel', wheel, { passive: false, capture: true });
  document.addEventListener('pointerdown', clear, true);
  document.addEventListener('keydown', clear, true);
  window.addEventListener('resize', clear);
  return () => {
    clear();
    document.removeEventListener('wheel', wheel, true);
    document.removeEventListener('pointerdown', clear, true);
    document.removeEventListener('keydown', clear, true);
    window.removeEventListener('resize', clear);
  };
}
