import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto min-h-[60dvh] max-w-7xl px-6 py-20">
      <h1 className="text-3xl font-medium tracking-tight">Page not found</h1>
      <p className="mt-4 text-muted">This page does not exist.</p>
      <Link
        href="/icons/"
        className="mt-6 inline-block underline underline-offset-4"
      >
        Browse icons
      </Link>
    </div>
  );
}
