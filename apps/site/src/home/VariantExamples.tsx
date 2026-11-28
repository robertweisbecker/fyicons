import { IconVariants } from '@/home/IconVariants';
import { ProgressIcons } from '@/home/ProgressIcons';
import { StatefulIcons } from '@/home/StatefulIcons';
import { IconExampleCard, VariantExampleGrid } from '@/home/IconExampleCard';
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
