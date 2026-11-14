import IconCircleCheckFill from 'fyicons/icons/IconCircleCheckFill';
import IconMoon from 'fyicons/icons/IconMoon';
import IconPlus from 'fyicons/icons/IconPlus';
import IconSun from 'fyicons/icons/IconSun';
import { Button } from '@/components/ui/button';
import { DocsExample } from './DocsExample';

export function GlobalStylingExample() {
  return (
    <DocsExample aria-label="Icons matching surrounding text sizes">
      <div className="flex flex-col items-start gap-3">
        <span className="text-sm">
          Morning{' '}
          <IconSun className="inline-block size-[1em] align-[-0.11em]" />
        </span>
        <span className="text-2xl">
          Evening{' '}
          <IconMoon className="inline-block size-[1em] align-[-0.11em]" />
        </span>
      </div>
    </DocsExample>
  );
}

export function ToolbarStylingExample() {
  return (
    <DocsExample aria-label="Toolbar icon color example">
      <div className="toolbar flex items-center gap-1 rounded-lg bg-ink p-1 text-white">
        <Button variant="ghost" size="icon" aria-label="Light theme">
          <IconSun />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Dark theme">
          <IconMoon />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Add item">
          <IconPlus />
        </Button>
      </div>
    </DocsExample>
  );
}

export function NamedIconStylingExample() {
  return (
    <DocsExample aria-label="Targeted icon styling example">
      <div className="callout flex items-center gap-3 rounded-lg bg-emerald-500/8 px-4 py-3">
        <IconCircleCheckFill
          className="h-[1lh] w-[1.5em] self-baseline text-green-600"
          aria-hidden="true"
        />
        Your changes are saved.
      </div>
    </DocsExample>
  );
}

export function SpecificityStylingExample() {
  return (
    <DocsExample aria-label="Chained icon selector example">
      <IconCircleCheckFill
        size={32}
        className="text-green-700 dark:text-green-500"
        aria-label="Complete"
      />
    </DocsExample>
  );
}

export function ColorInheritanceExample() {
  return (
    <DocsExample aria-label="Icon inheriting its button color">
      <Button
        variant="outline"
        size="icon"
        className="btn-toolbar text-blue-600 dark:text-blue-400"
        aria-label="Add item"
      >
        <IconPlus />
      </Button>
    </DocsExample>
  );
}
