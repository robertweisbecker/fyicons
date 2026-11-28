import { IconReveal } from '@/prototypes/icon-reveal/IconReveal';

export const metadata = { title: 'Outline and filled' };

export default function IconRevealPage() {
  return (
    <section className="mx-auto w-full max-w-xl px-4 py-8 sm:px-8 sm:py-12">
      <h1 className="mb-5 text-2xl font-medium tracking-tight">
        Outline and filled
      </h1>
      <IconReveal />
    </section>
  );
}
