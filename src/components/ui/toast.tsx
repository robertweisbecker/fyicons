import { Toast } from '@base-ui/react/toast';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import './toast.css';

type ToastData = { icon?: string };
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
      <Toast.Viewport className="fixed right-4 bottom-4 z-80 h-[var(--toast-frontmost-height,0px)] w-88 max-w-[calc(100%-2rem)] outline-none">
        {toasts.map((toast) => (
          <Toast.Root
            key={toast.id}
            toast={toast}
            swipeDirection={['right', 'down']}
            data-slot="toast"
            className={cn(
              // Base UI's Tailwind stack: https://base-ui.com/react/components/toast
              '[--gap:0.75rem] [--height:var(--toast-frontmost-height,var(--toast-height))] [--offset-y:calc(var(--toast-offset-y)*-1+var(--toast-index)*var(--gap)*-1+var(--toast-swipe-movement-y))] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))] [--shrink:calc(1-var(--scale))]',
              'absolute right-0 bottom-0 z-[calc(1000-var(--toast-index))] h-(--height) w-full origin-bottom rounded-xl bg-surface text-ink shadow-lg outline-1 outline-offset-(--surface-outline-offset) outline-ink/10 select-none',
              '[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))] [transition:transform_0.5s_cubic-bezier(0.22,1,0.36,1),opacity_0.5s,height_0.15s]',
              "after:absolute after:top-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-['']",
              'data-expanded:h-(--toast-height) data-expanded:[transform:translateX(var(--toast-swipe-movement-x))_translateY(var(--offset-y))] data-limited:pointer-events-none data-limited:opacity-0 data-swiping:transition-none',
              'data-ending-style:opacity-0 data-starting-style:[transform:translateY(150%)] [&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:[transform:translateY(150%)]',
              'data-ending-style:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]',
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
              className="flex items-center gap-3 overflow-hidden p-3 transition-opacity duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] data-behind:opacity-0 data-expanded:opacity-100"
            >
              {toast.data?.icon && (
                <Icon name={toast.data.icon} className="shrink-0" />
              )}
              <Toast.Title className="min-w-0 flex-1 text-sm break-words" />
              <Toast.Close
                render={<Button variant="ghost" size="icon-sm" />}
                aria-label="Dismiss notification"
              >
                <Icon name="xmark" />
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
