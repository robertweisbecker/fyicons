import IconSun from 'fyicons/icons/IconSun';
import IconSpinner from 'fyicons/icons/IconSpinner';
import IconLoader from 'fyicons/icons/IconLoader';
import IconGitMerge from 'fyicons/icons/IconGitMerge';
import { IconRays } from 'fyicons';
import {
  FyiProvider,
  IconBookmark,
  IconFolder,
  IconHome,
} from 'fyicons/client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DocsExample } from './DocsExample';

const colors = [
  { label: 'Inherited', value: undefined },
  { label: 'Blue', value: '#2563eb' },
  { label: 'Green', value: '#16a34a' },
  { label: 'Violet', value: '#8b5cf6' },
];

export function LightButtonExample() {
  return (
    <DocsExample aria-label="Customized React icon example">
      <Button variant="outline" size="icon" aria-label="Switch to light mode">
        <IconSun size={24} color="#2563eb" />
      </Button>
    </DocsExample>
  );
}

export function ClassNameExample() {
  return (
    <DocsExample aria-label="Icon styled with a CSS class">
      <IconSun size={32} className="text-blue-500" aria-label="Sun" />
    </DocsExample>
  );
}

export function DecorativeIconExample() {
  return (
    <DocsExample aria-label="Decorative icon with visible text">
      <span className="flex items-center gap-2">
        <IconSun /> Light mode
      </span>
    </DocsExample>
  );
}

export function StandaloneIconExample() {
  return (
    <DocsExample aria-label="Standalone status icon">
      <IconGitMerge size={32} aria-label="Status: Merged" />
    </DocsExample>
  );
}

export function IconButtonExample() {
  return (
    <DocsExample aria-label="Accessible icon button">
      <Button variant="outline" size="icon" aria-label="Switch to light mode">
        <IconSun />
      </Button>
    </DocsExample>
  );
}

export function ExternalLabelExample() {
  return (
    <DocsExample aria-label="Icon with an external label">
      <span className="flex items-center gap-2">
        <span id="light-mode-label-example">Light mode</span>
        <IconSun
          aria-labelledby="light-mode-label-example"
          role="img"
          aria-hidden={false}
        />
      </span>
    </DocsExample>
  );
}

export function ProviderExample() {
  return (
    <div
      data-not-typeset=""
      role="group"
      aria-label="Shared icon defaults example"
      className="my-6 rounded-xl border border-line bg-surface p-5 sm:p-8"
    >
      <FyiProvider size={20} className="nav-icon" color="red">
        <div className="mx-auto flex w-fit flex-col gap-4">
          <div className="flex items-center gap-2">
            <IconHome /> Home
            <Badge size="sm">20px</Badge>
          </div>
          <div className="flex items-center gap-2">
            <IconFolder /> All files
            <Badge size="sm">20px</Badge>
          </div>
          <div className="flex items-center gap-2">
            <IconBookmark size={16} /> Saved files
            <Badge size="sm">16px</Badge>
          </div>
        </div>
      </FyiProvider>
    </div>
  );
}

export function SizeExamples() {
  return (
    <div
      data-not-typeset=""
      role="group"
      aria-label="Icon sizes"
      className="my-6 rounded-xl border border-line bg-surface p-5 sm:p-8"
    >
      <div className="mx-auto grid max-w-md grid-cols-4 gap-2">
        {[16, 24, 32, 48].map((size) => (
          <div key={size} className="flex flex-col items-center gap-2">
            <div className="flex h-16 items-center justify-center">
              <IconSun size={size} aria-label={`Sun at ${size} pixels`} />
            </div>
            <span className="text-xs text-muted tabular-nums">{size}px</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InlineSizeExample() {
  return (
    <div
      data-not-typeset=""
      role="group"
      aria-label="Icons inline with text"
      className="my-6 rounded-xl border border-line bg-surface p-5 sm:p-8"
    >
      <div className="mx-auto flex max-w-md flex-col gap-5">
        {['text-sm', 'text-xl', 'text-3xl'].map((textSize) => (
          <span key={textSize} className={textSize}>
            Good morning <IconSun size="1em" className="inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function ColorExamples() {
  return (
    <div
      data-not-typeset=""
      role="group"
      aria-label="Icon colors"
      className="my-6 rounded-xl border border-line bg-surface p-5 sm:p-8"
    >
      <div className="mx-auto grid max-w-md grid-cols-4 gap-2">
        {colors.map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <div className="flex h-16 items-center justify-center">
              <IconSun size={24} color={value} aria-label={`${label} color`} />
            </div>
            <span className="text-xs text-muted">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LoadingExamples() {
  return (
    <div
      data-not-typeset=""
      role="group"
      aria-label="Loading icon examples"
      className="my-6 rounded-xl border border-line bg-surface p-5 sm:p-8"
    >
      <div className="mx-auto grid max-w-sm grid-cols-3 gap-6">
        <figure className="m-0 flex flex-col items-center gap-3">
          <div className="flex size-16 items-center justify-center">
            <IconSpinner
              size={32}
              aria-label="Spinner loading indicator"
              className="animate-spin [animation-timing-function:steps(10)] motion-reduce:animate-none"
            />
          </div>
          <figcaption className="text-xs text-muted">IconSpinner</figcaption>
        </figure>
        <figure className="m-0 flex flex-col items-center gap-3">
          <div className="flex size-16 items-center justify-center">
            <IconLoader
              size={32}
              aria-label="Loader loading indicator"
              className="animate-spin motion-reduce:animate-none"
            />
          </div>
          <figcaption className="text-xs text-muted">IconLoader</figcaption>
        </figure>
        <figure className="m-0 flex flex-col items-center gap-3">
          <div className="flex size-16 items-center justify-center">
            <IconRays
              size={32}
              aria-label="Rays loading indicator"
              className="animate-spin motion-reduce:animate-none"
            />
          </div>
          <figcaption className="text-xs text-muted">IconRays</figcaption>
        </figure>
      </div>
    </div>
  );
}
