'use client';
import { createIconLookup } from '@/components/createIconLookup';
import { DeferredContent } from '@/components/DeferredContent';
import {
  VariantPlaceholder,
  ConstructionPlaceholder,
  OpticalPlaceholder,
  GroupPlaceholder,
} from './DemoPlaceholders';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ShadcnIcon } from '@/components/BrandIcons';
import { DownloadIconsButton } from '@/components/DownloadIconsButton';
import { InstallCommand } from '@/components/InstallCommand';
import { SearchTrigger } from '@/components/SearchTrigger';
import { ScrollArea } from '@/components/ui/scroll-area';
import { buttonVariants } from '@/components/ui/button';
import catalogSummary from '@/data/catalog-summary.json';
import { assetPath } from '@/lib/navigation';
import { useReducedMotionPreference } from '@/lib/preferences';
import { DesktopShowcase } from './desktop/DesktopShowcase';
import { IconExampleCard } from './IconExampleCard';
import { IconSpecimen } from './IconSpecimen';
import './Landing.css';
import {
  IconEyeClosed,
  IconEyePupil,
  IconPenToolAlt,
  IconArrowRight,
  IconAtomReact,
  IconAsterisk,
  IconVectorSvg,
  IconShapes,
  IconGridRuler,
  IconBorderWidth,
} from 'fyicons';

const Icon = createIconLookup({
  'eye-closed': IconEyeClosed,
  'eye-pupil': IconEyePupil,
  'pen-tool-alt': IconPenToolAlt,
  'arrow-right': IconArrowRight,
  'atom-react': IconAtomReact,
  asterisk: IconAsterisk,
  'vector-svg': IconVectorSvg,
  shapes: IconShapes,
  'grid-ruler': IconGridRuler,
  'border-width': IconBorderWidth,
});

const loadVariants = () =>
  import('./VariantExamples').then((module) => module.VariantExamples);
const loadConstruction = () =>
  import('./Construction').then((module) => module.Construction);
const loadOptical = () =>
  import('./OpticalAdjustments').then((module) => module.OpticalAdjustments);
const loadGroups = () =>
  import('./IconGroupCarousel').then((module) => module.IconGroupCarousel);

// Landing heading styles live here alongside the page's section composition.
const sectionHeadingClassName =
  'text-3xl font-medium tracking-tight sm:text-4xl';
const featureHeadingClassName = 'text-2xl font-medium tracking-tight';
const installationHeadingClassName =
  'flex items-center gap-2 text-lg font-medium tracking-tight';

function BlinkingEyes() {
  const reducedMotion = useReducedMotionPreference();
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    let timer: number;
    function scheduleBlink() {
      timer = window.setTimeout(
        () => {
          setClosed(true);
          timer = window.setTimeout(() => {
            setClosed(false);
            scheduleBlink();
          }, 220);
        },
        2500 + Math.random() * 4000,
      );
    }
    function reset() {
      window.clearTimeout(timer);
      setClosed(false);
      if (!document.hidden) scheduleBlink();
    }

    reset();
    document.addEventListener('visibilitychange', reset);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('visibilitychange', reset);
    };
  }, [reducedMotion]);

  const name = closed && !reducedMotion ? 'eye-closed' : 'eye-pupil';
  return (
    <>
      <Icon name={name} size={20} className="inline" />
      <Icon name={name} size={20} className="inline" />
    </>
  );
}

