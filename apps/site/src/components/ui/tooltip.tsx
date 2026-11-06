import {
  createContext,
  useContext,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react';
import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip';
import { cn } from '@/lib/utils';

const TooltipHandleContext =
  createContext<TooltipPrimitive.Handle<string> | null>(null);

export const TooltipProvider = TooltipPrimitive.Provider;

function TooltipPopup({
  children,
  side = 'top',
  shared = false,
}: {
  children: ReactNode;
  side?: TooltipPrimitive.Positioner.Props['side'];
  shared?: boolean;
}) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        side={side}
        sideOffset={8}
        data-slot="tooltip-positioner"
        className={cn(
          'z-80 max-w-(--available-width)',
          shared
            ? 'h-(--positioner-height) w-(--positioner-width) transition-[top,left,right,bottom,transform] duration-150 data-instant:transition-none motion-reduce:transition-none'
            : 'w-max',
        )}
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-popup"
          className={cn(
            'max-w-80 rounded-lg bg-ink text-xs text-canvas shadow-lg transition-opacity duration-150 data-ending-style:opacity-0 data-instant:duration-0 data-starting-style:opacity-0 motion-reduce:transition-none',
            shared
              ? 'relative flex h-(--popup-height,auto) w-(--popup-width,auto) origin-(--transform-origin) transition-[width,height,scale,opacity] data-ending-style:scale-98 data-starting-style:scale-98 motion-reduce:scale-100!'
              : 'px-2.5 py-1.5',
          )}
        >
          {shared ? (
            <TooltipPrimitive.Viewport
              data-slot="tooltip-viewport"
              className="relative size-full overflow-clip px-(--viewport-inline-padding) py-1.5 [--viewport-inline-padding:--spacing(2.5)] **:data-current:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding))] **:data-current:opacity-100 **:data-current:transition-opacity **:data-current:duration-150 **:data-current:data-ending-style:opacity-0 data-instant:**:transition-none **:data-previous:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding))] **:data-previous:truncate **:data-previous:opacity-100 **:data-previous:transition-opacity **:data-previous:duration-150 **:data-previous:data-ending-style:opacity-0 **:data-current:data-starting-style:opacity-0 **:data-previous:data-starting-style:opacity-0 motion-reduce:**:transition-none"
            >
              {children}
            </TooltipPrimitive.Viewport>
          ) : (
            children
          )}
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  );
}

/** Share one animated popup between adjacent controls, including nested groups. */
export function TooltipGroup({
  children,
  side,
}: {
  children: ReactNode;
  side?: TooltipPrimitive.Positioner.Props['side'];
}) {
  const parentHandle = useContext(TooltipHandleContext);
  const [handle] = useState(() => TooltipPrimitive.createHandle<string>());

  if (parentHandle) return children;

  return (
    <TooltipHandleContext value={handle}>
      {children}
      <TooltipPrimitive.Root handle={handle}>
        {({ payload }) => (
          <TooltipPopup side={side} shared>
            {payload}
          </TooltipPopup>
        )}
      </TooltipPrimitive.Root>
    </TooltipHandleContext>
  );
}

export function Tooltip({
  label,
  children,
  side,
}: {
  label: string;
  children: ReactElement;
  side?: TooltipPrimitive.Positioner.Props['side'];
}) {
  const handle = useContext(TooltipHandleContext);

  if (handle) {
    return (
      <TooltipPrimitive.Trigger
        handle={handle}
        payload={label}
        render={children}
      />
    );
  }

  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger render={children} />
      <TooltipPopup side={side}>{label}</TooltipPopup>
    </TooltipPrimitive.Root>
  );
}
