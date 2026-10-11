import { type MouseEvent } from 'react';
import { Tooltip } from '@base-ui/react/tooltip';
import { Icon } from '@/components/Icon';
import { icons } from '@/lib/catalog';
import { pageHref, type Page } from '@/lib/navigation';
import { CodeStudy } from './CodeStudy';
import { FormatStudy } from './FormatStudy';
import { MusicStudy } from './MusicStudy';
import { ProfileStudy } from './SocialStudy';
import { AgentsStudy } from './AgentsStudy';
import {
  EditorStudy,
  RichTextStudy,
  RailStudy,
  DevicesStudy,
  StatusBarStudy,
} from './InterfaceStudies';
import { PaletteStudy, ProgressStudy, StatusStudy } from './PaletteStudies';
import { Study } from './Study';
import { BrandMark } from '@/components/BrandMark';

export default function Landing({
  navigate,
}: {
  navigate: (page: Page, event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <Tooltip.Provider delay={350}>
      <div className="mx-auto pb-20 sm:pb-28">
        <div className="flex flex-wrap items-baseline-last justify-between gap-x-8 gap-y-4 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="flex flex-col gap-2">
            <BrandMark className="size-12" />
            <h1 className="text-xl font-medium tracking-tight">fyicons</h1>
            <p>Some icons I made for me, but you can have them too.</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted">
            16 × 16px grid ∙ 1px stroke
            <a
              className="inline-flex min-h-11 items-center gap-1.5 hover:text-ink"
              href={pageHref('library')}
              onClick={(event) => navigate('library', event)}
            >
              900+ icons <Icon name="arrow-right" />
            </a>
          </div>
        </div>
        <div className="grid items-start justify-items-center gap-y-24 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-28">
          <div className="flex w-full min-w-0 flex-col items-center gap-20">
            <Study name="IDE" id="732:4274">
              <CodeStudy />
            </Study>
            <Study name="Music Player" id="732:3907">
              <MusicStudy />
            </Study>
          </div>
          <div className="flex w-full min-w-0 flex-col items-center gap-20">
            <Study name="Status Bar" id="732:920">
              <StatusBarStudy />
            </Study>
          </div>
          <div className="flex w-full min-w-0 flex-col items-center gap-20">
            <Study name="Editor" id="732:4848">
              <EditorStudy />
            </Study>
            <div className="flex w-full flex-wrap items-center justify-center gap-8">
              <Study
                name="Format"
                id="732:1404"
                className="w-auto max-w-full min-w-0 flex-1"
              >
                <FormatStudy />
              </Study>
              <Study name="Rail" id="732:5383" className="w-auto">
                <RailStudy />
              </Study>
            </div>
          </div>
          <Study name="Profile" id="736:6768">
            <ProfileStudy />
          </Study>
          <Study name="Agents" id="748:3983">
            <AgentsStudy />
          </Study>
          <Study name="Rich Text" id="752:5621">
            <RichTextStudy />
          </Study>
          <div className="flex max-w-full flex-wrap items-start justify-center gap-8">
            <Study name="Fun" id="741:8920" className="w-auto">
              <PaletteStudy name="Fun" />
            </Study>
            <Study name="Commerce" id="741:9340" className="w-auto">
              <PaletteStudy name="Commerce" />
            </Study>
            <Study name="Tools" id="741:10123" className="w-auto">
              <PaletteStudy name="Tools" />
            </Study>
            <Study name="Symbols" id="741:10504" className="w-auto">
              <PaletteStudy name="Symbols" />
            </Study>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-10">
            <Study name="Devices" id="752:4086" className="w-auto">
              <DevicesStudy />
            </Study>
            <div className="flex flex-col items-center gap-10">
              <Study name="Progress" id="741:11787" className="w-auto">
                <ProgressStudy />
              </Study>
              <Study name="Status" id="752:5625" className="w-auto">
                <StatusStudy />
              </Study>
            </div>
          </div>
        </div>
      </div>
    </Tooltip.Provider>
  );
}
