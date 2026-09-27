import { Checkbox } from '@base-ui/react/checkbox';
import { Icon } from './Icon';
import { cn } from '../lib/utils';

export function SelectionCheckbox({
  checked,
  label,
  onChange,
  className,
}: {
  checked: boolean;
  label: string;
  onChange: () => void;
  className?: string;
}) {
  return (
    <Checkbox.Root
      checked={checked}
      onCheckedChange={onChange}
      aria-label={label}
      className={cn(
        'group/check flex size-8 cursor-pointer items-center justify-center rounded-md pointer-coarse:size-11',
        className,
      )}
    >
      <span
        className={cn(
          'flex size-4 items-center justify-center rounded border border-muted bg-surface group-data-checked/check:border-ink group-data-checked/check:bg-ink group-data-checked/check:text-canvas',
        )}
      >
        <Checkbox.Indicator>
          <Icon name="check-sm" />
        </Checkbox.Indicator>
      </span>
    </Checkbox.Root>
  );
}
