---
'fyicons': minor
---

Add 41 icons: `IconAgentSubSimple`, `IconAppsLg`, `IconBrainSide`, `IconChatEllipsis`, `IconChatRoundEllipsis`, `IconCircleDashedUser`, `IconDiamondFill`, `IconDiamond`, `IconDotsDiamond`, `IconDotsTriangleFill`, `IconDotsTriangle`, `IconEarSlash`, `IconEar`, `IconEmojiBeam`, `IconExtensionsLg`, `IconExtensions`, `IconFireFlame`, `IconFolderSparkles`, `IconFolderZip`, `IconGasFill`, `IconImageSolid`, `IconInfinitySign`, `IconJournalOpen`, `IconJournal`, `IconMailbox`, `IconMarkdownSimple`, `IconMath`, `IconMouseCupertino`, `IconMouseModern`, `IconMouse`, `IconMusicNote`, `IconNotification`, `IconPaperclipSimple`, `IconParagraphThumbnail1`, `IconPercent`, `IconShapesPlus`, `IconSquarePercent`, `IconStars`, `IconThermometer`, `IconWatchSmart`, `IconWatch`.

Refresh existing artwork. The collection now contains 1,169 icons.

This release changes exported names and shadcn registry names. Update imports and install commands using this table:

| Previous export             | New export                    | New registry name            |
| --------------------------- | ----------------------------- | ---------------------------- |
| `IconAgentSubagent`         | `IconAgentSub`                | `agent-sub`                  |
| `IconArrowClockwise`        | `IconArrowClockwiseLg`        | `arrow-clockwise-lg`         |
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
| `IconLibrary2`              | `IconLibrarySimple`           | `library-simple`             |
| `IconLibrarySimple`         | `IconLibraryLines`            | `library-lines`              |
| `IconLinkNewTab`            | `IconLinkNewWindow`           | `link-new-window`            |
| `IconPuzzle`                | `IconPuzzlePiece`             | `puzzle-piece`               |
| `IconText`                  | `IconTextTitle`               | `text-title`                 |
| `IconTextFill`              | `IconTextTitleFill`           | `text-title-fill`            |
| `IconTextThumbnail`         | `IconParagraphThumbnail`      | `paragraph-thumbnail`        |
| `IconXmark`                 | `IconX`                       | `x`                          |
| `IconXmarkLg`               | `IconXLg`                     | `x-lg`                       |
| `IconXmarkSm`               | `IconXSm`                     | `x-sm`                       |

Apply this mapping to the original imports once, without chaining replacements. These names now refer to different artwork: `IconArrowClockwise`, `IconArrowCounterClockwise`, `IconDotsDiamond`, `IconEmojiBeam`, `IconEmojiGrin`, `IconLibrarySimple`. Use the table to retain the previous artwork.

Remove these imports and registry installs. The icons are no longer included:

- `IconTextureRefraction` / `texture-refraction`.
- `IconDownloadWide` / `download-wide`.
- `IconUploadWide` / `upload-wide`.
- `IconCalendarSmall` / `calendar-small`.
- `IconDPad` / `d-pad`.

Historical lookup aliases remain where they do not conflict with current names. React exports and registry installs use the new names.
