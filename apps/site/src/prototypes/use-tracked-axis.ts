import { animate, useMotionValue, useReducedMotion } from 'motion/react';

export function useTrackedAxis(rest: number) {
  const value = useMotionValue(rest);
  const reduceMotion = useReducedMotion();

  function track(next: number, direct = false) {
    if (direct || reduceMotion) value.jump(next);
    else
      animate(value, next, {
        type: 'spring',
        stiffness: 600,
        damping: 40,
        mass: 0.65,
      });
  }

  function reset() {
    if (reduceMotion) value.jump(rest);
    else
      animate(value, rest, {
        type: 'spring',
        delay: 0.1,
        stiffness: 135,
        damping: 30,
        velocity: 0,
      });
  }

  return { value, track, reset };
}
