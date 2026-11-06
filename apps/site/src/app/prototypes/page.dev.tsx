import type { Metadata } from 'next';
import { WarningLoopPrototype } from '@/prototypes/WarningLoopPrototype';
import { SidebarPrototype } from '@/prototypes/SidebarPrototype';

export const metadata: Metadata = {
  title: 'Prototypes',
  description: 'Experiments in how FYIcons can bring interfaces to life.',
};

export default function PrototypesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
      <div className="py-8 sm:py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Prototypes</h1>
        <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
          Small experiments with icons in motion and in context.
        </p>
      </div>
      <div className="space-y-16">
        <WarningLoopPrototype />
        <SidebarPrototype />
      </div>
    </div>
  );
}
