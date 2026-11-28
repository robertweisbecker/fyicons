import { useDemoActivity } from '@/components/DeferredContent';
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type KeyboardEvent,
} from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { createIconLookup } from '@/components/createIconLookup';
import { IconButton } from '@/components/IconButton';
import { buttonVariants } from '@/components/ui/button';
import { TooltipGroup } from '@/components/ui/tooltip';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { iconGroups } from './iconGroups';
import {
  IconAgent,
  IconAgentClank,
  IconAgentSimple,
  IconAgentSub,
  IconAirplaneDiagonal,
  IconAmpersand,
  IconAppearance,
  IconAppsConnected,
  IconArchway,
  IconArrowDown,
  IconArrowDownArrowUp,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconArrowUpRight,
  IconArrowX,
  IconArrowY,
  IconArrowsCollapse,
  IconArrowsExpand,
  IconArrowsRepost,
  IconArrowsRotateLg,
  IconArrowsSwap,
  IconAsterisk,
  IconAsteriskSimple,
  IconAtSign,
  IconAudioDescription,
  IconAudioDescriptionFill,
  IconBackpack,
  IconBag,
  IconBan,
  IconBanFill,
  IconBasket,
  IconBattery,
  IconBatteryCharging,
  IconBatteryEmpty,
  IconBatteryLow,
  IconBatteryMedium,
  IconBluetooth,
  IconBoxTaped,
  IconBraces,
  IconBrackets,
  IconBrain,
  IconBriefcase,
  IconBroadcastLive,
  IconBrowser,
  IconBrowserSolid,
  IconBrowserLandscapeSimple,
  IconBrowserPointer,
  IconBrowserSimple,
  IconBrowserSimpleFill,
  IconBrush,
  IconBucket,
  IconBug,
  IconBugAnt,
  IconBugBeetle,
  IconBullhorn,
  IconCalculator,
  IconCar,
  IconCaretDown,
  IconCaretLeft,
  IconCaretRight,
  IconCaretUp,
  IconCash,
  IconChat,
  IconChatClosedCaptions,
  IconChatCode,
  IconChatRound,
  IconChatRoundCode,
  IconChatRoundSparkles,
  IconChatSparkles,
  IconChatSubtitles,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconChevronsDownUp,
  IconChevronsExpand,
  IconChevronsUpDown,
  IconCircleAccess,
  IconCircleAccessFill,
  IconCircleDashed,
  IconCircleHalftone,
  IconClosedCaptions,
  IconClosedCaptionsFill,
  IconCode,
  IconCodeBlock,
  IconCodeRectangle,
  IconCodeSimple,
  IconCodeSquare,
  IconCoin,
  IconCoins,
  IconComputer,
  IconContrastHigh,
  IconContrastLow,
  IconCowboyHat,
  IconCreditCard,
  IconCrown,
  IconCrownFill,
  IconCrystalBall,
  IconCursor,
  IconCursorFill,
  IconCursorText,
  IconDesktop,
  IconDesktopSimple,
  IconDrawing,
  IconEarth,
  IconEject,
  IconEjectFill,
  IconEmojiAngry,
  IconEmojiAngryFill,
  IconEmojiDiagonal,
  IconEmojiDiagonalFill,
  IconEmojiFrown,
  IconEmojiFrownFill,
  IconEmojiGrin,
  IconEmojiGrinFill,
  IconEmojiHappy,
  IconEmojiHappyFill,
  IconEmojiMelt,
  IconEmojiMeltFill,
  IconEmojiNeutral,
  IconEmojiNeutralFill,
  IconEmojiScared,
  IconEmojiScaredFill,
  IconEmojiSmile,
  IconEmojiSmileFill,
  IconEraser,
  IconEye,
  IconEyeFill,
  IconEyedropper,
  IconFileSkill,
  IconFlashlight,
  IconFolderGit,
  IconFork,
  IconForkHorizontal,
  IconGaugeHigh,
  IconGaugeLow,
  IconGaugeMax,
  IconGaugeMin,
  IconGaugeSimple,
  IconGhost,
  IconGitBranch,
  IconGitBranchSimple,
  IconGitCommit,
  IconGitCompare,
  IconGitCompareSimple,
  IconGitFork,
  IconGitMerge,
  IconGitMergeSimple,
  IconGitPullRequest,
  IconGitPullRequestClosed,
  IconGitPullRequestDraft,
  IconGitPullRequestSimple,
  IconGitWorktree,
  IconGitWorktreeAlt,
  IconGlobeComplex,
  IconGlobeSimple,
  IconGlobeStand,
  IconHammer,
  IconHand,
  IconHandGrab,
  IconHandGrabbing,
  IconHandPointer,
  IconHat,
  IconHatSide,
  IconHeart,
  IconHeartFill,
  IconHighlighter,
  IconImageAlt,
  IconInstitution,
  IconKbdCapsLock,
  IconKbdCommand,
  IconKbdCtrl,
  IconKbdDel,
  IconKbdOpt,
  IconKbdReturn,
  IconKbdShift,
  IconLanguage,
  IconLaptop,
  IconLaptopFill,
  IconLaptopSimple,
  IconLightbulbSimple,
  IconLightbulbSimpleFill,
  IconLink,
  IconLoader,
  IconMarkdownFill,
  IconMemory,
  IconMenu,
  IconMenuAltSimple,
  IconMeter,
  IconMeterHigh,
  IconMeterLow,
  IconMicrochip,
  IconMobile,
  IconOffice,
  IconPaintBrush,
  IconPaperclipTilt,
  IconPaperclipWideTilt,
  IconParentheses,
  IconPen,
  IconPenTool,
  IconPenToolAlt,
  IconPencil,
  IconPhone,
  IconPhoneFill,
  IconPin,
  IconPinFill,
  IconPlug,
  IconPlugs,
  IconPointer,
  IconPointerFill,
  IconPointerSm,
  IconPointerSwarm,
  IconPointers,
  IconNumberSign,
  IconPower,
  IconProgressTask25,
  IconProgressTask50,
  IconProgressTask75,
  IconProgressTaskDone,
  IconProgressTaskTodo,
  IconRoute,
  IconRuler,
  IconScroll,
  IconSend,
  IconSendAlt,
  IconSendAltFill,
  IconSendFill,
  IconSendTilt,
  IconSendTiltFill,
  IconShop,
  IconShoppingCart,
  IconSignalFour,
  IconSignalFour0,
  IconSignalFour1,
  IconSignalFour2,
  IconSignalFour3,
  IconSkull,
  IconSkullFill,
  IconSparkle,
  IconSparkleFill,
  IconSparkles,
  IconSparklesFill,
  IconSpinner,
  IconStar,
  IconStarFill,
  IconSubtitles,
  IconSubtitlesFill,
  IconSuitcase,
  IconTargetBullseye,
  IconTelevision,
  IconTelevisionAntenna,
  IconTerminal,
  IconTerminalBash,
  IconTerminalRectangleFill,
  IconTerminalRectangle,
  IconThoughtBubble,
  IconThumbsDown,
  IconThumbsDownFill,
  IconThumbsUp,
  IconThumbs,
  IconThumbsUpFill,
  IconTicket,
  IconTopHat,
  IconTranslate,
  IconTreasureChest,
  IconTriangleRight,
  IconTruck,
  IconVariable,
  IconVectorPath,
  IconViewPointer,
  IconVoltage,
  IconWand,
  IconWandStar,
  IconWaveform,
  IconWifi,
  IconWifiFill,
  IconWorkflow,
  IconWorkflowDecision,
  IconWorkflowMulti,
  IconWrenchSide,
  IconWrenchTilt,
  IconZoomIn,
  IconZoomOut,
} from 'fyicons';

