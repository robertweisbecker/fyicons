---
'fyicons': minor
---

Add 33 icons: `IconAgentSubSimple`, `IconAppsLg`, `IconBrainSide`, `IconChatEllipsis`, `IconChatRoundEllipsis`, `IconCircleDashedUser`, `IconDiamond`, `IconDiamondFill`, `IconDotsDiamond`, `IconDotsTriangle`, `IconDotsTriangleFill`, `IconEar`, `IconEmojiBeam`, `IconExtensions`, `IconExtensionsLg`, `IconGasFill`, `IconImageSolid`, `IconInfinitySign`, `IconMailbox`, `IconMarkdownSimple`, `IconMath`, `IconMouse`, `IconMouseCupertino`, `IconMouseModern`, `IconMusicNote`, `IconNotification`, `IconPaperclipSimple`, `IconParagraphThumbnail1`, `IconShapesPlus`, `IconSquarePercent`, `IconStars`, `IconWatch`, `IconWatchSmart`.

Update 199 SVG sources, including visual refinements to 192 existing icons. The collection now contains 1,161 icons.

This release changes exported names and shadcn registry names. Update imports and install commands using this table:

| Previous export             | New export                    | New registry name            |
| --------------------------- | ----------------------------- | ---------------------------- |
| `IconAgentSubagent`         | `IconAgentSub`                | `agent-sub`                  |
| `IconArrowClockwise`        | `IconArrowClockwiseLg`        | `arrow-clockwise-lg`         |
| `IconArrowCornerResize`     | `IconArrowCornerExpand`       | `arrow-corner-expand`        |
| `IconArrowCounterClockwise` | `IconArrowCounterClockwiseLg` | `arrow-counter-clockwise-lg` |
| `IconArrowRedo`             | `IconArrowClockwise`          | `arrow-clockwise`            |
| `IconArrowUndo`             | `IconArrowCounterClockwise`   | `arrow-counter-clockwise`    |
| `IconArrowUpArrowDown`      | `IconSortArrows`              | `sort-arrows`                |
| `IconBezier`                | `IconVectorBezier`            | `vector-bezier`              |
| `IconBroadcastTower`        | `IconBroadcastAntenna`        | `broadcast-antenna`          |
| `IconDotsDiamond`           | `IconDotsDiamondFill`         | `dots-diamond-fill`          |
| `IconEmojiBeam`             | `IconEmojiGrin`               | `emoji-grin`                 |
| `IconEmojiGrin`             | `IconEmojiHappy`              | `emoji-happy`                |
| `IconExternalLink`          | `IconArrowExternal`           | `arrow-external`             |
| `IconExternalLinkLg`        | `IconArrowExternalLg`         | `arrow-external-lg`          |
| `IconFileDownload`          | `IconFileDown`                | `file-down`                  |
| `IconLinkNewTab`            | `IconLinkNewWindow`           | `link-new-window`            |
| `IconPuzzle`                | `IconPuzzlePiece`             | `puzzle-piece`               |
| `IconText`                  | `IconTextTitle`               | `text-title`                 |
| `IconTextFill`              | `IconTextTitleFill`           | `text-title-fill`            |
| `IconTextThumbnail`         | `IconParagraphThumbnail`      | `paragraph-thumbnail`        |
| `IconXmark`                 | `IconX`                       | `x`                          |
| `IconXmarkLg`               | `IconXLg`                     | `x-lg`                       |
| `IconXmarkSm`               | `IconXSm`                     | `x-sm`                       |

`IconArrowClockwise` and `IconArrowCounterClockwise` now refer to the former redo and undo icons. Use their `Lg` versions to keep the previous artwork. `IconDotsDiamond` is now the outline icon; use `IconDotsDiamondFill` to keep the previous filled artwork.

`IconEmojiGrin` now refers to the former `IconEmojiBeam` artwork, while `IconEmojiBeam` is a new icon. Use `IconEmojiHappy` to keep the previous `IconEmojiGrin` artwork. Apply the table to your original imports once, without chaining replacements.

Remove these imports and registry installs. The icons are no longer included:

- `IconCalendarSmall` / `calendar-small`.
- `IconDPad` / `d-pad`.
- `IconDownloadWide` / `download-wide`.
- `IconTextureRefraction` / `texture-refraction`.
- `IconUploadWide` / `upload-wide`.

Historical lookup aliases remain where they do not conflict with current names. React exports and registry installs use the new names.
