import { cn } from '../lib/utils';
import { Tabs } from '@base-ui/react/tabs';
import { Icon } from '../components/Icon';
import { Workbench } from './Workbench';
import { Post } from './Post';
import { Preferences } from './Preferences';
import { SmallDemos } from './SmallDemos';

export default function Examples({
  notify,
}: {
  notify: (message: string) => void;
}) {
  return (
    <>
      <div className={cn('flex items-end justify-between gap-5 py-7')}>
        <div>
          <h2 className={cn('text-xl font-semibold tracking-tight')}>
            UI examples
          </h2>
          <p className={cn('mt-2 text-[13px] text-muted')}>
            Seven interactive demos using native 16px icons.
          </p>
        </div>
        <a
          href="#library"
          className={cn(
            'inline-flex min-h-9 items-center justify-center gap-2 text-xs text-muted hover:text-ink sm:flex',
          )}
        >
          Browse the library
          <Icon name="arrow-up-right" />
        </a>
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
                'study-tabs flex gap-1 rounded-lg bg-hover p-1 max-[680px]:w-full [&_[data-active]]:bg-surface [&_[data-active]]:text-ink [&_[data-active]]:shadow-sm [&_button]:flex [&_button]:h-9 [&_button]:items-center [&_button]:gap-2 [&_button]:rounded-md [&_button]:px-3.5 [&_button]:text-xs [&_button]:font-medium [&_button]:text-muted [&_button]:hover:text-ink max-[680px]:[&_button]:h-9.5 max-[680px]:[&_button]:flex-1 max-[680px]:[&_button]:justify-center max-[680px]:[&_button]:gap-1.5 max-[680px]:[&_button]:px-2 max-[680px]:[&_button]:text-[11px] pointer-coarse:[&_button]:min-h-11',
              )}
              aria-label="App examples"
            >
              <Tabs.Tab value="workbench">
                <Icon name="terminal-square" />
                Workbench
              </Tabs.Tab>
              <Tabs.Tab value="post">
                <Icon name="envelope" />
                Post
              </Tabs.Tab>
              <Tabs.Tab value="settings">
                <Icon name="sliders" />
                Preferences
              </Tabs.Tab>
            </Tabs.List>
            <span
              className={cn(
                'native-spec flex items-center gap-2 text-[11px] text-muted max-[850px]:text-[10px] max-[680px]:self-end',
              )}
            >
              <span
                className={cn(
                  'native-spec-dot size-1.25 rounded-full bg-[#4f8266]',
                )}
              />
              16px icons · 1:1 rendering
            </span>
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
          'earlier-examples-heading mb-6 flex items-baseline justify-between gap-4 border-t border-line pt-7 max-[680px]:flex-col max-[680px]:gap-2 [&_h2]:m-0 [&_h2]:text-[19px] [&_h2]:font-semibold [&_h2]:tracking-tight [&>span]:text-[11px] [&>span]:text-muted',
        )}
      >
        <h2>More interface examples</h2>
        <span>Native 16px icons</span>
      </div>
      <SmallDemos notify={notify} />
      <p className={cn('mt-6 text-xs leading-relaxed text-muted')}>
        Interactive local demos. Messages, playback, and saves are simulated; no
        data leaves this page.
      </p>
    </>
  );
}
