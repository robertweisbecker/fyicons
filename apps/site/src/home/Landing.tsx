'use client';

import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { InstallCommand } from '@/components/InstallCommand';
import { buttonVariants } from '@/components/ui/button';
import { icons } from '@/lib/catalog';
import { assetPath } from '@/lib/navigation';
import { DesktopShowcase } from './desktop/DesktopShowcase';
import { IconGroupCarousel } from './IconGroupCarousel';
import { IconSpecimen } from './IconSpecimen';
import { IconVariants } from './IconVariants';
import { Installation } from './Installation';
import { OpticalAdjustments } from './OpticalAdjustments';
import { StatefulIcons } from './StatefulIcons';
import './Landing.css';

export default function Landing() {
  return (
    <>
      <div className="mx-auto space-y-24 pb-16 sm:space-y-32 sm:pb-24">
        <section
          aria-label="Introduction"
          className="mx-auto grid max-w-292 grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-center gap-18 px-8 pt-18 pb-16 max-[900px]:gap-8 max-[900px]:px-6 max-[900px]:py-14 max-[680px]:max-w-135 max-[680px]:grid-cols-1 max-[680px]:gap-6 max-[680px]:px-2 max-[680px]:pt-8 max-[680px]:pb-12"
        >
          <div className="hero-copy pt-13 pb-7 max-[680px]:pt-8 max-[680px]:pb-0">
            <h1 className="hero-headline text-[clamp(23px,3.3vw,42px)] leading-[1.125] font-medium tracking-[-0.035em] max-[680px]:text-[clamp(23px,7vw,36px)]">
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

            <div className="my-10 flex flex-col gap-10 leading-relaxed max-[900px]:mt-7">
              <div className="flex flex-col gap-5">
                <p className="text-balance text-muted tabular-nums">
                  Nice little icons for your nice little apps. Drawn
                  pixel-perfect to scale to any size.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 max-[680px]:flex-col max-[680px]:items-stretch">
                <Link
                  className={buttonVariants({ variant: 'default', size: 'lg' })}
                  href="/icons/"
                >
                  View icons
                  <Icon name="arrow-right" size={20} />
                </Link>
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

        <Installation />

        <section
          aria-labelledby="features-heading"
          className="space-y-16 sm:space-y-24"
        >
          <div className="space-y-8 sm:space-y-10">
            <h2
              id="features-heading"
              className="text-center text-3xl font-medium tracking-tight sm:text-4xl"
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
          <IconVariants />
          <StatefulIcons />
          <OpticalAdjustments />
          <IconGroupCarousel />
        </section>
      </div>
    </>
  );
}
