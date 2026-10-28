import packageInfo from 'fyicons/package.json' with { type: 'json' };
import { Icon } from '@/components/Icon';
import { InstallCommand } from '@/components/InstallCommand';
import { Button } from '@/components/ui/button';
import { icons } from '@/lib/catalog';

export function Installation({
  packing,
  download,
}: {
  packing: boolean;
  download: () => void;
}) {
  return (
    <section
      id="installation"
      aria-labelledby="installation-heading"
      className="scroll-mt-24 border-t border-line pt-10"
    >
      <h2
        id="installation-heading"
        className="mb-8 text-2xl font-medium tracking-tight"
      >
        Installation
      </h2>
      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        <article className="flex min-w-0 flex-col gap-4">
          <h3 className="text-lg font-medium tracking-tight">React</h3>
          <p className="text-sm leading-6 text-muted">
            Install the React components and use them in your project.
            Tree-shakable so use what you need.
          </p>
          <InstallCommand
            command="npm i fyicons"
            label="npm"
            className="mt-auto"
          />
        </article>
        <article className="flex min-w-0 flex-col gap-4">
          <h3 className="text-lg font-medium tracking-tight">
            shadcn/ui registry
          </h3>
          <p className="text-sm leading-6 text-muted">
            Add individual icon components to your project for more control.
            Just replace the icon name with the one you want.
          </p>
          <InstallCommand
            command={`npx shadcn@latest add 'robertweisbecker/fyicons/circle#fyicons@${packageInfo.version}'`}
            label="shadcn"
            className="mt-auto"
          />
        </article>
        <article className="flex min-w-0 flex-col gap-4">
          <h3 className="text-lg font-medium tracking-tight">SVG</h3>
          <p className="text-sm leading-6 text-balance text-muted">
            Download all {icons.length.toLocaleString('en-US')} icons as a ZIP.
            Use them with any framework or drag them into your design files.
          </p>
          <Button
            disabled={packing}
            onClick={download}
            aria-busy={packing}
            className="mt-auto self-start max-md:w-full"
          >
            <Icon name="download-square" data-icon="inline-start" />
            {packing ? 'Preparing download…' : 'Download'}
          </Button>
        </article>
      </div>
    </section>
  );
}
