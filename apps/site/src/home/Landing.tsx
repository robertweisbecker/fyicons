import packageInfo from 'fyicons/package.json';
import { type MouseEvent } from 'react';
import { Tooltip } from '@base-ui/react/tooltip';
import { Icon } from '@/components/Icon';
import { InstallCommand } from '@/components/InstallCommand';
import { icons } from '@/lib/catalog';
import { pageHref, type Page } from '@/lib/navigation';
import { DesktopShowcase } from './desktop/DesktopShowcase';
import { IconGroupCarousel } from './IconGroupCarousel';
import { IconSpecimen } from './IconSpecimen';
import './Landing.css';
import { Badge } from '@/components/ui/badge';

export default function Landing({
  navigate,
}: {
  navigate: (page: Page, event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <Tooltip.Provider delay={350}>
      <div className="mx-auto space-y-16 pb-16 sm:pb-24">
        <section
          aria-label="Introduction"
          className="mx-auto grid max-w-292 grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-center gap-18 px-8 pt-18 pb-16 max-[900px]:gap-8 max-[900px]:px-6 max-[900px]:py-14 max-[680px]:max-w-135 max-[680px]:grid-cols-1 max-[680px]:gap-6 max-[680px]:px-2 max-[680px]:pt-8 max-[680px]:pb-12"
        >
          <div className="hero-copy">
            <span className="mb-16 flex items-baseline gap-2">
              <span className="font-medium tracking-tight">fyicons</span>
              <Badge
                variant="outline"
                size="sm"
                className="font-mono text-focus"
              >
                v{packageInfo.version}
              </Badge>
            </span>
            <h1 className="hero-headline">
              <span className="hero-headline-line text-muted">
                Some icons I made{' '}
                <span className="hero-pen-word">
                  for me,
                  <Icon name="pen-tool-alt" className="hero-pen" />
                </span>
              </span>
              <span className="hero-headline-line">
                now <span className="text-ink">for you.</span>
                <Icon name="gift" className="hero-gift" />
              </span>
            </h1>

            <div className="mt-10 flex flex-col gap-2 leading-relaxed max-[900px]:mt-7 max-[680px]:mt-5">
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

              <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
                <a
                  className="inline-flex items-center gap-1.5 underline decoration-1 underline-offset-4 hover:text-ink"
                  href={pageHref('library')}
                  onClick={(event) => navigate('library', event)}
                >
                  View library
                  <Icon name="arrow-right" />
                </a>
                <InstallCommand command="npm i fyicons" label="npm" />
              </div>
            </div>
          </div>
          <IconSpecimen />
        </section>

        <section>
          <div className="my-6 flex items-center justify-center gap-4">
            <h2
              id="icon-groups-heading"
              className="text-2xl font-medium tracking-tight"
            >
              Take a l
              <Icon name="eye-pupil" size={20} className="inline" />
              <Icon name="eye-pupil" size={20} className="inline" />k
            </h2>
          </div>
          <DesktopShowcase />
        </section>

        <h2 className="text-center text-2xl font-medium tracking-tight">
          Features
        </h2>
        <div className="grid grid-cols-4 border-y border-y-line py-10">
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
          <div className="flex flex-col items-center gap-5">
            <Icon name="tags" className="size-8" />
            <p className="text-lg">Categories galore</p>
          </div>
        </div>
        <IconGroupCarousel />
      </div>
    </Tooltip.Provider>
  );
}
