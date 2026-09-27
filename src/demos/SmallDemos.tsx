import { cn } from '../lib/utils';
import type { ReactNode } from 'react';
import { Orbit } from './Orbit';
import { Margin } from './Margin';
import { Current } from './Current';
import { Forma } from './Forma';
function Card({
  title,
  type,
  children,
}: {
  title: string;
  type: string;
  children: ReactNode;
}) {
  return (
    <article>
      <div className={cn('mb-4 flex items-baseline gap-3')}>
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
      <Card title="Orbit" type="AI workspace">
        <Orbit />
      </Card>
      <Card title="Margin" type="Text editor">
        <Margin notify={notify} />
      </Card>
      <Card title="Current" type="Music player">
        <Current />
      </Card>
      <Card title="Forma" type="Design inspector">
        <Forma />
      </Card>
    </div>
  );
}
