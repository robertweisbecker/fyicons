import { cn } from '../lib/utils';
import { useState, type CSSProperties } from 'react';
import { Icon } from '../components/Icon';
import { Button, IconButton, SwitchControl } from '../components/ui';

export function Forma() {
  const [tool, setTool] = useState('Select');
  const [align, setAlign] = useState('center');
  const [radius, setRadius] = useState(12);
  const [color, setColor] = useState('#c5b5fa');
  const [grid, setGrid] = useState(true);
  const [border, setBorder] = useState(false);
  const [shadow, setShadow] = useState(true);
  return (
    <div
      className={cn(
        'demo-card flex h-115 flex-col overflow-hidden rounded-xl border border-[#dfe1dd] bg-[#f8f7fa] text-[#716180] scheme-light shadow-[0_12px_30px_-26px_#243c263b] max-[680px]:h-117.5',
      )}
    >
      <div
        className={cn(
          'flex h-14 shrink-0 items-center justify-between border-b border-[#e2dfea] bg-white px-5',
        )}
      >
        <strong className={cn('flex items-center gap-2')}>
          <Icon name="component" />
          forma
        </strong>
        <span className={cn('flex items-center gap-1 text-[10px]')}>
          <Icon name="check-sm" />
          Saved
        </span>
      </div>
      <div className={cn('flex min-h-0 flex-1')}>
        <div
          className={cn(
            'forma-canvas relative flex min-w-0 flex-1 items-center justify-center bg-[#eae6f1] bg-[radial-gradient(#ccc4d9_.7px,transparent_.7px)] bg-size-[12px_12px] [&.no-grid]:bg-none',
            grid ? '' : 'no-grid',
          )}
        >
          <div
            className={cn(
              'absolute top-4 left-1/2 flex -translate-x-1/2 rounded-lg border border-[#ddd6e8] bg-white p-1 shadow-sm',
            )}
          >
            {['Select', 'Frame', 'Pen', 'Text'].map((name, i) => (
              <Button
                key={name}
                className={cn(
                  'grid size-8 place-items-center rounded-md',
                  tool === name ? 'bg-[#eee7fa]' : '',
                )}
                aria-label={name + ' tool'}
                aria-pressed={tool === name}
                onClick={() => setTool(name)}
              >
                <Icon
                  name={['cursor-arrow-fill', 'frame', 'pen-tool', 'text'][i]}
                />
              </Button>
            ))}
          </div>
          <div
            className={cn(
              'forma-object flex h-54 w-45 max-w-[calc(100%-32px)] flex-col items-center justify-center p-5 text-[#594377] outline outline-offset-5 outline-[#a184c7] max-[680px]:h-48.5 max-[680px]:p-3',
            )}
            style={
              {
                borderRadius: radius,
                background: color,
                border: border ? '1px solid #8662bd' : '1px solid transparent',
                boxShadow: shadow ? '0 10px 22px #61547b26' : 'none',
                textAlign: align,
              } as CSSProperties
            }
          >
            <Icon name="asterisk-star" />
            <strong
              className={cn(
                'mt-5 mb-5 w-full font-serif text-[22px] leading-tight',
              )}
            >
              Project
              <br />
              overview
            </strong>
            <small className={cn('text-[8px] tracking-wider')}>
              DESIGN SAMPLE
            </small>
          </div>
          <span className={cn('absolute bottom-3 left-3 text-[10px]')}>
            {tool}
          </span>
          <span className={cn('absolute right-3 bottom-3 text-[10px]')}>
            100%
          </span>
        </div>
        <aside
          className={cn(
            'w-39 shrink-0 border-l border-[#e2dfea] bg-white sm:w-46',
          )}
        >
          <div
            className={cn('border-b border-[#e9e5ef] p-4 text-xs font-medium')}
          >
            Design
          </div>
          <div className={cn('border-b border-[#e9e5ef] p-3')}>
            <h5 className={cn('mb-3 text-[11px] font-medium')}>Layout</h5>
            <div className={cn('flex items-center justify-between')}>
              {['left', 'center', 'right'].map((value, i) => (
                <IconButton
                  key={value}
                  icon={
                    ['text-align-start', 'text-align-center', 'text-align-end'][
                      i
                    ]
                  }
                  label={'Align ' + value}
                  aria-pressed={align === value}
                  onClick={() => setAlign(value)}
                />
              ))}
              <IconButton
                icon="grid"
                label="Toggle canvas grid"
                aria-pressed={grid}
                onClick={() => setGrid(!grid)}
              />
            </div>
            <div className={cn('mt-3 flex gap-2 text-[10px]')}>
              <span className={cn('rounded border border-[#ece9f1] p-2')}>
                W 180
              </span>
              <span className={cn('rounded border border-[#ece9f1] p-2')}>
                H 216
              </span>
            </div>
          </div>
          <div className={cn('space-y-4 p-3 text-[11px]')}>
            <h5 className={cn('font-medium')}>Appearance</h5>
            <label className={cn('block')}>
              <span className={cn('mb-3 flex items-center gap-2')}>
                <Icon name="border-radius" />
                Corner radius<output className={cn('ml-auto')}>{radius}</output>
              </span>
              <input
                className={cn('h-1 w-full accent-[#aa91d0]')}
                type="range"
                aria-label="Corner radius"
                min={0}
                max={40}
                value={radius}
                onChange={(event) => setRadius(Number(event.target.value))}
              />
            </label>
            <label className={cn('flex items-center gap-2')}>
              <Icon name="paint-bucket" />
              Fill
              <input
                type="color"
                aria-label="Card fill color"
                className={cn('ml-auto h-5 w-7')}
                value={color}
                onChange={(event) => setColor(event.target.value)}
              />
            </label>
            <div className={cn('flex items-center justify-between')}>
              <span className={cn('flex items-center gap-2')}>
                <Icon name="border" />
                Border
              </span>
              <SwitchControl
                label="Card border"
                checked={border}
                onChange={setBorder}
              />
            </div>
            <div className={cn('flex items-center justify-between')}>
              <span className={cn('flex items-center gap-2')}>
                <Icon name="box-shadow" />
                Shadow
              </span>
              <SwitchControl
                label="Card shadow"
                checked={shadow}
                onChange={setShadow}
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
