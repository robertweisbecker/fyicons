import { Switch } from '@base-ui/react/switch';
import { cn } from '../../lib/utils';

export function SwitchControl({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <Switch.Root
      aria-label={label}
      checked={checked}
      onCheckedChange={onChange}
      className={cn(
        'switch group/switch relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full bg-zinc-400 p-0.5 data-checked:bg-[var(--pref-accent,var(--color-blue-500))]',
      )}
    >
      <Switch.Thumb
        className={cn(
          'switch-thumb block size-4 rounded-full bg-white shadow-sm group-data-checked/switch:translate-x-4',
        )}
      />
    </Switch.Root>
  );
}
