import { ProgressPad } from '@/prototypes/ProgressPad';

export const metadata = { title: 'Progress icons' };

export default function ProgressIconsPage() {
  return (
    <section className="mx-auto max-w-xl px-4 py-8 sm:px-8 sm:py-12">
      <h1 className="text-2xl font-medium tracking-tight">Progress icons</h1>
      <p className="mt-1 mb-5 text-sm text-muted">
        Move up or right to advance the icons.
      </p>
      <ProgressPad />
    </section>
  );
}
