import { Icon } from '@/components/Icon';
import { Bubble, BubbleContent } from '@/components/ui/bubble';
import {
  Message,
  MessageContent,
  MessageFooter,
} from '@/components/ui/message';
import { CopyButton, DemoToggle } from '@/demos/components/DemoControls';
import { Glyph } from '../Study';
import { AgentActivity, AgentComposer } from './AgentComposer';
import { BrowserWindow } from './Window';

const response =
  'Group icons by what they do: navigation, files, editing, and media. Use clear names, keep related variants together, and check each icon at 16 × 16 px.';

function ResponseActions() {
  return (
    <MessageFooter aria-label="Response actions">
      <CopyButton label="Copy response" getText={() => response} />
      <span role="img" aria-label="Read aloud" title="Read aloud">
        <Glyph name="volume-high" className="size-8" />
      </span>
      <DemoToggle
        label="Helpful response"
        icon="thumbs-up-down"
        activeIcon="thumbs-up-fill"
      />
      {[
        ['arrows-expand', 'Expand response'],
        ['pencil-edit', 'Edit response'],
      ].map(([icon, label]) => (
        <span key={icon} role="img" aria-label={label} title={label}>
          <Glyph name={icon} className="size-8" />
        </span>
      ))}
      <time className="ml-2 whitespace-nowrap" dateTime="16:22">
        4:22 PM
      </time>
    </MessageFooter>
  );
}

export function AgentsApp() {
  return (
    <BrowserWindow title="Gas Town" address="gas.town">
      <div className="flex min-h-full flex-col">
        <div className="flex h-11 shrink-0 items-center gap-2 px-3">
          <Glyph name="sidebar-left" />
          <Glyph name="pencil-edit" />
          <span className="ml-1 flex items-center gap-1 font-medium">
            GasTown
            <Icon name="chevron-down-sm" className="text-muted" />
          </span>
          <span className="ml-auto flex items-center gap-2 text-muted">
            <Glyph name="share" />
            <Glyph name="ellipsis" />
          </span>
        </div>
        <div className="mx-auto flex w-full max-w-xl flex-1 flex-col gap-4 px-4 pb-4 @lg/window:px-6">
          <section
            aria-label="Conversation"
            className="flex flex-1 flex-col gap-4 pt-2"
          >
            <Message align="end" aria-label="Your message">
              <MessageContent>
                <Bubble>
                  <BubbleContent>
                    How should I organize this icon library?
                  </BubbleContent>
                </Bubble>
              </MessageContent>
            </Message>
            <Message aria-label="Assistant response">
              <MessageContent>
                <Bubble variant="ghost">
                  <BubbleContent>{response}</BubbleContent>
                </Bubble>
                <ResponseActions />
              </MessageContent>
            </Message>
            <AgentActivity />
          </section>
          <AgentComposer />
        </div>
      </div>
    </BrowserWindow>
  );
}
