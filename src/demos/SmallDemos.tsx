import { cn } from '../lib/utils';
import type { ReactNode } from 'react';
import { Orbit } from './Orbit';
import { Margin } from './Margin';
import { Current } from './Current';
import { Forma } from './Forma';
function Card({
  number,
  title,
  type,
  children,
}: {
  number: string;
  title: string;
  type: string;
  children: ReactNode;
}) {
  return (
    <article>
      <div className={cn('mb-4 flex items-baseline gap-3')}>
        <span className={cn('text-[10px] text-muted')}>{number}</span>
        <h3 className={cn('font-semibold')}>
          {title}
          <small className={cn('ml-2 text-xs font-normal text-muted')}>
            {type}
          </small>
        </h3>
      </div>
      {children}
    </article>
  );
}
export function SmallDemos({ notify }: { notify: (message: string) => void }) {
  return (
    <div className={cn('grid gap-x-7 gap-y-9 xl:grid-cols-2')}>
      <Card number="01 / WORKSPACE" title="Orbit" type="AI workspace">
        <Orbit />
      </Card>
      <Card number="02 / WRITING" title="Margin" type="Text editor">
        <Margin notify={notify} />
      </Card>
      <Card number="03 / LISTENING" title="Current" type="Music player">
        <Current />
      </Card>
      <Card number="04 / DESIGN TOOLS" title="Forma" type="Design inspector">
        <Forma />
      </Card>
    </div>
  );
}
