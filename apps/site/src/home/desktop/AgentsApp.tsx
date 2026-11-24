import { useEffect, useRef, useState } from 'react';
import { createIconLookup } from '@/components/createIconLookup';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { Bubble, BubbleContent } from '@/components/ui/bubble';
import {
  Message,
  MessageContent,
  MessageFooter,
} from '@/components/ui/message';
import {
  createDemoControls,
  CopyButton,
} from '@/demos/components/DemoControls';
import { createGlyph } from '../Study';
import { AgentActivity, AgentComposer } from './AgentComposer';
import { BrowserWindow } from './Window';
import {
  IconAgent,
  IconArrowClockwise,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconBolt,
  IconBoltFill,
  IconBookReading,
  IconCaretsMaximize,
  IconChatRoundPlus,
  IconChevronRightSm,
  IconChevronsExpand,
  IconCirclePause,
  IconCirclePauseFill,
  IconCirclePlay,
  IconCirclePlayFill,
  IconCircleUserFill,
  IconCircleXFill,
  IconEllipsis,
  IconEllipsisV,
  IconFileSkill,
  IconForkHorizontal,
  IconGas,
  IconGasFill,
  IconGaugeHigh,
  IconGaugeLow,
  IconGhost,
  IconInfo,
  IconInfoFill,
  IconLightbulb,
  IconLightbulbFill,
  IconLightbulbOn,
  IconLineVertical,
  IconMicrophone,
  IconMicrophoneFill,
  IconMinus,
  IconNotePad,
  IconNotebook,
  IconPanelLeftClosed,
  IconPencil,
  IconPlug,
  IconPlus,
  IconPlusSm,
  IconPointers,
  IconPuzzlePiece,
  IconShare,
  IconShieldCode,
  IconStarFill,
  IconTarget,
  IconTargetBullseye,
  IconTextTitle,
  IconTextTitleFill,
  IconThoughtBubble,
  IconThumbsDown,
  IconThumbsDownFill,
  IconThumbsUp,
  IconThumbsUpFill,
  IconTimer,
  IconTimerFill,
  IconTrash,
  IconVideoFill,
  IconVolumeHigh,
  IconVolumeHighFill,
  IconWaveform,
  IconWrenchTilt,
  IconX,
  IconZoomIn,
} from 'fyicons';

const Icon = createIconLookup({
  agent: IconAgent,
  'arrow-clockwise': IconArrowClockwise,
  'arrow-left': IconArrowLeft,
  'arrow-right': IconArrowRight,
  'arrow-up': IconArrowUp,
  bolt: IconBolt,
  'bolt-fill': IconBoltFill,
  'book-reading': IconBookReading,
  'carets-maximize': IconCaretsMaximize,
  'chat-round-plus': IconChatRoundPlus,
  'chevron-right-sm': IconChevronRightSm,
  'chevrons-maximize': IconChevronsExpand,
  'circle-pause': IconCirclePause,
  'circle-pause-fill': IconCirclePauseFill,
  'circle-play': IconCirclePlay,
  'circle-play-fill': IconCirclePlayFill,
  'circle-user-fill': IconCircleUserFill,
  'circle-x-fill': IconCircleXFill,
  ellipsis: IconEllipsis,
  'ellipsis-v': IconEllipsisV,
  'file-skill': IconFileSkill,
  'fork-horizontal': IconForkHorizontal,
  gas: IconGas,
  'gas-fill': IconGasFill,
  'gauge-high': IconGaugeHigh,
  'gauge-low': IconGaugeLow,
  ghost: IconGhost,
  info: IconInfo,
  'info-fill': IconInfoFill,
  lightbulb: IconLightbulb,
  'lightbulb-fill': IconLightbulbFill,
  'lightbulb-on': IconLightbulbOn,
  'line-vertical': IconLineVertical,
  microphone: IconMicrophone,
  'microphone-fill': IconMicrophoneFill,
  minus: IconMinus,
  'note-pad': IconNotePad,
  notebook: IconNotebook,
  'panel-left-closed': IconPanelLeftClosed,
  pencil: IconPencil,
  plug: IconPlug,
  plus: IconPlus,
  'plus-sm': IconPlusSm,
  pointers: IconPointers,
  'puzzle-piece': IconPuzzlePiece,
  share: IconShare,
  'shield-code': IconShieldCode,
  'star-fill': IconStarFill,
  target: IconTarget,
  'target-bullseye': IconTargetBullseye,
  text: IconTextTitle,
  'text-fill': IconTextTitleFill,
  'thought-bubble': IconThoughtBubble,
  'thumbs-down': IconThumbsDown,
  'thumbs-down-fill': IconThumbsDownFill,
  'thumbs-up': IconThumbsUp,
  'thumbs-up-fill': IconThumbsUpFill,
  timer: IconTimer,
  'timer-fill': IconTimerFill,
  trash: IconTrash,
  'video-fill': IconVideoFill,
  'volume-high': IconVolumeHigh,
  'volume-high-fill': IconVolumeHighFill,
  waveform: IconWaveform,
  'wrench-tilt': IconWrenchTilt,
  x: IconX,
  'zoom-in': IconZoomIn,
});

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

const Glyph = createGlyph(Icon);

const { DemoToggle } = createDemoControls(Icon);
