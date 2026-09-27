import { Toast } from '@base-ui/react/toast';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import type { ReactNode } from 'react';

const toastManager = Toast.createToastManager();
export function notify(title: string) {
  toastManager.add({ id: 'feedback', title });
}

function ToastViewport() {
  const { toasts } = Toast.useToastManager();
  return (
    <Toast.Portal>
      <Toast.Viewport className="fixed right-4 bottom-4 z-80 flex w-88 max-w-[calc(100%-2rem)] flex-col gap-2 outline-none">
        {toasts.map((toast) => (
          <Toast.Root
            key={toast.id}
            toast={toast}
            className="flex items-center gap-3 rounded-xl border border-line bg-surface p-3 text-ink shadow-lg data-limited:hidden"
          >
            <Toast.Content className="min-w-0 flex-1">
              <Toast.Title className="text-sm" />
            </Toast.Content>
            <Toast.Close
              render={<Button variant="ghost" size="icon-sm" />}
              aria-label="Dismiss notification"
            >
              <Icon name="xmark" />
            </Toast.Close>
          </Toast.Root>
        ))}
      </Toast.Viewport>
    </Toast.Portal>
  );
}

export function ToastProvider({ children }: { children: ReactNode }) {
  return (
    <Toast.Provider toastManager={toastManager} timeout={4000} limit={1}>
      {children}
      <ToastViewport />
    </Toast.Provider>
  );
}
