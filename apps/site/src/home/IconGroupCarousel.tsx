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

import Glyph0 from 'fyicons/icons/IconAgent';
import Glyph1 from 'fyicons/icons/IconAgentClank';
import Glyph2 from 'fyicons/icons/IconAgentSimple';
import Glyph3 from 'fyicons/icons/IconAgentSub';
import Glyph4 from 'fyicons/icons/IconAirplaneDiagonal';
import Glyph5 from 'fyicons/icons/IconAmpersand';
import Glyph6 from 'fyicons/icons/IconAppearance';
import Glyph7 from 'fyicons/icons/IconAppsConnected';
import Glyph8 from 'fyicons/icons/IconArchway';
import Glyph9 from 'fyicons/icons/IconArrowDown';
import Glyph10 from 'fyicons/icons/IconArrowDownArrowUp';
import Glyph11 from 'fyicons/icons/IconArrowLeft';
import Glyph12 from 'fyicons/icons/IconArrowRight';
import Glyph13 from 'fyicons/icons/IconArrowUp';
import Glyph14 from 'fyicons/icons/IconArrowUpRight';
import Glyph15 from 'fyicons/icons/IconArrowX';
import Glyph16 from 'fyicons/icons/IconArrowY';
import Glyph17 from 'fyicons/icons/IconArrowsCollapse';
import Glyph18 from 'fyicons/icons/IconArrowsExpand';
import Glyph19 from 'fyicons/icons/IconArrowsRepost';
import Glyph20 from 'fyicons/icons/IconArrowsRotateLg';
import Glyph21 from 'fyicons/icons/IconArrowsSwap';
import Glyph22 from 'fyicons/icons/IconAsterisk';
import Glyph23 from 'fyicons/icons/IconAsteriskSimple';
import Glyph24 from 'fyicons/icons/IconAtSign';
import Glyph25 from 'fyicons/icons/IconAudioDescription';
import Glyph26 from 'fyicons/icons/IconAudioDescriptionFill';
import Glyph27 from 'fyicons/icons/IconBackpack';
import Glyph28 from 'fyicons/icons/IconBag';
import Glyph29 from 'fyicons/icons/IconBan';
import Glyph30 from 'fyicons/icons/IconBanFill';
import Glyph31 from 'fyicons/icons/IconBasket';
import Glyph32 from 'fyicons/icons/IconBattery';
import Glyph33 from 'fyicons/icons/IconBatteryCharging';
import Glyph34 from 'fyicons/icons/IconBatteryEmpty';
import Glyph35 from 'fyicons/icons/IconBatteryLow';
import Glyph36 from 'fyicons/icons/IconBatteryMedium';
import Glyph37 from 'fyicons/icons/IconBluetooth';
import Glyph38 from 'fyicons/icons/IconBoxTaped';
import Glyph39 from 'fyicons/icons/IconBraces';
import Glyph40 from 'fyicons/icons/IconBrackets';
import Glyph41 from 'fyicons/icons/IconBrain';
import Glyph42 from 'fyicons/icons/IconBriefcase';
import Glyph43 from 'fyicons/icons/IconBroadcastLive';
import Glyph44 from 'fyicons/icons/IconBrowser';
import Glyph45 from 'fyicons/icons/IconBrowserSolid';
import Glyph46 from 'fyicons/icons/IconBrowserLandscapeSimple';
import Glyph47 from 'fyicons/icons/IconBrowserPointer';
import Glyph48 from 'fyicons/icons/IconBrowserSimple';
import Glyph49 from 'fyicons/icons/IconBrowserSimpleFill';
import Glyph50 from 'fyicons/icons/IconBrowserSolid';
import Glyph51 from 'fyicons/icons/IconBrush';
import Glyph52 from 'fyicons/icons/IconBucket';
import Glyph53 from 'fyicons/icons/IconBug';
import Glyph54 from 'fyicons/icons/IconBugAnt';
import Glyph55 from 'fyicons/icons/IconBugBeetle';
import Glyph56 from 'fyicons/icons/IconBullhorn';
import Glyph57 from 'fyicons/icons/IconCalculator';
import Glyph58 from 'fyicons/icons/IconCar';
import Glyph59 from 'fyicons/icons/IconCaretDown';
import Glyph60 from 'fyicons/icons/IconCaretLeft';
import Glyph61 from 'fyicons/icons/IconCaretRight';
import Glyph62 from 'fyicons/icons/IconCaretUp';
import Glyph63 from 'fyicons/icons/IconCash';
import Glyph64 from 'fyicons/icons/IconChat';
import Glyph65 from 'fyicons/icons/IconChatClosedCaptions';
import Glyph66 from 'fyicons/icons/IconChatCode';
import Glyph67 from 'fyicons/icons/IconChatRound';
import Glyph68 from 'fyicons/icons/IconChatRoundCode';
import Glyph69 from 'fyicons/icons/IconChatRoundSparkles';
import Glyph70 from 'fyicons/icons/IconChatSparkles';
import Glyph71 from 'fyicons/icons/IconChatSubtitles';
import Glyph72 from 'fyicons/icons/IconChevronDown';
import Glyph73 from 'fyicons/icons/IconChevronLeft';
import Glyph74 from 'fyicons/icons/IconChevronRight';
import Glyph75 from 'fyicons/icons/IconChevronUp';
import Glyph76 from 'fyicons/icons/IconChevronsDownUp';
import Glyph77 from 'fyicons/icons/IconChevronsExpand';
import Glyph78 from 'fyicons/icons/IconChevronsUpDown';
import Glyph79 from 'fyicons/icons/IconCircleAccess';
import Glyph80 from 'fyicons/icons/IconCircleAccessFill';
import Glyph81 from 'fyicons/icons/IconCircleDashed';
import Glyph82 from 'fyicons/icons/IconCircleHalftone';
import Glyph83 from 'fyicons/icons/IconClosedCaptions';
import Glyph84 from 'fyicons/icons/IconClosedCaptionsFill';
import Glyph85 from 'fyicons/icons/IconCode';
import Glyph86 from 'fyicons/icons/IconCodeBlock';
import Glyph87 from 'fyicons/icons/IconCodeRectangle';
import Glyph88 from 'fyicons/icons/IconCodeSimple';
import Glyph89 from 'fyicons/icons/IconCodeSquare';
import Glyph90 from 'fyicons/icons/IconCoin';
import Glyph91 from 'fyicons/icons/IconCoins';
import Glyph92 from 'fyicons/icons/IconComputer';
import Glyph93 from 'fyicons/icons/IconContrastHigh';
import Glyph94 from 'fyicons/icons/IconContrastLow';
import Glyph95 from 'fyicons/icons/IconCowboyHat';
import Glyph96 from 'fyicons/icons/IconCreditCard';
import Glyph97 from 'fyicons/icons/IconCrown';
import Glyph98 from 'fyicons/icons/IconCrownFill';
import Glyph99 from 'fyicons/icons/IconCrystalBall';
import Glyph100 from 'fyicons/icons/IconCursor';
import Glyph101 from 'fyicons/icons/IconCursorFill';
import Glyph102 from 'fyicons/icons/IconCursorText';
import Glyph103 from 'fyicons/icons/IconDesktop';
import Glyph104 from 'fyicons/icons/IconDesktopSimple';
import Glyph105 from 'fyicons/icons/IconDrawing';
import Glyph106 from 'fyicons/icons/IconEarth';
import Glyph107 from 'fyicons/icons/IconEject';
import Glyph108 from 'fyicons/icons/IconEjectFill';
import Glyph109 from 'fyicons/icons/IconEmojiAngry';
import Glyph110 from 'fyicons/icons/IconEmojiAngryFill';
import Glyph111 from 'fyicons/icons/IconEmojiDiagonal';
import Glyph112 from 'fyicons/icons/IconEmojiDiagonalFill';
import Glyph113 from 'fyicons/icons/IconEmojiFrown';
import Glyph114 from 'fyicons/icons/IconEmojiFrownFill';
import Glyph115 from 'fyicons/icons/IconEmojiGrin';
import Glyph116 from 'fyicons/icons/IconEmojiGrinFill';
import Glyph117 from 'fyicons/icons/IconEmojiHappy';
import Glyph118 from 'fyicons/icons/IconEmojiHappyFill';
import Glyph119 from 'fyicons/icons/IconEmojiMelt';
import Glyph120 from 'fyicons/icons/IconEmojiMeltFill';
import Glyph121 from 'fyicons/icons/IconEmojiNeutral';
import Glyph122 from 'fyicons/icons/IconEmojiNeutralFill';
import Glyph123 from 'fyicons/icons/IconEmojiScared';
import Glyph124 from 'fyicons/icons/IconEmojiScaredFill';
import Glyph125 from 'fyicons/icons/IconEmojiSmile';
import Glyph126 from 'fyicons/icons/IconEmojiSmileFill';
import Glyph127 from 'fyicons/icons/IconEraser';
import Glyph128 from 'fyicons/icons/IconEye';
import Glyph129 from 'fyicons/icons/IconEyeFill';
import Glyph130 from 'fyicons/icons/IconEyedropper';
import Glyph131 from 'fyicons/icons/IconFileSkill';
import Glyph132 from 'fyicons/icons/IconFlashlight';
import Glyph133 from 'fyicons/icons/IconFolderGit';
import Glyph134 from 'fyicons/icons/IconFork';
import Glyph135 from 'fyicons/icons/IconForkHorizontal';
import Glyph136 from 'fyicons/icons/IconGaugeHigh';
import Glyph137 from 'fyicons/icons/IconGaugeLow';
import Glyph138 from 'fyicons/icons/IconGaugeMax';
import Glyph139 from 'fyicons/icons/IconGaugeMin';
import Glyph140 from 'fyicons/icons/IconGaugeSimple';
import Glyph141 from 'fyicons/icons/IconGhost';
import Glyph142 from 'fyicons/icons/IconGitBranch';
import Glyph143 from 'fyicons/icons/IconGitBranchSimple';
import Glyph144 from 'fyicons/icons/IconGitCommit';
import Glyph145 from 'fyicons/icons/IconGitCompare';
import Glyph146 from 'fyicons/icons/IconGitCompareSimple';
import Glyph147 from 'fyicons/icons/IconGitFork';
import Glyph148 from 'fyicons/icons/IconGitMerge';
import Glyph149 from 'fyicons/icons/IconGitMergeSimple';
import Glyph150 from 'fyicons/icons/IconGitPullRequest';
import Glyph151 from 'fyicons/icons/IconGitPullRequestClosed';
import Glyph152 from 'fyicons/icons/IconGitPullRequestDraft';
import Glyph153 from 'fyicons/icons/IconGitPullRequestSimple';
import Glyph154 from 'fyicons/icons/IconGitWorktree';
import Glyph155 from 'fyicons/icons/IconGitWorktreeAlt';
import Glyph156 from 'fyicons/icons/IconGlobeComplex';
import Glyph157 from 'fyicons/icons/IconGlobeSimple';
import Glyph158 from 'fyicons/icons/IconGlobeStand';
import Glyph159 from 'fyicons/icons/IconHammer';
import Glyph160 from 'fyicons/icons/IconHand';
import Glyph161 from 'fyicons/icons/IconHandGrab';
import Glyph162 from 'fyicons/icons/IconHandGrabbing';
import Glyph163 from 'fyicons/icons/IconHandPointer';
import Glyph164 from 'fyicons/icons/IconHat';
import Glyph165 from 'fyicons/icons/IconHatSide';
import Glyph166 from 'fyicons/icons/IconHeart';
import Glyph167 from 'fyicons/icons/IconHeartFill';
import Glyph168 from 'fyicons/icons/IconHighlighter';
import Glyph169 from 'fyicons/icons/IconImageAlt';
import Glyph170 from 'fyicons/icons/IconInstitution';
import Glyph171 from 'fyicons/icons/IconKbdCapsLock';
import Glyph172 from 'fyicons/icons/IconKbdCommand';
import Glyph173 from 'fyicons/icons/IconKbdCtrl';
import Glyph174 from 'fyicons/icons/IconKbdDel';
import Glyph175 from 'fyicons/icons/IconKbdOpt';
import Glyph176 from 'fyicons/icons/IconKbdReturn';
import Glyph177 from 'fyicons/icons/IconKbdShift';
import Glyph178 from 'fyicons/icons/IconLanguage';
import Glyph179 from 'fyicons/icons/IconLaptop';
import Glyph180 from 'fyicons/icons/IconLaptopFill';
import Glyph181 from 'fyicons/icons/IconLaptopSimple';
import Glyph182 from 'fyicons/icons/IconLightbulbSimple';
import Glyph183 from 'fyicons/icons/IconLightbulbSimpleFill';
import Glyph184 from 'fyicons/icons/IconLink';
import Glyph185 from 'fyicons/icons/IconLoader';
import Glyph186 from 'fyicons/icons/IconMarkdownFill';
import Glyph187 from 'fyicons/icons/IconMemory';
import Glyph188 from 'fyicons/icons/IconMenu';
import Glyph189 from 'fyicons/icons/IconMenuAltSimple';
import Glyph190 from 'fyicons/icons/IconMeter';
import Glyph191 from 'fyicons/icons/IconMeterHigh';
import Glyph192 from 'fyicons/icons/IconMeterLow';
import Glyph193 from 'fyicons/icons/IconMicrochip';
import Glyph194 from 'fyicons/icons/IconMobile';
import Glyph195 from 'fyicons/icons/IconOffice';
import Glyph196 from 'fyicons/icons/IconPaintBrush';
import Glyph197 from 'fyicons/icons/IconPaperclipTilt';
import Glyph198 from 'fyicons/icons/IconPaperclipWideTilt';
import Glyph199 from 'fyicons/icons/IconParentheses';
import Glyph200 from 'fyicons/icons/IconPen';
import Glyph201 from 'fyicons/icons/IconPenTool';
import Glyph202 from 'fyicons/icons/IconPenToolAlt';
import Glyph203 from 'fyicons/icons/IconPencil';
import Glyph204 from 'fyicons/icons/IconPhone';
import Glyph205 from 'fyicons/icons/IconPhoneFill';
import Glyph206 from 'fyicons/icons/IconPin';
import Glyph207 from 'fyicons/icons/IconPinFill';
import Glyph208 from 'fyicons/icons/IconPlug';
import Glyph209 from 'fyicons/icons/IconPlugs';
import Glyph210 from 'fyicons/icons/IconPointer';
import Glyph211 from 'fyicons/icons/IconPointerFill';
import Glyph212 from 'fyicons/icons/IconPointerSm';
import Glyph213 from 'fyicons/icons/IconPointerSwarm';
import Glyph214 from 'fyicons/icons/IconPointers';
import Glyph215 from 'fyicons/icons/IconPoundSign';
import Glyph216 from 'fyicons/icons/IconPower';
import Glyph217 from 'fyicons/icons/IconProgressTask25';
import Glyph218 from 'fyicons/icons/IconProgressTask50';
import Glyph219 from 'fyicons/icons/IconProgressTask75';
import Glyph220 from 'fyicons/icons/IconProgressTaskDone';
import Glyph221 from 'fyicons/icons/IconProgressTaskTodo';
import Glyph222 from 'fyicons/icons/IconRoute';
import Glyph223 from 'fyicons/icons/IconRuler';
import Glyph224 from 'fyicons/icons/IconScroll';
import Glyph225 from 'fyicons/icons/IconSend';
import Glyph226 from 'fyicons/icons/IconSendAlt';
import Glyph227 from 'fyicons/icons/IconSendAltFill';
import Glyph228 from 'fyicons/icons/IconSendFill';
import Glyph229 from 'fyicons/icons/IconSendTilt';
import Glyph230 from 'fyicons/icons/IconSendTiltFill';
import Glyph231 from 'fyicons/icons/IconShop';
import Glyph232 from 'fyicons/icons/IconShoppingCart';
import Glyph233 from 'fyicons/icons/IconSignalFour';
import Glyph234 from 'fyicons/icons/IconSignalFour0';
import Glyph235 from 'fyicons/icons/IconSignalFour1';
import Glyph236 from 'fyicons/icons/IconSignalFour2';
import Glyph237 from 'fyicons/icons/IconSignalFour3';
import Glyph238 from 'fyicons/icons/IconSkull';
import Glyph239 from 'fyicons/icons/IconSkullFill';
import Glyph240 from 'fyicons/icons/IconSparkle';
import Glyph241 from 'fyicons/icons/IconSparkleFill';
import Glyph242 from 'fyicons/icons/IconSparkles';
import Glyph243 from 'fyicons/icons/IconSparklesFill';
import Glyph244 from 'fyicons/icons/IconSpinner';
import Glyph245 from 'fyicons/icons/IconStar';
import Glyph246 from 'fyicons/icons/IconStarFill';
import Glyph247 from 'fyicons/icons/IconSubtitles';
import Glyph248 from 'fyicons/icons/IconSubtitlesFill';
import Glyph249 from 'fyicons/icons/IconSuitcase';
import Glyph250 from 'fyicons/icons/IconTargetBullseye';
import Glyph251 from 'fyicons/icons/IconTelevision';
import Glyph252 from 'fyicons/icons/IconTelevisionAntenna';
import Glyph253 from 'fyicons/icons/IconTerminal';
import Glyph254 from 'fyicons/icons/IconTerminalBash';
import Glyph255 from 'fyicons/icons/IconTerminalRectangleFill';
import Glyph256 from 'fyicons/icons/IconTerminalRectangle';
import Glyph257 from 'fyicons/icons/IconTerminalRectangleFill';
import Glyph258 from 'fyicons/icons/IconThoughtBubble';
import Glyph259 from 'fyicons/icons/IconThumbsDown';
import Glyph260 from 'fyicons/icons/IconThumbsDownFill';
import Glyph261 from 'fyicons/icons/IconThumbsUp';
import Glyph262 from 'fyicons/icons/IconThumbsUpDown';
import Glyph263 from 'fyicons/icons/IconThumbsUpFill';
import Glyph264 from 'fyicons/icons/IconTicket';
import Glyph265 from 'fyicons/icons/IconTopHat';
import Glyph266 from 'fyicons/icons/IconTranslate';
import Glyph267 from 'fyicons/icons/IconTreasureChest';
import Glyph268 from 'fyicons/icons/IconTriangleRight';
import Glyph269 from 'fyicons/icons/IconTruck';
import Glyph270 from 'fyicons/icons/IconVariable';
import Glyph271 from 'fyicons/icons/IconVectorPath';
import Glyph272 from 'fyicons/icons/IconViewPointer';
import Glyph273 from 'fyicons/icons/IconVoltage';
import Glyph274 from 'fyicons/icons/IconWand';
import Glyph275 from 'fyicons/icons/IconWandStar';
import Glyph276 from 'fyicons/icons/IconWaveform';
import Glyph277 from 'fyicons/icons/IconWifi';
import Glyph278 from 'fyicons/icons/IconWifiFill';
import Glyph279 from 'fyicons/icons/IconWorkflow';
import Glyph280 from 'fyicons/icons/IconWorkflowDecision';
import Glyph281 from 'fyicons/icons/IconWorkflowMulti';
import Glyph282 from 'fyicons/icons/IconWrenchSide';
import Glyph283 from 'fyicons/icons/IconWrenchTilt';
import Glyph284 from 'fyicons/icons/IconZoomIn';
import Glyph285 from 'fyicons/icons/IconZoomOut';
const Icon = createIconLookup({
  agent: { Component: Glyph0, id: '154:11361' },
  'agent-clank': { Component: Glyph1, id: '477:612' },
  'agent-simple': { Component: Glyph2, id: '154:11377' },
  'agent-sub': { Component: Glyph3, id: '154:11363' },
  'airplane-diagonal': { Component: Glyph4, id: '154:11379' },
  ampersand: { Component: Glyph5, id: '617:12487' },
  appearance: { Component: Glyph6, id: '345:9723' },
  'apps-connected': { Component: Glyph7, id: '505:691' },
  archway: { Component: Glyph8, id: '378:8257' },
  'arrow-down': { Component: Glyph9, id: '518:4788' },
  'arrow-down-arrow-up': { Component: Glyph10, id: '620:506' },
  'arrow-left': { Component: Glyph11, id: '518:4811' },
  'arrow-right': { Component: Glyph12, id: '518:4810' },
  'arrow-up': { Component: Glyph13, id: '518:4787' },
  'arrow-up-right': { Component: Glyph14, id: '506:2877' },
  'arrow-x': { Component: Glyph15, id: '518:4795' },
  'arrow-y': { Component: Glyph16, id: '510:4786' },
  'arrows-collapse': { Component: Glyph17, id: '129:6740' },
  'arrows-expand': { Component: Glyph18, id: '129:6741' },
  'arrows-repost': { Component: Glyph19, id: '593:3691' },
  'arrows-rotate-lg': { Component: Glyph20, id: '59:9706' },
  'arrows-swap': { Component: Glyph21, id: '635:556' },
  asterisk: { Component: Glyph22, id: '378:8045' },
  'asterisk-simple': { Component: Glyph23, id: '378:8067' },
  'at-sign': { Component: Glyph24, id: '117:2152' },
  'audio-description': { Component: Glyph25, id: '372:6138' },
  'audio-description-fill': { Component: Glyph26, id: '380:9408' },
  backpack: { Component: Glyph27, id: '731:274' },
  bag: { Component: Glyph28, id: '140:5999' },
  ban: { Component: Glyph29, id: '224:14594' },
  'ban-fill': { Component: Glyph30, id: '1494:9372' },
  basket: { Component: Glyph31, id: '154:11390' },
  battery: { Component: Glyph32, id: '101:4287' },
  'battery-charging': { Component: Glyph33, id: '101:4288' },
  'battery-empty': { Component: Glyph34, id: '101:4289' },
  'battery-low': { Component: Glyph35, id: '101:4286' },
  'battery-medium': { Component: Glyph36, id: '101:4285' },
  bluetooth: { Component: Glyph37, id: '101:4282' },
  'box-taped': { Component: Glyph38, id: '500:2205' },
  braces: { Component: Glyph39, id: '652:1149' },
  brackets: { Component: Glyph40, id: '652:1160' },
  brain: { Component: Glyph41, id: '395:11019' },
  briefcase: { Component: Glyph42, id: '727:332' },
  'broadcast-live': { Component: Glyph43, id: '379:9063' },
  browser: { Component: Glyph44, id: '372:5522' },
  'browser-fill': { Component: Glyph45, id: '671:285' },
  'browser-landscape-simple': { Component: Glyph46, id: '506:4079' },
  'browser-pointer': { Component: Glyph47, id: '701:1751' },
  'browser-simple': { Component: Glyph48, id: '506:4097' },
  'browser-simple-fill': { Component: Glyph49, id: '1341:1748' },
  'browser-solid': { Component: Glyph50, id: '671:285' },
  brush: { Component: Glyph51, id: '140:5987' },
  bucket: { Component: Glyph52, id: '137:4742' },
  bug: { Component: Glyph53, id: '129:6747' },
  'bug-ant': { Component: Glyph54, id: '129:6746' },
  'bug-beetle': { Component: Glyph55, id: '327:4785' },
  bullhorn: { Component: Glyph56, id: '124:2568' },
  calculator: { Component: Glyph57, id: '325:4701' },
  car: { Component: Glyph58, id: '705:2147' },
  'caret-down': { Component: Glyph59, id: '140:5990' },
  'caret-left': { Component: Glyph60, id: '140:5991' },
  'caret-right': { Component: Glyph61, id: '140:5993' },
  'caret-up': { Component: Glyph62, id: '140:5994' },
  cash: { Component: Glyph63, id: '610:12482' },
  chat: { Component: Glyph64, id: '11:869' },
  'chat-closed-captions': { Component: Glyph65, id: '641:839' },
  'chat-code': { Component: Glyph66, id: '469:1869' },
  'chat-round': { Component: Glyph67, id: '245:15024' },
  'chat-round-code': { Component: Glyph68, id: '245:15197' },
  'chat-round-sparkles': { Component: Glyph69, id: '245:15196' },
  'chat-sparkles': { Component: Glyph70, id: '344:9626' },
  'chat-subtitles': { Component: Glyph71, id: '372:5588' },
  'chevron-down': { Component: Glyph72, id: '142:6350' },
  'chevron-left': { Component: Glyph73, id: '546:8620' },
  'chevron-right': { Component: Glyph74, id: '506:3912' },
  'chevron-up': { Component: Glyph75, id: '550:8794' },
  'chevrons-down-up': { Component: Glyph76, id: '693:340' },
  'chevrons-expand': { Component: Glyph77, id: '816:11019' },
  'chevrons-up-down': { Component: Glyph78, id: '392:10888' },
  'circle-access': { Component: Glyph79, id: '484:437' },
  'circle-access-fill': { Component: Glyph80, id: '487:1571' },
  'circle-dashed': { Component: Glyph81, id: '290:20132' },
  'circle-halftone': { Component: Glyph82, id: '506:1656' },
  'closed-captions': { Component: Glyph83, id: '372:5686' },
  'closed-captions-fill': { Component: Glyph84, id: '380:9409' },
  code: { Component: Glyph85, id: '58:9531' },
  'code-block': { Component: Glyph86, id: '498:526' },
  'code-rectangle': { Component: Glyph87, id: '158:11603' },
  'code-simple': { Component: Glyph88, id: '519:5095' },
  'code-square': { Component: Glyph89, id: '158:11600' },
  coin: { Component: Glyph90, id: '342:7953' },
  coins: { Component: Glyph91, id: '342:8001' },
  computer: { Component: Glyph92, id: '193:12982' },
  'contrast-high': { Component: Glyph93, id: '46:113' },
  'contrast-low': { Component: Glyph94, id: '500:2259' },
  'cowboy-hat': { Component: Glyph95, id: '360:10882' },
  'credit-card': { Component: Glyph96, id: '593:3623' },
  crown: { Component: Glyph97, id: '732:455' },
  'crown-fill': { Component: Glyph98, id: '732:484' },
  'crystal-ball': { Component: Glyph99, id: '705:2145' },
  cursor: { Component: Glyph100, id: '310:6303' },
  'cursor-fill': { Component: Glyph101, id: '578:3008' },
  'cursor-text': { Component: Glyph102, id: '475:427' },
  desktop: { Component: Glyph103, id: '59:9598' },
  'desktop-simple': { Component: Glyph104, id: '698:257' },
  drawing: { Component: Glyph105, id: '140:6027' },
  earth: { Component: Glyph106, id: '578:3202' },
  eject: { Component: Glyph107, id: '96:1649' },
  'eject-fill': { Component: Glyph108, id: '343:9339' },
  'emoji-angry': { Component: Glyph109, id: '224:14538' },
  'emoji-angry-fill': { Component: Glyph110, id: '1323:11768' },
  'emoji-diagonal': { Component: Glyph111, id: '360:11253' },
  'emoji-diagonal-fill': { Component: Glyph112, id: '1323:11770' },
  'emoji-frown': { Component: Glyph113, id: '356:9956' },
  'emoji-frown-fill': { Component: Glyph114, id: '1323:11769' },
  'emoji-grin': { Component: Glyph115, id: '356:10032' },
  'emoji-grin-fill': { Component: Glyph116, id: '1323:11771' },
  'emoji-happy': { Component: Glyph117, id: '224:14540' },
  'emoji-happy-fill': { Component: Glyph118, id: '1323:11767' },
  'emoji-melt': { Component: Glyph119, id: '360:11297' },
  'emoji-melt-fill': { Component: Glyph120, id: '1323:11766' },
  'emoji-neutral': { Component: Glyph121, id: '356:10109' },
  'emoji-neutral-fill': { Component: Glyph122, id: '1323:11764' },
  'emoji-scared': { Component: Glyph123, id: '224:14539' },
  'emoji-scared-fill': { Component: Glyph124, id: '1323:11763' },
  'emoji-smile': { Component: Glyph125, id: '356:10108' },
  'emoji-smile-fill': { Component: Glyph126, id: '1350:3009' },
  eraser: { Component: Glyph127, id: '672:482' },
  eye: { Component: Glyph128, id: '120:2551' },
  'eye-fill': { Component: Glyph129, id: '1010:19329' },
  eyedropper: { Component: Glyph130, id: '102:5438' },
  'file-skill': { Component: Glyph131, id: '679:539' },
  flashlight: { Component: Glyph132, id: '120:2548' },
  'folder-git': { Component: Glyph133, id: '749:5010' },
  fork: { Component: Glyph134, id: '124:2531' },
  'fork-horizontal': { Component: Glyph135, id: '535:8415' },
  'gauge-high': { Component: Glyph136, id: '375:6429' },
  'gauge-low': { Component: Glyph137, id: '375:6430' },
  'gauge-max': { Component: Glyph138, id: '821:11540' },
  'gauge-min': { Component: Glyph139, id: '821:11555' },
  'gauge-simple': { Component: Glyph140, id: '375:6428' },
  ghost: { Component: Glyph141, id: '727:314' },
  'git-branch': { Component: Glyph142, id: '245:15918' },
  'git-branch-simple': { Component: Glyph143, id: '743:1903' },
  'git-commit': { Component: Glyph144, id: '578:2492' },
  'git-compare': { Component: Glyph145, id: '375:6536' },
  'git-compare-simple': { Component: Glyph146, id: '749:5096' },
  'git-fork': { Component: Glyph147, id: '717:3843' },
  'git-merge': { Component: Glyph148, id: '245:15919' },
  'git-merge-simple': { Component: Glyph149, id: '743:1916' },
  'git-pull-request': { Component: Glyph150, id: '375:6478' },
  'git-pull-request-closed': { Component: Glyph151, id: '745:2104' },
  'git-pull-request-draft': { Component: Glyph152, id: '743:1987' },
  'git-pull-request-simple': { Component: Glyph153, id: '749:5082' },
  'git-worktree': { Component: Glyph154, id: '752:4421' },
  'git-worktree-alt': { Component: Glyph155, id: '752:4405' },
  'globe-complex': { Component: Glyph156, id: '767:383' },
  'globe-simple': { Component: Glyph157, id: '193:13372' },
  'globe-stand': { Component: Glyph158, id: '849:17808' },
  hammer: { Component: Glyph159, id: '233:14760' },
  hand: { Component: Glyph160, id: '183:12549' },
  'hand-grab': { Component: Glyph161, id: '395:11432' },
  'hand-grabbing': { Component: Glyph162, id: '746:2202' },
  'hand-pointer': { Component: Glyph163, id: '161:11786' },
  hat: { Component: Glyph164, id: '741:11462' },
  'hat-side': { Component: Glyph165, id: '741:11463' },
  heart: { Component: Glyph166, id: '378:8262' },
  'heart-fill': { Component: Glyph167, id: '485:557' },
  highlighter: { Component: Glyph168, id: '129:6693' },
  'image-alt': { Component: Glyph169, id: '857:24307' },
  institution: { Component: Glyph170, id: '498:814' },
  'kbd-caps-lock': { Component: Glyph171, id: '811:8883' },
  'kbd-command': { Component: Glyph172, id: '297:3591' },
  'kbd-ctrl': { Component: Glyph173, id: '505:475' },
  'kbd-del': { Component: Glyph174, id: '505:486' },
  'kbd-opt': { Component: Glyph175, id: '502:466' },
  'kbd-return': { Component: Glyph176, id: '505:502' },
  'kbd-shift': { Component: Glyph177, id: '811:8873' },
  language: { Component: Glyph178, id: '129:6692' },
  laptop: { Component: Glyph179, id: '59:9597' },
  'laptop-fill': { Component: Glyph180, id: '193:13034' },
  'laptop-simple': { Component: Glyph181, id: '845:14081' },
  'lightbulb-simple': { Component: Glyph182, id: '610:10719' },
  'lightbulb-simple-fill': { Component: Glyph183, id: '849:17265' },
  link: { Component: Glyph184, id: '58:9555' },
  loader: { Component: Glyph185, id: '620:416' },
  'markdown-fill': { Component: Glyph186, id: '666:353' },
  memory: { Component: Glyph187, id: '11:876' },
  menu: { Component: Glyph188, id: '578:3059' },
  'menu-alt-simple': { Component: Glyph189, id: '604:5010' },
  meter: { Component: Glyph190, id: '375:6233' },
  'meter-high': { Component: Glyph191, id: '340:7861' },
  'meter-low': { Component: Glyph192, id: '375:6359' },
  microchip: { Component: Glyph193, id: '505:1948' },
  mobile: { Component: Glyph194, id: '378:8193' },
  office: { Component: Glyph195, id: '498:775' },
  'paint-brush': { Component: Glyph196, id: '154:11518' },
  'paperclip-tilt': { Component: Glyph197, id: '315:17581' },
  'paperclip-wide-tilt': { Component: Glyph198, id: '315:17553' },
  parentheses: { Component: Glyph199, id: '652:1173' },
  pen: { Component: Glyph200, id: '11:868' },
  'pen-tool': { Component: Glyph201, id: '58:9553' },
  'pen-tool-alt': { Component: Glyph202, id: '314:17522' },
  pencil: { Component: Glyph203, id: '132:2419' },
  phone: { Component: Glyph204, id: '596:4380' },
  'phone-fill': { Component: Glyph205, id: '596:4389' },
  pin: { Component: Glyph206, id: '171:11869' },
  'pin-fill': { Component: Glyph207, id: '811:9143' },
  plug: { Component: Glyph208, id: '224:14651' },
  plugs: { Component: Glyph209, id: '472:650' },
  pointer: { Component: Glyph210, id: '140:6033' },
  'pointer-fill': { Component: Glyph211, id: '498:2179' },
  'pointer-sm': { Component: Glyph212, id: '667:738' },
  'pointer-swarm': { Component: Glyph213, id: '578:3170' },
  pointers: { Component: Glyph214, id: '697:229' },
  'pound-sign': { Component: Glyph215, id: '599:4449' },
  power: { Component: Glyph216, id: '376:6583' },
  'progress-task-25': { Component: Glyph217, id: '506:2044' },
  'progress-task-50': { Component: Glyph218, id: '506:2045' },
  'progress-task-75': { Component: Glyph219, id: '506:2046' },
  'progress-task-done': { Component: Glyph220, id: '734:5990' },
  'progress-task-todo': { Component: Glyph221, id: '506:2043' },
  route: { Component: Glyph222, id: '520:7814' },
  ruler: { Component: Glyph223, id: '60:2291' },
  scroll: { Component: Glyph224, id: '738:7321' },
  send: { Component: Glyph225, id: '600:4613' },
  'send-alt': { Component: Glyph226, id: '282:15956' },
  'send-alt-fill': { Component: Glyph227, id: '469:2061' },
  'send-fill': { Component: Glyph228, id: '679:4229' },
  'send-tilt': { Component: Glyph229, id: '282:16070' },
  'send-tilt-fill': { Component: Glyph230, id: '469:2073' },
  shop: { Component: Glyph231, id: '60:2333' },
  'shopping-cart': { Component: Glyph232, id: '327:4826' },
  'signal-four': { Component: Glyph233, id: '127:2711' },
  'signal-four-0': { Component: Glyph234, id: '127:2714' },
  'signal-four-1': { Component: Glyph235, id: '127:2712' },
  'signal-four-2': { Component: Glyph236, id: '127:2713' },
  'signal-four-3': { Component: Glyph237, id: '127:2710' },
  skull: { Component: Glyph238, id: '727:401' },
  'skull-fill': { Component: Glyph239, id: '1350:2860' },
  sparkle: { Component: Glyph240, id: '732:5505' },
  'sparkle-fill': { Component: Glyph241, id: '856:18075' },
  sparkles: { Component: Glyph242, id: '11:883' },
  'sparkles-fill': { Component: Glyph243, id: '856:18071' },
  spinner: { Component: Glyph244, id: '535:8440' },
  star: { Component: Glyph245, id: '127:4125' },
  'star-fill': { Component: Glyph246, id: '652:850' },
  subtitles: { Component: Glyph247, id: '378:9037' },
  'subtitles-fill': { Component: Glyph248, id: '739:7571' },
  suitcase: { Component: Glyph249, id: '726:598' },
  'target-bullseye': { Component: Glyph250, id: '342:7916' },
  television: { Component: Glyph251, id: '472:526' },
  'television-antenna': { Component: Glyph252, id: '698:274' },
  terminal: { Component: Glyph253, id: '749:5013' },
  'terminal-bash': { Component: Glyph254, id: '749:5069' },
  'terminal-fill': { Component: Glyph255, id: '604:5222' },
  'terminal-rectangle': { Component: Glyph256, id: '100:2286' },
  'terminal-rectangle-fill': { Component: Glyph257, id: '604:5222' },
  'thought-bubble': { Component: Glyph258, id: '282:17058' },
  'thumbs-down': { Component: Glyph259, id: '364:5299' },
  'thumbs-down-fill': { Component: Glyph260, id: '520:5603' },
  'thumbs-up': { Component: Glyph261, id: '171:11842' },
  'thumbs-up-down': { Component: Glyph262, id: '364:5388' },
  'thumbs-up-fill': { Component: Glyph263, id: '520:5594' },
  ticket: { Component: Glyph264, id: '101:4355' },
  'top-hat': { Component: Glyph265, id: '593:3645' },
  translate: { Component: Glyph266, id: '849:16217' },
  'treasure-chest': { Component: Glyph267, id: '727:283' },
  'triangle-right': { Component: Glyph268, id: '519:5163' },
  truck: { Component: Glyph269, id: '698:1533' },
  variable: { Component: Glyph270, id: '193:13796' },
  'vector-path': { Component: Glyph271, id: '679:515' },
  'view-pointer': { Component: Glyph272, id: '717:4183' },
  voltage: { Component: Glyph273, id: '498:837' },
  wand: { Component: Glyph274, id: '798:535' },
  'wand-star': { Component: Glyph275, id: '814:10849' },
  waveform: { Component: Glyph276, id: '372:5489' },
  wifi: { Component: Glyph277, id: '498:490' },
  'wifi-fill': { Component: Glyph278, id: '498:491' },
  workflow: { Component: Glyph279, id: '310:6412' },
  'workflow-decision': { Component: Glyph280, id: '310:6367' },
  'workflow-multi': { Component: Glyph281, id: '101:2292' },
  'wrench-side': { Component: Glyph282, id: '59:9729' },
  'wrench-tilt': { Component: Glyph283, id: '313:17439' },
  'zoom-in': { Component: Glyph284, id: '716:3726' },
  'zoom-out': { Component: Glyph285, id: '716:3727' },
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
                <figcaption className="px-3 text-lg leading-snug font-medium text-muted">
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
