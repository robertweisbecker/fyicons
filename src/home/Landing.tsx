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
        <div className="mx-auto flex max-w-250 flex-wrap items-baseline-last justify-between gap-x-8 gap-y-6 pt-16 pb-16 sm:pt-24 sm:pb-20">
          <div className="flex flex-col gap-2">
            {/* <BrandMark className="size-12" /> */}
            <h1 className="text-4xl font-semibold tracking-tight">
              fyi<span className="opacity-50">cons</span>
            </h1>
            <p className="flex items-center gap-1 text-2xl font-medium">
              Some icons I made{' '}
              <span className="flex items-center justify-center rounded bg-dialog p-1 text-blue-500">
                <Icon name="pen-tip" className="size-7" />
              </span>{' '}
              for me, now for you{' '}
              <span className="-me-2 flex items-center justify-center rounded p-1 text-pink-500">
                <Icon name="gift" className="size-7" />
              </span>
              .
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-muted">
            <span>16 × 16px ∙ 1px stroke ∙ Pixel-perfect</span>
            <a
              className="inline-flex min-h-11 items-center gap-1.5 underline decoration-1 underline-offset-4 hover:text-ink"
              href={pageHref('library')}
              onClick={(event) => navigate('library', event)}
            >
              {(Math.floor(icons.length / 100) * 100).toLocaleString('en-US')}+
              {' icons '}
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
        <DesktopShowcase />
        <IconGroupCarousel />
      </div>
    </Tooltip.Provider>
  );
}
