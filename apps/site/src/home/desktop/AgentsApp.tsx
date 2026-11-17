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

import Glyph0 from 'fyicons/icons/IconAgent';
import Glyph1 from 'fyicons/icons/IconArrowClockwise';
import Glyph2 from 'fyicons/icons/IconArrowLeft';
import Glyph3 from 'fyicons/icons/IconArrowRight';
import Glyph4 from 'fyicons/icons/IconArrowUp';
import Glyph5 from 'fyicons/icons/IconBolt';
import Glyph6 from 'fyicons/icons/IconBoltFill';
import Glyph7 from 'fyicons/icons/IconBookReading';
import Glyph8 from 'fyicons/icons/IconCaretsMaximize';
import Glyph9 from 'fyicons/icons/IconChatRoundPlus';
import Glyph10 from 'fyicons/icons/IconChevronRightSm';
import Glyph11 from 'fyicons/icons/IconChevronsExpand';
import Glyph12 from 'fyicons/icons/IconCirclePause';
import Glyph13 from 'fyicons/icons/IconCirclePauseFill';
import Glyph14 from 'fyicons/icons/IconCirclePlay';
import Glyph15 from 'fyicons/icons/IconCirclePlayFill';
import Glyph16 from 'fyicons/icons/IconCircleUserFill';
import Glyph17 from 'fyicons/icons/IconCircleXFill';
import Glyph18 from 'fyicons/icons/IconEllipsis';
import Glyph19 from 'fyicons/icons/IconEllipsisV';
import Glyph20 from 'fyicons/icons/IconFileSkill';
import Glyph21 from 'fyicons/icons/IconForkHorizontal';
import Glyph22 from 'fyicons/icons/IconGas';
import Glyph23 from 'fyicons/icons/IconGasFill';
import Glyph24 from 'fyicons/icons/IconGaugeHigh';
import Glyph25 from 'fyicons/icons/IconGaugeLow';
import Glyph26 from 'fyicons/icons/IconGhost';
import Glyph27 from 'fyicons/icons/IconInfo';
import Glyph28 from 'fyicons/icons/IconInfoFill';
import Glyph29 from 'fyicons/icons/IconLightbulb';
import Glyph30 from 'fyicons/icons/IconLightbulbFill';
import Glyph31 from 'fyicons/icons/IconLightbulbOn';
import Glyph32 from 'fyicons/icons/IconLineVertical';
import Glyph33 from 'fyicons/icons/IconMicrophone';
import Glyph34 from 'fyicons/icons/IconMicrophoneFill';
import Glyph35 from 'fyicons/icons/IconMinus';
import Glyph36 from 'fyicons/icons/IconNotePad';
import Glyph37 from 'fyicons/icons/IconNotebook';
import Glyph38 from 'fyicons/icons/IconPanelLeftClosed';
import Glyph39 from 'fyicons/icons/IconPencil';
import Glyph40 from 'fyicons/icons/IconPlug';
import Glyph41 from 'fyicons/icons/IconPlus';
import Glyph42 from 'fyicons/icons/IconPlusSm';
import Glyph43 from 'fyicons/icons/IconPointers';
import Glyph44 from 'fyicons/icons/IconPuzzlePiece';
import Glyph45 from 'fyicons/icons/IconShare';
import Glyph46 from 'fyicons/icons/IconShieldCode';
import Glyph47 from 'fyicons/icons/IconStarFill';
import Glyph48 from 'fyicons/icons/IconTarget';
import Glyph49 from 'fyicons/icons/IconTargetBullseye';
import Glyph50 from 'fyicons/icons/IconTextTitle';
import Glyph51 from 'fyicons/icons/IconTextTitleFill';
import Glyph52 from 'fyicons/icons/IconThoughtBubble';
import Glyph53 from 'fyicons/icons/IconThumbsDown';
import Glyph54 from 'fyicons/icons/IconThumbsDownFill';
import Glyph55 from 'fyicons/icons/IconThumbsUp';
import Glyph56 from 'fyicons/icons/IconThumbsUpFill';
import Glyph57 from 'fyicons/icons/IconTimer';
import Glyph58 from 'fyicons/icons/IconTimerFill';
import Glyph59 from 'fyicons/icons/IconTrash';
import Glyph60 from 'fyicons/icons/IconVideoFill';
import Glyph61 from 'fyicons/icons/IconVolumeHigh';
import Glyph62 from 'fyicons/icons/IconVolumeHighFill';
import Glyph63 from 'fyicons/icons/IconWaveform';
import Glyph64 from 'fyicons/icons/IconWrenchTilt';
import Glyph65 from 'fyicons/icons/IconX';
import Glyph66 from 'fyicons/icons/IconZoomIn';
const Icon = createIconLookup({
  agent: { Component: Glyph0, id: '154:11361' },
  'arrow-clockwise': { Component: Glyph1, id: '334:6678' },
  'arrow-left': { Component: Glyph2, id: '518:4811' },
  'arrow-right': { Component: Glyph3, id: '518:4810' },
  'arrow-up': { Component: Glyph4, id: '518:4787' },
  bolt: { Component: Glyph5, id: '102:5518' },
  'bolt-fill': { Component: Glyph6, id: '717:4006' },
  'book-reading': { Component: Glyph7, id: '134:4679' },
  'carets-maximize': { Component: Glyph8, id: '142:6370' },
  'chat-round-plus': { Component: Glyph9, id: '245:15146' },
  'chevron-right-sm': { Component: Glyph10, id: '142:6353' },
  'chevrons-maximize': { Component: Glyph11, id: '816:11019' },
  'circle-pause': { Component: Glyph12, id: '96:1634' },
  'circle-pause-fill': { Component: Glyph13, id: '578:2366' },
  'circle-play': { Component: Glyph14, id: '124:2541' },
  'circle-play-fill': { Component: Glyph15, id: '578:2376' },
  'circle-user-fill': { Component: Glyph16, id: '390:10591' },
  'circle-x-fill': { Component: Glyph17, id: '297:3620' },
  ellipsis: { Component: Glyph18, id: '101:4340' },
  'ellipsis-v': { Component: Glyph19, id: '487:403' },
  'file-skill': { Component: Glyph20, id: '679:539' },
  'fork-horizontal': { Component: Glyph21, id: '535:8415' },
  gas: { Component: Glyph22, id: '1020:10458' },
  'gas-fill': { Component: Glyph23, id: '1167:1488' },
  'gauge-high': { Component: Glyph24, id: '375:6429' },
  'gauge-low': { Component: Glyph25, id: '375:6430' },
  ghost: { Component: Glyph26, id: '727:314' },
  info: { Component: Glyph27, id: '132:4339' },
  'info-fill': { Component: Glyph28, id: '487:1519' },
  lightbulb: { Component: Glyph29, id: '233:14817' },
  'lightbulb-fill': { Component: Glyph30, id: '1205:11038' },
  'lightbulb-on': { Component: Glyph31, id: '847:16024' },
  'line-vertical': { Component: Glyph32, id: '469:1980' },
  microphone: { Component: Glyph33, id: '58:9539' },
  'microphone-fill': { Component: Glyph34, id: '748:4674' },
  minus: { Component: Glyph35, id: '667:899' },
  'note-pad': { Component: Glyph36, id: '599:4487' },
  notebook: { Component: Glyph37, id: '534:8034' },
  'panel-left-closed': { Component: Glyph38, id: '578:2530' },
  pencil: { Component: Glyph39, id: '132:2419' },
  plug: { Component: Glyph40, id: '224:14651' },
  plus: { Component: Glyph41, id: '120:2544' },
  'plus-sm': { Component: Glyph42, id: '101:3662' },
  pointers: { Component: Glyph43, id: '697:229' },
  'puzzle-piece': { Component: Glyph44, id: '123:2474' },
  share: { Component: Glyph45, id: '343:9459' },
  'shield-code': { Component: Glyph46, id: '193:13727' },
  'star-fill': { Component: Glyph47, id: '652:850' },
  target: { Component: Glyph48, id: '667:1186' },
  'target-bullseye': { Component: Glyph49, id: '342:7916' },
  text: { Component: Glyph50, id: '58:9540' },
  'text-fill': { Component: Glyph51, id: '1084:12366' },
  'thought-bubble': { Component: Glyph52, id: '282:17058' },
  'thumbs-down': { Component: Glyph53, id: '364:5299' },
  'thumbs-down-fill': { Component: Glyph54, id: '520:5603' },
  'thumbs-up': { Component: Glyph55, id: '171:11842' },
  'thumbs-up-fill': { Component: Glyph56, id: '520:5594' },
  timer: { Component: Glyph57, id: '299:6105' },
  'timer-fill': { Component: Glyph58, id: '716:3755' },
  trash: { Component: Glyph59, id: '100:2287' },
  'video-fill': { Component: Glyph60, id: '1013:19487' },
  'volume-high': { Component: Glyph61, id: '46:898' },
  'volume-high-fill': { Component: Glyph62, id: '46:897' },
  waveform: { Component: Glyph63, id: '372:5489' },
  'wrench-tilt': { Component: Glyph64, id: '313:17439' },
  x: { Component: Glyph65, id: '506:3897' },
  'zoom-in': { Component: Glyph66, id: '716:3726' },
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
