import { cn } from '../lib/utils';
import { Tabs } from '@base-ui/react/tabs';
import { Icon } from '../components/Icon';
import { Workbench } from './Workbench';
import { Post } from './Post';
import { Preferences } from './Preferences';
import { SmallDemos } from './SmallDemos';

const tabClass = cn(
  'flex h-9 items-center gap-1.5 rounded-full ps-2.5 pe-4 text-sm font-medium text-muted hover:text-ink data-active:bg-surface data-active:text-ink',
);

export default function Examples({
  notify,
}: {
  notify: (message: string) => void;
}) {
  return (
    <>
      <div className={cn('flex items-end justify-between gap-5 py-7')}>
        <div>
          <h1 className={cn('text-3xl font-semibold tracking-normal')}>
            Examples
          </h1>
        </div>
      </div>
      <section
        className={cn('app-studies mt-0.5 mb-13 max-[680px]:mb-9')}
        aria-label="App examples"
      >
        <Tabs.Root defaultValue="workbench">
          <div
            className={cn(
              'study-bar mb-4 flex items-center justify-between gap-5 max-[680px]:flex-col max-[680px]:items-start max-[680px]:gap-3',
            )}
          >
            <Tabs.List
              className={cn(
                'study-tabs flex gap-1 rounded-full bg-hover p-px max-[680px]:w-full',
              )}
              aria-label="App examples"
            >
              <Tabs.Tab value="workbench" className={tabClass}>
                <Icon name="terminal-square" />
                Workbench
              </Tabs.Tab>
              <Tabs.Tab value="post" className={tabClass}>
                <Icon name="envelope" />
                Post
              </Tabs.Tab>
              <Tabs.Tab value="settings" className={tabClass}>
                <Icon name="sliders" />
                Preferences
              </Tabs.Tab>
            </Tabs.List>
          </div>
          <Tabs.Panel value="workbench" keepMounted>
            <Workbench notify={notify} />
          </Tabs.Panel>
          <Tabs.Panel value="post" keepMounted>
            <Post />
          </Tabs.Panel>
          <Tabs.Panel value="settings" keepMounted>
            <Preferences notify={notify} />
          </Tabs.Panel>
        </Tabs.Root>
      </section>
      <div
        className={cn(
          'earlier-examples-heading mb-6 flex items-baseline justify-between gap-4 border-t border-line pt-7 max-[680px]:flex-col max-[680px]:gap-2 [&_h2]:m-0 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-normal [&>span]:text-xs [&>span]:text-muted',
        )}
      >
        <h2>More interface examples</h2>
      </div>
      <SmallDemos notify={notify} />
      <p className={cn('mt-6 text-xs leading-relaxed text-muted')}>
        Messages, playback, and saves in these examples are simulated.
      </p>
    </>
  );
}