const Icon = createIconLookup({
  agent: IconAgent,
  'agent-clank': IconAgentClank,
  'agent-simple': IconAgentSimple,
  'agent-sub': IconAgentSub,
  'airplane-diagonal': IconAirplaneDiagonal,
  ampersand: IconAmpersand,
  appearance: IconAppearance,
  'apps-connected': IconAppsConnected,
  archway: IconArchway,
  'arrow-down': IconArrowDown,
  'arrow-down-arrow-up': IconArrowDownArrowUp,
  'arrow-left': IconArrowLeft,
  'arrow-right': IconArrowRight,
  'arrow-up': IconArrowUp,
  'arrow-up-right': IconArrowUpRight,
  'arrow-x': IconArrowX,
  'arrow-y': IconArrowY,
  'arrows-collapse': IconArrowsCollapse,
  'arrows-expand': IconArrowsExpand,
  'arrows-repost': IconArrowsRepost,
  'arrows-rotate-lg': IconArrowsRotateLg,
  'arrows-swap': IconArrowsSwap,
  asterisk: IconAsterisk,
  'asterisk-simple': IconAsteriskSimple,
  'at-sign': IconAtSign,
  'audio-description': IconAudioDescription,
  'audio-description-fill': IconAudioDescriptionFill,
  backpack: IconBackpack,
  bag: IconBag,
  ban: IconBan,
  'ban-fill': IconBanFill,
  basket: IconBasket,
  battery: IconBattery,
  'battery-charging': IconBatteryCharging,
  'battery-empty': IconBatteryEmpty,
  'battery-low': IconBatteryLow,
  'battery-medium': IconBatteryMedium,
  bluetooth: IconBluetooth,
  'box-taped': IconBoxTaped,
  braces: IconBraces,
  brackets: IconBrackets,
  brain: IconBrain,
  briefcase: IconBriefcase,
  'broadcast-live': IconBroadcastLive,
  browser: IconBrowser,
  'browser-fill': IconBrowserSolid,
  'browser-landscape-simple': IconBrowserLandscapeSimple,
  'browser-pointer': IconBrowserPointer,
  'browser-simple': IconBrowserSimple,
  'browser-simple-fill': IconBrowserSimpleFill,
  'browser-solid': IconBrowserSolid,
  brush: IconBrush,
  bucket: IconBucket,
  bug: IconBug,
  'bug-ant': IconBugAnt,
  'bug-beetle': IconBugBeetle,
  bullhorn: IconBullhorn,
  calculator: IconCalculator,
  car: IconCar,
  'caret-down': IconCaretDown,
  'caret-left': IconCaretLeft,
  'caret-right': IconCaretRight,
  'caret-up': IconCaretUp,
  cash: IconCash,
  chat: IconChat,
  'chat-closed-captions': IconChatClosedCaptions,
  'chat-code': IconChatCode,
  'chat-round': IconChatRound,
  'chat-round-code': IconChatRoundCode,
  'chat-round-sparkles': IconChatRoundSparkles,
  'chat-sparkles': IconChatSparkles,
  'chat-subtitles': IconChatSubtitles,
  'chevron-down': IconChevronDown,
  'chevron-left': IconChevronLeft,
  'chevron-right': IconChevronRight,
  'chevron-up': IconChevronUp,
  'chevrons-down-up': IconChevronsDownUp,
  'chevrons-expand': IconChevronsExpand,
  'chevrons-up-down': IconChevronsUpDown,
  'circle-access': IconCircleAccess,
  'circle-access-fill': IconCircleAccessFill,
  'circle-dashed': IconCircleDashed,
  'circle-halftone': IconCircleHalftone,
  'closed-captions': IconClosedCaptions,
  'closed-captions-fill': IconClosedCaptionsFill,
  code: IconCode,
  'code-block': IconCodeBlock,
  'code-rectangle': IconCodeRectangle,
  'code-simple': IconCodeSimple,
  'code-square': IconCodeSquare,
  coin: IconCoin,
  coins: IconCoins,
  computer: IconComputer,
  'contrast-high': IconContrastHigh,
  'contrast-low': IconContrastLow,
  'cowboy-hat': IconCowboyHat,
  'credit-card': IconCreditCard,
  crown: IconCrown,
  'crown-fill': IconCrownFill,
  'crystal-ball': IconCrystalBall,
  cursor: IconCursor,
  'cursor-fill': IconCursorFill,
  'cursor-text': IconCursorText,
  desktop: IconDesktop,
  'desktop-simple': IconDesktopSimple,
  drawing: IconDrawing,
  earth: IconEarth,
  eject: IconEject,
  'eject-fill': IconEjectFill,
  'emoji-angry': IconEmojiAngry,
  'emoji-angry-fill': IconEmojiAngryFill,
  'emoji-diagonal': IconEmojiDiagonal,
  'emoji-diagonal-fill': IconEmojiDiagonalFill,
  'emoji-frown': IconEmojiFrown,
  'emoji-frown-fill': IconEmojiFrownFill,
  'emoji-grin': IconEmojiGrin,
  'emoji-grin-fill': IconEmojiGrinFill,
  'emoji-happy': IconEmojiHappy,
  'emoji-happy-fill': IconEmojiHappyFill,
  'emoji-melt': IconEmojiMelt,
  'emoji-melt-fill': IconEmojiMeltFill,
  'emoji-neutral': IconEmojiNeutral,
  'emoji-neutral-fill': IconEmojiNeutralFill,
  'emoji-scared': IconEmojiScared,
  'emoji-scared-fill': IconEmojiScaredFill,
  'emoji-smile': IconEmojiSmile,
  'emoji-smile-fill': IconEmojiSmileFill,
  eraser: IconEraser,
  eye: IconEye,
  'eye-fill': IconEyeFill,
  eyedropper: IconEyedropper,
  'file-skill': IconFileSkill,
  flashlight: IconFlashlight,
  'folder-git': IconFolderGit,
  fork: IconFork,
  'fork-horizontal': IconForkHorizontal,
  'gauge-high': IconGaugeHigh,
  'gauge-low': IconGaugeLow,
  'gauge-max': IconGaugeMax,
  'gauge-min': IconGaugeMin,
  'gauge-simple': IconGaugeSimple,
  ghost: IconGhost,
  'git-branch': IconGitBranch,
  'git-branch-simple': IconGitBranchSimple,
  'git-commit': IconGitCommit,
  'git-compare': IconGitCompare,
  'git-compare-simple': IconGitCompareSimple,
  'git-fork': IconGitFork,
  'git-merge': IconGitMerge,
  'git-merge-simple': IconGitMergeSimple,
  'git-pull-request': IconGitPullRequest,
  'git-pull-request-closed': IconGitPullRequestClosed,
  'git-pull-request-draft': IconGitPullRequestDraft,
  'git-pull-request-simple': IconGitPullRequestSimple,
  'git-worktree': IconGitWorktree,
  'git-worktree-alt': IconGitWorktreeAlt,
  'globe-complex': IconGlobeComplex,
  'globe-simple': IconGlobeSimple,
  'globe-stand': IconGlobeStand,
  hammer: IconHammer,
  hand: IconHand,
  'hand-grab': IconHandGrab,
  'hand-grabbing': IconHandGrabbing,
  'hand-pointer': IconHandPointer,
  hat: IconHat,
  'hat-side': IconHatSide,
  heart: IconHeart,
  'heart-fill': IconHeartFill,
  highlighter: IconHighlighter,
  'image-alt': IconImageAlt,
  institution: IconInstitution,
  'kbd-caps-lock': IconKbdCapsLock,
  'kbd-command': IconKbdCommand,
  'kbd-ctrl': IconKbdCtrl,
  'kbd-del': IconKbdDel,
  'kbd-opt': IconKbdOpt,
  'kbd-return': IconKbdReturn,
  'kbd-shift': IconKbdShift,
  language: IconLanguage,
  laptop: IconLaptop,
  'laptop-fill': IconLaptopFill,
  'laptop-simple': IconLaptopSimple,
  'lightbulb-simple': IconLightbulbSimple,
  'lightbulb-simple-fill': IconLightbulbSimpleFill,
  link: IconLink,
  loader: IconLoader,
  'markdown-fill': IconMarkdownFill,
  memory: IconMemory,
  menu: IconMenu,
  'menu-alt-simple': IconMenuAltSimple,
  meter: IconMeter,
  'meter-high': IconMeterHigh,
  'meter-low': IconMeterLow,
  microchip: IconMicrochip,
  mobile: IconMobile,
  office: IconOffice,
  'paint-brush': IconPaintBrush,
  'paperclip-tilt': IconPaperclipTilt,
  'paperclip-wide-tilt': IconPaperclipWideTilt,
  parentheses: IconParentheses,
  pen: IconPen,
  'pen-tool': IconPenTool,
  'pen-tool-alt': IconPenToolAlt,
  pencil: IconPencil,
  phone: IconPhone,
  'phone-fill': IconPhoneFill,
  pin: IconPin,
  'pin-fill': IconPinFill,
  plug: IconPlug,
  plugs: IconPlugs,
  pointer: IconPointer,
  'pointer-fill': IconPointerFill,
  'pointer-sm': IconPointerSm,
  'pointer-swarm': IconPointerSwarm,
  pointers: IconPointers,
  'number-sign': IconNumberSign,
  power: IconPower,
  'progress-task-25': IconProgressTask25,
  'progress-task-50': IconProgressTask50,
  'progress-task-75': IconProgressTask75,
  'progress-task-done': IconProgressTaskDone,
  'progress-task-todo': IconProgressTaskTodo,
  route: IconRoute,
  ruler: IconRuler,
  scroll: IconScroll,
  send: IconSend,
  'send-alt': IconSendAlt,
  'send-alt-fill': IconSendAltFill,
  'send-fill': IconSendFill,
  'send-tilt': IconSendTilt,
  'send-tilt-fill': IconSendTiltFill,
  shop: IconShop,
  'shopping-cart': IconShoppingCart,
  'signal-four': IconSignalFour,
  'signal-four-0': IconSignalFour0,
  'signal-four-1': IconSignalFour1,
  'signal-four-2': IconSignalFour2,
  'signal-four-3': IconSignalFour3,
  skull: IconSkull,
  'skull-fill': IconSkullFill,
  sparkle: IconSparkle,
  'sparkle-fill': IconSparkleFill,
  sparkles: IconSparkles,
  'sparkles-fill': IconSparklesFill,
  spinner: IconSpinner,
  star: IconStar,
  'star-fill': IconStarFill,
  subtitles: IconSubtitles,
  'subtitles-fill': IconSubtitlesFill,
  suitcase: IconSuitcase,
  'target-bullseye': IconTargetBullseye,
  television: IconTelevision,
  'television-antenna': IconTelevisionAntenna,
  terminal: IconTerminal,
  'terminal-bash': IconTerminalBash,
  'terminal-fill': IconTerminalRectangleFill,
  'terminal-rectangle': IconTerminalRectangle,
  'terminal-rectangle-fill': IconTerminalRectangleFill,
  'thought-bubble': IconThoughtBubble,
  'thumbs-down': IconThumbsDown,
  'thumbs-down-fill': IconThumbsDownFill,
  'thumbs-up': IconThumbsUp,
  'thumbs': IconThumbs,
  'thumbs-up-fill': IconThumbsUpFill,
  ticket: IconTicket,
  'top-hat': IconTopHat,
  translate: IconTranslate,
  'treasure-chest': IconTreasureChest,
  'triangle-right': IconTriangleRight,
  truck: IconTruck,
  variable: IconVariable,
  'vector-path': IconVectorPath,
  'view-pointer': IconViewPointer,
  voltage: IconVoltage,
  wand: IconWand,
  'wand-star': IconWandStar,
  waveform: IconWaveform,
  wifi: IconWifi,
  'wifi-fill': IconWifiFill,
  workflow: IconWorkflow,
  'workflow-decision': IconWorkflowDecision,
  'workflow-multi': IconWorkflowMulti,
  'wrench-side': IconWrenchSide,
  'wrench-tilt': IconWrenchTilt,
  'zoom-in': IconZoomIn,
  'zoom-out': IconZoomOut,
});

