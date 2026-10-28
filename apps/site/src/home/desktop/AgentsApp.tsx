import { useEffect, useRef, useState } from 'react';
import { Icon } from '@/components/Icon';
import { ToggleGroup } from '@/components/ui/toggle-group';
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

const response = "It'll take two weeks to skirt the wall of mountains.";

function ResponseActions() {
  return (
    <MessageFooter aria-label="Response actions">
      <CopyButton label="Copy response" getText={() => response} />
      <span role="img" aria-label="Read aloud" title="Read aloud">
        <Glyph name="volume-high" className="size-8" />
      </span>
      <ToggleGroup aria-label="Rate response" className="gap-0">
        <DemoToggle
          value="up"
          label="Good response"
          icon="thumbs-up"
          activeIcon="thumbs-up-fill"
        />
        <DemoToggle
          value="down"
          label="Bad response"
          icon="thumbs-down"
          activeIcon="thumbs-down-fill"
        />
      </ToggleGroup>
      {[
        ['fork-horizontal', 'Fork in new chat'],
        ['notebook', 'Referenced memory'],
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
  const [thinkingOpen, setThinkingOpen] = useState(false);
  const conversation = useRef<HTMLElement>(null);

  useEffect(() => {
    if (thinkingOpen) {
      const element = conversation.current;
      element?.scrollTo({ top: element.scrollHeight });
    }
  }, [thinkingOpen]);

  return (
    <BrowserWindow title="MaxGPT" address="gas.town">
      <div className="flex h-full min-h-0 flex-col">
        <div className="flex h-11 shrink-0 items-center gap-2 px-3">
          <Glyph name="panel-left-closed" />
          <Glyph name="chat-round-plus" />
          <span className="ml-auto flex items-center gap-2 text-muted">
            <Glyph name="share" />
            <Glyph name="ellipsis" />
          </span>
        </div>
        <div className="mx-auto flex min-h-0 w-full max-w-xl flex-1 flex-col">
          <section
            ref={conversation}
            aria-label="Conversation"
            className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto overscroll-y-contain scroll-smooth px-2 pt-2 pb-4 motion-reduce:scroll-auto @lg/window:px-4"
          >
            <Message aria-label="Assistant response">
              <MessageContent>
                <Bubble variant="ghost">
                  <BubbleContent className="text-xs leading-relaxed">
                    {response}
                  </BubbleContent>
                </Bubble>
                <ResponseActions />
              </MessageContent>
            </Message>
            <Message align="end" aria-label="Your message">
              <MessageContent>
                <Bubble>
                  <BubbleContent className="text-xs leading-relaxed">
                    <span className="text-focus">/goal</span> So we take the War
                    Rig and charge it right through the middle of them. We can
                    decouple the tanker at the pass, shut it off behind us.
                  </BubbleContent>
                </Bubble>
              </MessageContent>
            </Message>
            <AgentActivity open={thinkingOpen} onOpenChange={setThinkingOpen} />
          </section>
          <div className="relative z-1 shrink-0 bg-surface px-2 pt-0 pb-4 @lg/window:px-4">
            <AgentComposer />
          </div>
        </div>
      </div>
    </BrowserWindow>
  );
}
