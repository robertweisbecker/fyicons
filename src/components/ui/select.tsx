import { Select } from '@base-ui/react/select';
import { Icon } from '../Icon';
import { cn } from '../../lib/utils';

export function Choice({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <Select.Root
      items={options}
      value={value}
      onValueChange={(next) => {
        if (next !== null) onChange(next);
      }}
    >
      <Select.Trigger
        className={cn(
          'choice flex min-h-10 items-center justify-between gap-4 rounded-lg border border-line bg-surface px-3 text-xs group-[.has-inspector]/app:flex-1 hover:bg-hover max-[760px]:flex-1',
        )}
        aria-label={label}
      >
        <Select.Value />
        <Select.Icon>
          <Icon name="chevron-down-sm" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner
          className={cn('z-70')}
          sideOffset={6}
          alignItemWithTrigger={false}
        >
          <Select.Popup
            className={cn(
              'select-popup max-h-[min(360px,var(--available-height))] min-w-(--anchor-width) overflow-y-auto rounded-lg border border-line bg-surface p-1 text-ink shadow-lg',
            )}
          >
            <Select.List>
              {options.map((option) => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className={cn(
                    'select-item relative flex min-h-9 cursor-default items-center rounded-md py-2 pr-4 pl-8 text-xs outline-none data-highlighted:bg-hover',
                  )}
                >
                  <Select.ItemIndicator className={cn('absolute left-2')}>
                    <Icon name="check-sm" />
                  </Select.ItemIndicator>
                  <Select.ItemText>{option.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}
