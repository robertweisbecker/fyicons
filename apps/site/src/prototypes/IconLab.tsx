'use client';

import { Gallery } from './icon-examples/Gallery';
import { IconPlayground } from './icon-examples/IconPlayground';

export function IconLab() {
  return (
    <div className="mx-auto max-w-320 px-4 pb-12 sm:px-6 lg:px-8">
      <header className="pt-10 pb-8 sm:pt-14">
        <h1 className="text-3xl font-medium tracking-tight">Examples</h1>
      </header>
      <Gallery />
      <IconPlayground ref={null} />
    </div>
  );
}
