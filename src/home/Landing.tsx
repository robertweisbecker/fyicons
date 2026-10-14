import { type MouseEvent } from 'react';
import { Tooltip } from '@base-ui/react/tooltip';
import { BrandMark } from '@/components/BrandMark';
import { Icon } from '@/components/Icon';
import { icons } from '@/lib/catalog';
import { githubHref, pageHref, type Page } from '@/lib/navigation';
import { DesktopShowcase } from './desktop/DesktopShowcase';
import { IconGroupCarousel } from './IconGroupCarousel';

export default function Landing({
  navigate,
}: {
  navigate: (page: Page, event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <Tooltip.Provider delay={350}>
      <div className="mx-auto pb-16 sm:pb-24">
        <div className="mx-auto flex max-w-2xl flex-col gap-16 px-8 py-16">
          {/* <Icon name="atom-spiral" className="size-12 rotate-12" /> */}

          <h1 className="text-sm">
            fyi<span className="">cons</span>
          </h1>
          <p className="relative text-2xl font-medium text-pretty text-muted">
            Some{' '}
            <span className="relative text-ink">
              <Icon
                name="squares"
                className="absolute -top-3/4 left-1/2 inline size-6 -translate-x-1/2"
              />
              icons
            </span>{' '}
            I{' '}
            <span className="relative text-blue-500">
              <Icon
                name="pen-tool"
                className="absolute -top-3/4 -right-3 inline size-6 text-blue-500"
              />
              made{' '}
            </span>{' '}
            for me, now for{' '}
            <span className="relative text-pink-500 dark:text-pink-400">
              you
              <Icon
                name="gift"
                className="absolute -top-3/4 -right-2 inline size-6 rotate-12"
              />
            </span>
            .
          </p>

          <div className="flex flex-col gap-2">
            <span className="text-muted">
              16×16px ∙ 1px stroke ∙ Pixel-perfect
            </span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
              <a
                className="inline-flex min-h-11 items-center gap-1.5 underline decoration-1 underline-offset-4 hover:text-ink"
                href={pageHref('library')}
                onClick={(event) => navigate('library', event)}
              >
                {(Math.floor(icons.length / 100) * 100).toLocaleString('en-US')}
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

        <DesktopShowcase />
        <IconGroupCarousel />
      </div>
    </Tooltip.Provider>
  );
}