export function IconGroupCarousel() {
  const active = useDemoActivity();
  const track = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    if (!active) return;
    const element = track.current!;
    const update = () =>
      setEdges({
        start: element.scrollLeft <= 2,
        end:
          element.scrollLeft + element.clientWidth >= element.scrollWidth - 2,
      });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    element.addEventListener('scroll', update, { passive: true });
    update();
    return () => {
      observer.disconnect();
      element.removeEventListener('scroll', update);
    };
  }, [active]);

  function scrollToGroup(
    direction: 'previous' | 'next' | 'first' | 'last',
    behavior: ScrollBehavior = 'instant',
  ) {
    const element = track.current!;
    const cards = [...content.current!.children] as HTMLElement[];
    const step = cards[1].offsetLeft - cards[0].offsetLeft;
    const current = Math.round(element.scrollLeft / step);
    const index =
      direction === 'first'
        ? 0
        : direction === 'last'
          ? cards.length - 1
          : current + (direction === 'next' ? 1 : -1);
    element.scrollTo({
      left: Math.max(0, Math.min(cards.length - 1, index)) * step,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : behavior,
    });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) return;
    const direction = {
      ArrowLeft: 'previous',
      ArrowRight: 'next',
      Home: 'first',
      End: 'last',
    }[event.key] as Parameters<typeof scrollToGroup>[0] | undefined;
    if (direction) {
      event.preventDefault();
      scrollToGroup(direction);
    }
  }

  return (
    <>
      <ScrollArea.Root className="icon-group-carousel">
        <ScrollArea.Viewport
          ref={track}
          className="relative snap-x snap-mandatory scroll-px-(--carousel-inset)"
          role="region"
          aria-roledescription="carousel"
          aria-label="Icon groups"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <ScrollArea.Content
            ref={content}
            className="relative flex gap-4 px-(--carousel-inset) pb-6 sm:gap-6"
          >
            {iconGroups.map((group, index) => (
              <figure
                key={group.id}
                className="m-0 flex w-72 max-w-[calc(100cqw-2rem)] shrink-0 snap-start flex-col gap-4 sm:w-80"
                data-figma-id={group.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${group.name}, ${index + 1} of ${iconGroups.length}`}
              >
                <div
                  className={cn(
                    'flex aspect-4/5 w-full flex-col items-center justify-center rounded-3xl',
                    group.colorClassName,
                  )}
                >
                  {group.rows.map((row, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="flex max-w-full justify-center"
                    >
                      {row.map((name, iconIndex) => (
                        <span
                          key={`${name}-${iconIndex}`}
                          className="grid size-11 min-w-8 shrink place-items-center sm:size-12"
                        >
                          <Icon name={name} size={24} title={name} />
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
                <figcaption
                  className={`px-3 text-lg font-medium text-muted ${group.id === '857:27892' ? 'leading-[1.25]' : 'leading-snug'}`}
                >
                  <span className="font-semibold text-ink">{group.name}</span>{' '}
                  {group.caption}
                </figcaption>
              </figure>
            ))}
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          orientation="horizontal"
          keepMounted
          className="mx-(--carousel-inset) max-md:opacity-100"
        />
      </ScrollArea.Root>
      <div className="mt-4 flex justify-end gap-2">
        <TooltipGroup>
          <IconButton
            icon="chevron-left"
            label="Previous icon group"
            variant="neutral"
            className="size-9 rounded-full pointer-coarse:size-11"
            disabled={edges.start}
            onClick={(event) =>
              scrollToGroup('previous', event.detail ? 'smooth' : 'instant')
            }
          />
          <IconButton
            icon="chevron-right"
            label="Next icon group"
            variant="neutral"
            className="size-9 rounded-full pointer-coarse:size-11"
            disabled={edges.end}
            onClick={(event) =>
              scrollToGroup('next', event.detail ? 'smooth' : 'instant')
            }
          />
        </TooltipGroup>
      </div>
    </>
  );
}
