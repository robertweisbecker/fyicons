import { Toast } from '@base-ui/react/toast';
import IconX from 'fyicons/icons/IconX';
import { Button } from '@/components/ui/button';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import './toast.css';

type ToastData = { icon?: ReactNode };
const toastManager = Toast.createToastManager<ToastData>();
export function notify(
  title: ReactNode,
  options?: ToastData & { id?: string },
) {
  toastManager.add({
    id: options?.id ?? (typeof title === 'string' ? title : undefined),
    title,
    data: { icon: options?.icon },
  });
}

function ToastViewport() {
  const { toasts } = Toast.useToastManager<ToastData>();
  return (
    <Toast.Portal>
      <Toast.Viewport className="pointer-events-none fixed top-[calc(env(safe-area-inset-top,0px)+0.5rem)] left-1/2 z-80 h-[var(--toast-frontmost-height,0px)] w-[calc(100%-2rem)] -translate-x-1/2 outline-none">
        {toasts.map((toast) => (
          <Toast.Root
            key={toast.id}
            toast={toast}
            swipeDirection={['right', 'up']}
            data-slot="toast"
            className={cn(
              // Top-anchored adaptation of Base UI's Tailwind stack: https://base-ui.com/react/components/toast
              '[--gap:0.75rem] [--height:var(--toast-frontmost-height,var(--toast-height))] [--offset-y:calc(var(--toast-offset-y)+var(--toast-index)*var(--gap)+var(--toast-swipe-movement-y))] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))]',
              'dark pointer-events-auto absolute top-0 left-1/2 z-[calc(1000-var(--toast-index))] h-(--height) w-max max-w-full origin-top -translate-x-1/2 rounded-full bg-surface text-ink shadow-lg outline-1 outline-offset-(--surface-outline-offset) outline-ink/10 select-none',
              '[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+(var(--toast-index)*var(--peek))))_scale(var(--scale))] [transition:transform_0.5s_cubic-bezier(0.22,1,0.36,1),opacity_0.5s,height_0.15s]',
              "after:absolute after:bottom-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-['']",
              'data-expanded:h-(--toast-height) data-expanded:[transform:translateX(var(--toast-swipe-movement-x))_translateY(var(--offset-y))] data-limited:pointer-events-none data-limited:opacity-0 data-swiping:transition-none',
              'data-ending-style:opacity-0 data-starting-style:[transform:translateY(-0.25rem)] data-starting-style:opacity-0 [&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:[transform:translateY(-0.25rem)]',
              'data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]',
              'data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]',
              'data-[updated=even]:animate-[toast-repeat-even_0.28s_ease] data-[updated=odd]:animate-[toast-repeat-odd_0.28s_ease]',
            )}
            data-updated={
              toast.updateKey
                ? toast.updateKey % 2
                  ? 'odd'
                  : 'even'
                : undefined
            }
          >
            <Toast.Content
              data-slot="toast-content"
              className="flex items-center gap-2 overflow-hidden py-1.5 pr-1.5 pl-3 transition-opacity duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] data-behind:opacity-0 data-expanded:opacity-100"
            >
              {toast.data?.icon && (
                <span className="shrink-0">{toast.data.icon}</span>
              )}
              <Toast.Title className="min-w-0 flex-1 text-sm break-words" />
              <Toast.Close
                render={
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="rounded-full"
                  />
                }
                aria-label="Dismiss notification"
              >
                <IconX />
              </Toast.Close>
            </Toast.Content>
          </Toast.Root>
        ))}
      </Toast.Viewport>
    </Toast.Portal>
  );
}

export function ToastProvider({ children }: { children: ReactNode }) {
  return (
    <Toast.Provider toastManager={toastManager} timeout={4000} limit={3}>
      {children}
      <ToastViewport />
    </Toast.Provider>
  );
}
