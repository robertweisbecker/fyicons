import { IconVariants } from './IconVariants';
import { ProgressIcons } from './ProgressIcons';
import { StatefulIcons } from './StatefulIcons';
import { IconExampleCard, VariantExampleGrid } from './IconExampleCard';
export function VariantExamples() {
  return (
    <VariantExampleGrid>
      <IconVariants />
      <IconExampleCard label="Progress" className="sm:col-span-3">
        <ProgressIcons />
      </IconExampleCard>
      <IconExampleCard label="Toggles" className="sm:col-span-3">
        <StatefulIcons />
      </IconExampleCard>
    </VariantExampleGrid>
  );
}
