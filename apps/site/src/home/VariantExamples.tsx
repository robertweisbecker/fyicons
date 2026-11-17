import { IconVariants } from './IconVariants';
import { ProgressIcons } from './ProgressIcons';
import { StatefulIcons } from './StatefulIcons';
import { IconExampleCard } from './IconExampleCard';
export function VariantExamples() {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-6 sm:gap-x-4">
      <IconVariants />
      <IconExampleCard label="Progress" className="sm:col-span-3">
        <ProgressIcons />
      </IconExampleCard>
      <IconExampleCard label="Toggles" className="col-span-2 sm:col-span-3">
        <StatefulIcons />
      </IconExampleCard>
    </div>
  );
}
