import { Icon } from '@/components/Icon';
import { InstallCommand } from '@/components/InstallCommand';
import { DownloadIconsButton } from '@/components/DownloadIconsButton';
import { icons } from '@/lib/catalog';
import { ShadcnIcon } from '@/components/BrandIcons';

export function Installation() {
  return (
    <section
      id="installation"
      aria-labelledby="installation-heading"
      className="scroll-mt-24 border-t border-line pt-10"
    >
      <h2
        id="installation-heading"
        className="mb-8 text-3xl font-medium tracking-tight sm:text-4xl"
      >
        Get started
      </h2>
      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        <article className="flex min-w-0 flex-col gap-4">
          <h3 className="flex items-center gap-2 text-lg font-medium tracking-tight">
            <Icon name="atom-react" className="size-5 text-sky-400" />
            React
          </h3>
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
          <h3 className="flex items-center gap-2 text-lg font-medium tracking-tight">
            <ShadcnIcon className="size-5 text-muted" />
            shadcn
          </h3>
          <p className="text-sm leading-6 text-muted">
            Add individual icon components to your project for more control.
            Just replace the icon name with the one you want.
          </p>
          <InstallCommand
            command="npx shadcn@latest add robertweisbecker/fyicons/circle"
            label="shadcn"
            className="mt-auto"
          />
        </article>
        <article className="flex min-w-0 flex-col gap-4">
          <h3 className="flex items-center gap-2 text-lg font-medium tracking-tight">
            <Icon name="file-zip" className="size-5 text-muted/50" />
            SVGs
          </h3>
          <p className="text-sm leading-6 text-balance text-muted">
            Download all {icons.length.toLocaleString('en-US')} icons as a ZIP.
            Use them with any framework or drag them into your design files.
          </p>
          <DownloadIconsButton className="mt-auto self-start max-md:w-full" />
        </article>
      </div>
    </section>
  );
}
