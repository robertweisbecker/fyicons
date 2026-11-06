'use client';

import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { ShadcnIcon } from '@/components/BrandIcons';
import { DownloadIconsButton } from '@/components/DownloadIconsButton';
import { InstallCommand } from '@/components/InstallCommand';
import { SearchTrigger } from '@/components/SearchTrigger';
import { buttonVariants } from '@/components/ui/button';
import { icons } from '@/lib/catalog';
import { assetPath } from '@/lib/navigation';
import { Construction } from './Construction';
import { DesktopShowcase } from './desktop/DesktopShowcase';
import { IconGroupCarousel } from './IconGroupCarousel';
import { IconSpecimen } from './IconSpecimen';
import { IconVariants } from './IconVariants';
import { OpticalAdjustments } from './OpticalAdjustments';
import { StatefulIcons } from './StatefulIcons';
import './Landing.css';

// Landing heading styles live here alongside the page's section composition.
const sectionHeadingClassName =
  'text-3xl font-medium tracking-tight sm:text-4xl';
const featureHeadingClassName = 'text-2xl font-medium tracking-tight';
const installationHeadingClassName =
  'flex items-center gap-2 text-lg font-medium tracking-tight';

export default function Landing() {
  return (
    <>
      <div className="mx-auto max-w-7xl space-y-48 px-4 pb-16 sm:space-y-64 sm:px-6 sm:pb-24 [&>section:first-child]:mb-12 sm:[&>section:first-child]:mb-16">
        <section
          aria-label="Introduction"
          className="mx-auto grid max-w-135 grid-cols-1 items-center gap-6 px-2 pt-8 pb-12 md:max-w-292 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-8 md:px-6 md:py-14 lg:gap-18 lg:px-8 lg:pt-18 lg:pb-16"
        >
          <div className="hero-copy pt-8 pb-0 md:pt-13 md:pb-7">
            <h1 className="hero-headline text-[clamp(23px,7vw,36px)] leading-[1.125] font-medium tracking-[-0.035em] md:text-[clamp(23px,3.3vw,42px)]">
              <span className="hero-headline-line font-normal">
                Some icons I made{' '}
                <span className="hero-pen-word">
                  for me,
                  <Icon name="pen-tool-alt" className="hero-pen opacity-30" />
                </span>
              </span>
              <span className="hero-headline-line">
                now <span className="text-ink">for you.</span>
                <img
                  src={assetPath('/favicon.svg')}
                  alt=""
                  width={16}
                  height={16}
                  className="ml-[0.19em] inline-block size-[0.9524em] align-[-0.12em]"
                />
              </span>
            </h1>

            <div className="mt-7 mb-10 flex flex-col gap-10 leading-relaxed lg:mt-10">
              <div className="flex flex-col gap-5">
                <p className="text-balance text-muted tabular-nums">
                  Nice little icons for your nice little apps. Drawn
                  pixel-perfect to scale to any size.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col flex-wrap items-stretch gap-4 md:flex-row md:items-center">
                  <Link
                    className={buttonVariants({
                      variant: 'default',
                      size: 'lg',
                    })}
                    href="/icons/"
                  >
                    Browse all
                    <Icon name="arrow-right" size={16} />
                  </Link>
                  <InstallCommand
                    command="npm i fyicons"
                    label="npm"
                    appearance="button"
                  />
                </div>
                <SearchTrigger />
              </div>
            </div>
          </div>
          <IconSpecimen />
        </section>

        <section aria-labelledby="desktop-showcase-heading">
          <div className="my-6 flex items-center justify-center gap-4">
            <h2
              id="desktop-showcase-heading"
              className={featureHeadingClassName}
            >
              Take a l
              <Icon name="eye-pupil" size={20} className="inline" />
              <Icon name="eye-pupil" size={20} className="inline" />k
            </h2>
          </div>
          <DesktopShowcase />
        </section>

        <section
          id="installation"
          aria-labelledby="installation-heading"
          className="scroll-mt-24 border-t border-line pt-10"
        >
          <h2
            id="installation-heading"
            className={`mb-8 ${sectionHeadingClassName}`}
          >
            Quick start
          </h2>
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            <article className="flex min-w-0 flex-col gap-4">
              <h3 className={installationHeadingClassName}>
                <Icon name="atom-react" className="size-5 text-sky-400" />
                React
              </h3>
              <p className="text-muted">
                Install the React components and use them in your project.
                Tree-shakable and optimized.
              </p>
              <InstallCommand
                command="npm i fyicons"
                label="npm"
                className="mt-auto"
              />
            </article>
            <article className="flex min-w-0 flex-col gap-4">
              <h3 className={installationHeadingClassName}>
                <ShadcnIcon className="size-5 text-muted" />
                shadcn
              </h3>
              <p className="text-muted">
                Add editable icon components for more control. Just replace the
                icon name with the one you want.
              </p>
              <InstallCommand
                command="npx shadcn@latest add robertweisbecker/fyicons/{icon-name}"
                label="shadcn"
                className="mt-auto"
              />
            </article>
            <article className="flex min-w-0 flex-col gap-4">
              <h3 className={installationHeadingClassName}>
                <Icon name="file-zip" className="size-5 text-muted/50" />
                SVGs
              </h3>
              <p className="text-balance text-muted">
                Download all {icons.length.toLocaleString('en-US')} icons as a
                ZIP. Use them with any framework or drag them (gently) into your
                design files.
              </p>
              <DownloadIconsButton className="mt-auto self-start max-md:w-full" />
            </article>
          </div>
        </section>

        <section
          aria-labelledby="features-heading"
          className="space-y-16 sm:space-y-24"
        >
          <div className="space-y-8 sm:space-y-10">
            <h2
              id="features-heading"
              className={`text-center ${sectionHeadingClassName}`}
            >
              Features
            </h2>
            <div className="grid grid-cols-3 border-y border-y-line py-10">
              <div className="flex flex-col items-center gap-5">
                <Icon name="shapes" className="size-8" />
                <p className="text-lg tracking-tight">
                  {icons.length.toLocaleString('en-US')} icons
                </p>
              </div>
              <div className="flex flex-col items-center gap-5">
                <Icon name="blueprint-grid" className="size-8" />

                <p className="text-lg">16×16 grid</p>
              </div>
              <div className="flex flex-col items-center gap-5">
                <Icon name="border-width" className="size-8" />
                <p className="text-lg">1px stroke</p>
              </div>
            </div>
          </div>
          <section
            aria-labelledby="icon-variants-heading"
            className="space-y-6"
          >
            <h3 id="icon-variants-heading" className={featureHeadingClassName}>
              More than just outlines
            </h3>
            <IconVariants />
          </section>
          <section
            aria-labelledby="stateful-icons-heading"
            className="space-y-6"
          >
            <h3 id="stateful-icons-heading" className={featureHeadingClassName}>
              Multiple states
            </h3>
            <StatefulIcons />
          </section>
          <section aria-labelledby="construction-heading" className="space-y-6">
            <h3 id="construction-heading" className={featureHeadingClassName}>
              Constructed with care
            </h3>
            <Construction />
          </section>
          <section aria-labelledby="optical-adjustments-heading">
            <OpticalAdjustments
              heading={
                <h3
                  id="optical-adjustments-heading"
                  className={featureHeadingClassName}
                >
                  Optically balanced
                </h3>
              }
            />
          </section>
          <section aria-labelledby="icon-groups-heading">
            <IconGroupCarousel
              heading={
                <h3
                  id="icon-groups-heading"
                  className={featureHeadingClassName}
                >
                  Categories galore
                </h3>
              }
            />
          </section>
        </section>
      </div>
    </>
  );
}
