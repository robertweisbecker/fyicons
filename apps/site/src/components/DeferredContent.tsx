'use client';
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
  type RefObject,
} from 'react';

const DemoActivity = createContext(true);
export function DemoActivityBoundary({
  active,
  children,
}: {
  active: boolean;
  children: ReactNode;
}) {
  return <DemoActivity value={active}>{children}</DemoActivity>;
}
export const useDemoActivity = () => useContext(DemoActivity);

export function useNearViewport(ref: RefObject<HTMLElement | null>) {
  const [near, setNear] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!('IntersectionObserver' in window)) {
      setNear(true);
      setVisible(true);
      return;
    }
    const preload = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setNear(true);
          preload.disconnect();
        }
      },
      { rootMargin: '600px 0px' },
    );
    let intersecting = false;
    const updateVisibility = () => setVisible(intersecting && !document.hidden);
    const visibility = new IntersectionObserver((entries) => {
      intersecting = entries.some((entry) => entry.isIntersecting);
      updateVisibility();
    });
    document.addEventListener('visibilitychange', updateVisibility);
    preload.observe(node);
    visibility.observe(node);
    const reveal = () => {
      setNear(true);
    };
    const anchor = () => {
      if (location.hash) {
        let id = location.hash.slice(1);
        try {
          id = decodeURIComponent(id);
        } catch {}
        const target = document.getElementById(id);
        if (
          target &&
          (node.contains(target) || target.closest('section')?.contains(node))
        )
          reveal();
      }
    };
    const focus = () => reveal();
    node.addEventListener('focusin', focus);
    window.addEventListener('hashchange', anchor);
    anchor();
    return () => {
      preload.disconnect();
      visibility.disconnect();
      document.removeEventListener('visibilitychange', updateVisibility);
      node.removeEventListener('focusin', focus);
      window.removeEventListener('hashchange', anchor);
    };
  }, [ref]);
  return { near, visible };
}

export function DeferredModule<P extends object>({
  loader,
  enabled,
  active = true,
  componentProps,
  fallback,
}: {
  loader: () => Promise<ComponentType<P>>;
  enabled: boolean;
  active?: boolean;
  componentProps: P;
  fallback?: ReactNode;
}) {
  const [Component, setComponent] = useState<ComponentType<P>>();
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    if (!enabled || Component) return;
    let current = true;
    setError(false);
    loader().then(
      (module) => {
        if (current) setComponent(() => module);
      },
      () => {
        if (current) setError(true);
      },
    );
    return () => {
      current = false;
    };
  }, [enabled, loader, Component, attempt]);
  if (Component)
    return (
      <DemoActivity value={active}>
        <div
          data-demo-active={active || undefined}
          className={
            active
              ? 'contents'
              : 'contents [&_*]:[animation-play-state:paused]!'
          }
        >
          <Component {...componentProps} />
        </div>
      </DemoActivity>
    );
  return (
    <div className="relative">
      <div aria-hidden={error || undefined} inert={error || undefined}>
        {fallback}
      </div>
      {enabled && !error && (
        <span className="sr-only" role="status">
          Loading demo…
        </span>
      )}
      {error && (
        <div
          role="alert"
          className="absolute inset-0 grid place-content-center rounded-xl bg-surface p-4 text-center text-sm"
        >
          <p>This demo could not be loaded.</p>
          <button
            type="button"
            className="mt-2 underline"
            onClick={() => setAttempt((value) => value + 1)}
          >
            Retry demo
          </button>
        </div>
      )}
    </div>
  );
}

export function DeferredContent<P extends object>({
  loader,
  componentProps,
  fallback,
  className,
}: {
  loader: () => Promise<ComponentType<P>>;
  componentProps: P;
  fallback: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { near, visible } = useNearViewport(ref);
  return (
    <div ref={ref} className={className}>
      <DeferredModule
        loader={loader}
        enabled={near}
        active={visible}
        componentProps={componentProps}
        fallback={fallback}
      />
    </div>
  );
}
