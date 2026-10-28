import { type MouseEvent } from 'react';
import { Icon } from '@/components/Icon';
import { InstallCommand } from '@/components/InstallCommand';
import { buttonVariants } from '@/components/ui/button';
import { icons } from '@/lib/catalog';
import { pageHref, type Page } from '@/lib/navigation';
import { DesktopShowcase } from './desktop/DesktopShowcase';
import { IconGroupCarousel } from './IconGroupCarousel';
import { IconSpecimen } from './IconSpecimen';
import { IconVariants } from './IconVariants';
import { Installation } from './Installation';
import { OpticalAdjustments } from './OpticalAdjustments';
import { StatefulIcons } from './StatefulIcons';
import './Landing.css';

export default function Landing({
  navigate,
  packing,
  download,
}: {
  navigate: (page: Page, event: MouseEvent<HTMLAnchorElement>) => void;
  packing: boolean;
  download: () => void;
}) {
  return (
    <>
      <div className="mx-auto space-y-16 pb-16 sm:pb-24">
        <section
          aria-label="Introduction"
          className="mx-auto grid max-w-292 grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-center gap-18 px-8 pt-18 pb-16 max-[900px]:gap-8 max-[900px]:px-6 max-[900px]:py-14 max-[680px]:max-w-135 max-[680px]:grid-cols-1 max-[680px]:gap-6 max-[680px]:px-2 max-[680px]:pt-8 max-[680px]:pb-12"
        >
          <div className="hero-copy">
            <h1 className="hero-headline">
              <span className="hero-headline-line font-normal text-muted">
                Some icons I made{' '}
                <span className="hero-pen-word">
                  for me,
                  <Icon name="pen-tool-alt" className="hero-pen opacity-30" />
                </span>
              </span>
              <span className="hero-headline-line font-medium">
                now <span className="text-ink">for you.</span>
                <Icon name="gift" className="hero-gift text-pink-400" />
              </span>
            </h1>

            <div className="my-10 flex flex-col gap-10 leading-relaxed max-[900px]:mt-7">
              <div className="flex flex-col gap-5">
                <p className="text-balance tabular-nums">
                  Nice little icons for your nice little apps. Drawn
                  pixel-perfect to scale to any size.
                </p>

                {/* <p className="text-muted">
                  {' '}
                  {icons.length.toLocaleString('en-US')} icons ∙ 16×16 ∙ 1px
                  stroke
                </p> */}
              </div>

              <div className="flex items-center gap-4 max-[680px]:flex-col max-[680px]:items-stretch">
                <a
                  className={buttonVariants({ variant: 'default', size: 'lg' })}
                  href={pageHref('library')}
                  onClick={(event) => navigate('library', event)}
                >
                  View icons
                  <Icon name="arrow-right" size={20} />
                </a>
                <InstallCommand
                  command="npm i fyicons"
                  label="npm"
                  appearance="button"
                />
              </div>
            </div>
          </div>
          <IconSpecimen />
        </section>

        <section aria-labelledby="desktop-showcase-heading">
          <div className="my-6 flex items-center justify-center gap-4">
            <h2
              id="desktop-showcase-heading"
              className="text-2xl font-medium tracking-tight"
            >
              Take a l
              <Icon name="eye-pupil" size={20} className="inline" />
              <Icon name="eye-pupil" size={20} className="inline" />k
            </h2>
          </div>
          <DesktopShowcase />
        </section>

        <Installation packing={packing} download={download} />

        <section aria-labelledby="features-heading" className="space-y-6">
          <h2
            id="features-heading"
            className="text-center text-2xl font-medium tracking-tight"
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
        </section>
        <StatefulIcons />
        <IconVariants />
        <OpticalAdjustments />
        <IconGroupCarousel
          onLibraryClick={(event) => navigate('library', event)}
        />
      </div>
    </>
  );
}
