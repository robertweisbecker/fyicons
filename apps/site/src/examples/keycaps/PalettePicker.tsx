import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { play } from '@/lib/sounds';
import { palettes, type PaletteName } from '@/examples/keycaps/palettes';

const items = (Object.keys(palettes) as PaletteName[]).map((name) => ({
  label: name,
  value: name,
}));

function Swatch({ name }: { name: PaletteName }) {
  const { background, case: shell, command, secondary } = palettes[name];
  return (
    <span
      aria-hidden="true"
      className="keycap-swatch"
      style={{
        background: `linear-gradient(90deg, ${background} 25%, ${shell} 25% 50%, ${command} 50% 75%, ${secondary} 75%)`,
      }}
    />
  );
}

export function PalettePicker({
  value,
  onChange,
}: {
  value: PaletteName;
  onChange: (name: PaletteName) => void;
}) {
  return (
    <Select<PaletteName>
      size="sm"
      value={value}
      items={items}
      onValueChange={(name) => {
        if (name) {
          onChange(name);
          play('select', { emphasis: 'subtle' });
        }
      }}
    >
      <SelectTrigger
        className="ml-auto px-2 text-ink"
        aria-label={`Color scheme, ${value}`}
      >
        <Swatch name={value} />
        {value}
      </SelectTrigger>
      <SelectContent
        aria-label="Color schemes"
        align="end"
        alignItemWithTrigger={false}
      >
        {items.map(({ value: name }) => (
          <SelectItem key={name} value={name} leading={<Swatch name={name} />}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
