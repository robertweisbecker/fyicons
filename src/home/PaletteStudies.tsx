import { cn } from '@/lib/utils';
import { Glyph, panel } from './Study';
import { palettes } from './paletteData';

export function PaletteStudy({
  name,
}: {
  name: 'Fun' | 'Commerce' | 'Tools' | 'Symbols';
}) {
  return (
    <div className={cn(panel, 'grid w-22 grid-cols-3 rounded-[10px] p-2')}>
      {palettes[name].map((icon) => (
        <Glyph key={icon} name={icon} />
      ))}
    </div>
  );
}

export function ProgressStudy() {
  const rows = [
    palettes.Progress.slice(0, 6),
    palettes.Progress.slice(6, 10),
    palettes.Progress.slice(10, 16),
    palettes.Progress.slice(16),
  ];
  return (
    <div className={cn(panel, 'w-40 rounded-[10px] p-2')}>
      {rows.map((row, i) => (
        <div key={i} className="flex justify-center">
          {row.map((icon, index) => (
            <Glyph key={index} name={icon} />
          ))}
        </div>
      ))}
    </div>
  );
}

export function StatusStudy() {
  return (
    <div className={cn(panel, 'flex gap-4 rounded-[10px] p-2')}>
      {[palettes.Status.slice(0, 9), palettes.Status.slice(9)].map(
        (group, i) => (
          <div key={i} className="grid grid-cols-3">
            {group.map((icon) => (
              <Glyph key={icon} name={icon} />
            ))}
          </div>
        ),
      )}
    </div>
  );
}
