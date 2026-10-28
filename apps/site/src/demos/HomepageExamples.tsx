import { FormatStudy } from '@/home/FormatStudy';
import {
  EditorStudy,
  RichTextStudy,
  DevicesStudy,
  StatusBarStudy,
} from '@/home/InterfaceStudies';
import { Study } from '@/home/Study';

/** Remaining specimens; the unified desktop apps replace their standalone studies. */
export function HomepageExamples() {
  return (
    <section aria-labelledby="interface-studies" className="mt-16">
      <h2 id="interface-studies" className="mb-8 text-lg font-medium">
        Interface studies
      </h2>
      <div className="grid min-w-0 grid-cols-1 items-start gap-x-8 gap-y-12 lg:grid-cols-2">
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
        <Study name="Devices" id="752:4086">
          <DevicesStudy />
        </Study>
      </div>
    </section>
  );
}
