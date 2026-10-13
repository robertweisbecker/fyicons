import { CodeStudy } from '@/home/CodeStudy';
import { FormatStudy } from '@/home/FormatStudy';
import { MusicStudy } from '@/home/MusicStudy';
import { ProfileStudy } from '@/home/SocialStudy';
import { AgentsStudy } from '@/home/AgentsStudy';
import {
  EditorStudy,
  RichTextStudy,
  RailStudy,
  DevicesStudy,
  StatusBarStudy,
} from '@/home/InterfaceStudies';
import { Study } from '@/home/Study';

/** Preserve the homepage UI specimens; the carousel replaces the old icon palettes. */
export function HomepageExamples() {
  return (
    <section aria-labelledby="interface-studies" className="mt-16">
      <h2 id="interface-studies" className="mb-8 text-lg font-medium">
        Interface studies
      </h2>
      <div className="grid min-w-0 grid-cols-1 items-start gap-x-8 gap-y-12 lg:grid-cols-2">
        <Study name="Code" id="732:4274">
          <CodeStudy />
        </Study>
        <Study name="Social" id="736:6768">
          <ProfileStudy />
        </Study>
        <Study name="Agents" id="748:3983">
          <AgentsStudy />
        </Study>
        <Study name="Media" id="732:3907">
          <MusicStudy />
        </Study>
        <Study name="Design" id="732:4848">
          <EditorStudy />
        </Study>
        <Study name="Text" id="752:5621">
          <RichTextStudy />
        </Study>
        <Study name="Format" id="732:1404">
          <FormatStudy />
        </Study>
        <Study name="System" id="732:920">
          <StatusBarStudy />
        </Study>
        <Study name="Rail" id="732:5383">
          <RailStudy />
        </Study>
        <Study name="Devices" id="752:4086">
          <DevicesStudy />
        </Study>
      </div>
    </section>
  );
}
