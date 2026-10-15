import { type MouseEvent } from 'react';
import { Tooltip } from '@base-ui/react/tooltip';
import { Icon } from '@/components/Icon';
import { icons } from '@/lib/catalog';
import { githubHref, pageHref, type Page } from '@/lib/navigation';
import { DesktopShowcase } from './desktop/DesktopShowcase';
import { IconGroupCarousel } from './IconGroupCarousel';
import { IconSpecimen } from './IconSpecimen';
import './Landing.css';

export default function Landing({
  navigate,
}: {
  navigate: (page: Page, event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <Tooltip.Provider delay={350}>
      <div className="mx-auto pb-16 sm:pb-24">
        <section
          aria-label="Introduction"
          className="mx-auto grid max-w-292 grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-center gap-18 px-8 pt-18 pb-16 max-[900px]:gap-8 max-[900px]:px-6 max-[900px]:py-14 max-[680px]:max-w-135 max-[680px]:grid-cols-1 max-[680px]:gap-6 max-[680px]:px-2 max-[680px]:pt-8 max-[680px]:pb-12"
        >
          <div className="hero-copy">
            <h1 className="hero-headline">
              <span className="hero-headline-line">
                Some icons I made{' '}
                <span className="hero-pen-word">
                  for me,
                  <Icon name="pen-tool-alt" className="hero-pen text-ink" />
                </span>
              </span>
              <span className="hero-headline-line">
                now <span className="text-ink">for you.</span>
                <Icon name="gift" className="hero-gift text-ink" />
              </span>
            </h1>

            <div className="mt-10 flex flex-col gap-2 text-sm max-[900px]:mt-7 max-[900px]:text-xs max-[680px]:mt-5 max-[680px]:text-[13px]">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-semibold tracking-tight">fyicons</span>
                <span className="text-muted">
                  16×16px ∙ 1px stroke ∙ Pixel-perfect
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
                <a
                  className="inline-flex min-h-11 items-center gap-1.5 underline decoration-1 underline-offset-4 hover:text-ink"
                  href={pageHref('library')}
                  onClick={(event) => navigate('library', event)}
                >
                  {(Math.floor(icons.length / 100) * 100).toLocaleString(
                    'en-US',
                  )}
                  +{' icons '}
                  <Icon name="arrow-right" />
                </a>
                <a
                  className="inline-flex min-h-11 items-center gap-1.5 underline decoration-1 underline-offset-4 hover:text-ink"
                  href={githubHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <Icon name="arrow-up-right" />
                </a>
              </div>
            </div>
          </div>
          <IconSpecimen />
        </section>

        <DesktopShowcase />
        <IconGroupCarousel />
      </div>
    </Tooltip.Provider>
  );
}
