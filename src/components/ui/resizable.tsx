import { useRef, type PointerEvent } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  value: number;
  min: number;
  max: number;
  defaultValue: number;
  controls: string;
  label: string;
  onValueChange: (value: number) => void;
  onResizingChange: (resizing: boolean) => void;
  className?: string;
};

/** A vertical separator that resizes the pane on its right. */
export function ResizableHandle({
  value,
  min,
  max,
  defaultValue,
  controls,
  label,
  onValueChange,
  onResizingChange,
  className,
}: Props) {
  const drag = useRef<{ pointerId: number; x: number; width: number } | null>(
    null,
  );
  const change = (next: number) =>
    onValueChange(Math.min(max, Math.max(min, next)));
  function finish(event: PointerEvent<HTMLDivElement>) {
    if (drag.current?.pointerId !== event.pointerId) return;
    drag.current = null;
    onResizingChange(false);
  }
  return (
    <div
      data-slot="resizable-handle"
      role="separator"
      tabIndex={0}
      aria-label={label}
      aria-orientation="vertical"
      aria-controls={controls}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={Math.round(value)}
      aria-valuetext={`${Math.round(value)} pixels`}
      title={`${label}. Drag or use arrow keys. Double-click to reset.`}
      className={cn(
        'absolute inset-y-0 left-0 z-10 flex w-3 -translate-x-1/2 cursor-ew-resize touch-none items-center justify-center before:absolute before:inset-y-0 before:w-px before:bg-line hover:before:bg-control-accent focus-visible:outline-focus focus-visible:before:bg-control-accent pointer-coarse:w-11',
        className,
      )}
      onPointerDown={(event) => {
        if (event.button !== 0) return;
        event.preventDefault();
        event.currentTarget.focus({ preventScroll: true });
        event.currentTarget.setPointerCapture(event.pointerId);
        drag.current = {
          pointerId: event.pointerId,
          x: event.clientX,
          width: value,
        };
        onResizingChange(true);
      }}
      onPointerMove={(event) => {
        const start = drag.current;
        if (start?.pointerId === event.pointerId)
          change(start.width + start.x - event.clientX);
      }}
      onPointerUp={finish}
      onPointerCancel={finish}
      onLostPointerCapture={finish}
      onDoubleClick={() => change(defaultValue)}
      onKeyDown={(event) => {
        if (event.metaKey || event.ctrlKey || event.altKey) return;
        const step = event.shiftKey ? 40 : 10;
        if (event.key === 'ArrowLeft') change(value + step);
        else if (event.key === 'ArrowRight') change(value - step);
        else if (event.key === 'Home') change(min);
        else if (event.key === 'End') change(max);
        else return;
        event.preventDefault();
        event.stopPropagation();
      }}
    >
      <span aria-hidden className="relative h-8 w-1 rounded-full bg-border" />
    </div>
  );
}
