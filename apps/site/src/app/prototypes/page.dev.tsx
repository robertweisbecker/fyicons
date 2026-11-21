import Link from 'next/link';

export const metadata = { title: 'Prototypes' };

const prototypes = [{ href: '/prototypes/examples/', name: 'Icon examples' }];

export default function PrototypesPage() {
  return (
    <nav
      aria-labelledby="prototypes-title"
      className="mx-auto max-w-320 px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
    >
      <h1 id="prototypes-title" className="text-3xl font-medium tracking-tight">
        Prototypes
      </h1>
      <ul className="mt-6 list-disc space-y-2 pl-5">
        {prototypes.map(({ href, name }) => (
          <li key={href}>
            <Link
              href={href}
              prefetch={false}
              className="underline underline-offset-4"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