export default function Landing() {
  return (
    <>
      <div className="mx-auto max-w-7xl space-y-48 px-4 pb-16 sm:space-y-64 sm:px-6 sm:pb-24 [&>section:first-child]:mb-12 sm:[&>section:first-child]:mb-16">
        <section
          aria-label="Introduction"
          className="mx-auto grid max-w-135 grid-cols-1 items-center gap-6 px-2 pt-8 pb-12 md:max-w-292 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-8 md:px-6 md:py-14 lg:gap-18 lg:px-8 lg:pt-18 lg:pb-16"
        >
          <div className="hero-copy pt-8 pb-0 md:pt-13 md:pb-7">
            <h1 className="hero-headline text-[clamp(23px,7vw,36px)] leading-[1.125] tracking-[-0.035em] md:text-[clamp(28px,3.3vw,42px)]">
              <span className="hero-headline-line font-normal">
                Some icons I made{' '}
                <span className="hero-pen-word">
                  for me,
                  <Icon name="pen-tool-alt" className="hero-pen opacity-30" />
                </span>
              </span>
              <span className="hero-headline-line">
                now <span className="font-bold text-ink">for you.</span>
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
                <p className="text-xl tracking-[-.01em] text-balance text-muted">
                  Nice little icons for your nice little apps. Drawn
                  pixel-perfect to scale to any size.
                </p>
              </div>

              <div className="space-y-4">
                <SearchTrigger iconCount={catalogSummary.count} />
                <div className="flex flex-col flex-wrap items-stretch gap-4 md:flex-row md:items-center">
                  <Link
                    prefetch={false}
                    className={buttonVariants({
                      variant: 'default',
                      size: 'lg',
                    })}
                    href="/icons/"
                  >
                    Browse all
                    <Icon name="arrow-right" />
                  </Link>
                  <InstallCommand
                    command="npm i fyicons"
                    label="npm"
                    appearance="button"
                    variant="fancy-rainbow"
                  />
                </div>
              </div>
            </div>
          </div>
          <IconSpecimen />
        </section>

        <section aria-labelledby="desktop-showcase-heading">
          <div className="my-6 flex items-center justify-center gap-4">
            <h2
              id="desktop-showcase-heading"
              aria-label="Take a look"
              className={featureHeadingClassName}
            >
              Take a l
              <BlinkingEyes />k
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
                Package
              </h3>
              <p className="text-muted">
                Install the React components and use them in your project.
                Tree-shakable and optimized.
              </p>
              <p className="flex gap-1 text-[11px] text-muted/72">
                <Icon name="asterisk" className="size-3 text-red-500" />
                Other package managers supported.
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
                <Icon name="vector-svg" className="size-5 text-orange-400" />
                SVGs
              </h3>
              <p className="text-balance text-muted">
                Get all {catalogSummary.count.toLocaleString('en-US')} icons as
                a ZIP. Use with any framework, or drag them (gently) into your
                designs.
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
                  {catalogSummary.count.toLocaleString('en-US')} icons
                </p>
              </div>
              <div className="flex flex-col items-center gap-5">
                <Icon name="grid-ruler" className="size-8" />

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
            <ScrollArea.Root>
              <ScrollArea.Viewport
                className="relative"
                role="region"
                aria-labelledby="icon-variants-heading"
              >
                <ScrollArea.Content className="w-max pb-3 sm:w-full sm:min-w-0! sm:pb-0">
                  <DeferredContent
                    loader={loadVariants}
                    componentProps={{}}
                    fallback={<VariantPlaceholder />}
                  />
                </ScrollArea.Content>
              </ScrollArea.Viewport>
              <ScrollArea.Scrollbar orientation="horizontal" />
            </ScrollArea.Root>
          </section>
          <section aria-labelledby="construction-heading" className="space-y-6">
            <h3 id="construction-heading" className={featureHeadingClassName}>
              Constructed with care
            </h3>
            <p className="text-lg font-medium text-balance text-muted">
              Designed on a consistent, pixel-aligned grid.
            </p>
            <DeferredContent
              loader={loadConstruction}
              componentProps={{}}
              fallback={<ConstructionPlaceholder />}
            />
          </section>
          <section aria-labelledby="optical-adjustments-heading">
            <DeferredContent
              loader={loadOptical}
              componentProps={{
                heading: (
                  <p
                    id="optical-adjustments-heading"
                    className="text-lg font-medium text-balance text-muted"
                  >
                    With a range of optical adjustments.
                  </p>
                ),
              }}
              fallback={<OpticalPlaceholder />}
            />
          </section>
          <section aria-labelledby="icon-groups-heading">
            <div className="mb-6">
              <h3 id="icon-groups-heading" className={featureHeadingClassName}>
                Categories galore
              </h3>
            </div>
            <DeferredContent
              loader={loadGroups}
              componentProps={{}}
              fallback={<GroupPlaceholder />}
            />
            <div className="mt-8 flex justify-center">
              <Link
                href="/icons/"
                prefetch={false}
                className={buttonVariants({ variant: 'default', size: 'lg' })}
              >
                View all icons
                <Icon name="arrow-right" size={20} />
              </Link>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
