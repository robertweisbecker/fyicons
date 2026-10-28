import {
  createContext,
  useContext,
  useState,
  type ReactElement,
  type ReactNode,
} from 'react';
import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip';

const TooltipHandleContext =
  createContext<TooltipPrimitive.Handle<string> | null>(null);

export const TooltipProvider = TooltipPrimitive.Provider;

function TooltipPopup({
  children,
  side = 'top',
}: {
  children: ReactNode;
  side?: TooltipPrimitive.Positioner.Props['side'];
}) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        side={side}
        sideOffset={8}
        data-slot="tooltip-positioner"
        className="z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom,transform] duration-150 data-instant:transition-none motion-reduce:transition-none"
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-popup"
          className="relative flex h-(--popup-height,auto) w-(--popup-width,auto) max-w-80 origin-(--transform-origin) rounded-lg bg-ink text-xs text-canvas shadow-lg transition-[width,height,scale,opacity] duration-150 data-ending-style:scale-98 data-ending-style:opacity-0 data-instant:duration-0 data-starting-style:scale-98 data-starting-style:opacity-0 motion-reduce:scale-100! motion-reduce:transition-none"
        >
          <TooltipPrimitive.Viewport
            data-slot="tooltip-viewport"
            className="relative size-full overflow-clip px-(--viewport-inline-padding) py-1.5 [--viewport-inline-padding:--spacing(2.5)] **:data-current:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding))] **:data-current:opacity-100 **:data-current:transition-opacity **:data-current:duration-150 **:data-current:data-ending-style:opacity-0 data-instant:**:transition-none **:data-previous:w-[calc(var(--popup-width)-2*var(--viewport-inline-padding))] **:data-previous:truncate **:data-previous:opacity-100 **:data-previous:transition-opacity **:data-previous:duration-150 **:data-previous:data-ending-style:opacity-0 **:data-current:data-starting-style:opacity-0 **:data-previous:data-starting-style:opacity-0 motion-reduce:**:transition-none"
          >
            {children}
          </TooltipPrimitive.Viewport>
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  );
}

/** Share one popup within a control group or example, including nested groups. */
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
        {({ payload }) => <TooltipPopup side={side}>{payload}</TooltipPopup>}
      </TooltipPrimitive.Root>
    </TooltipHandleContext>
  );
}

export function Tooltip({
  label,
  children,
}: {
  label: string;
  children: ReactElement;
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
      <TooltipPopup>{label}</TooltipPopup>
    </TooltipPrimitive.Root>
  );
}
