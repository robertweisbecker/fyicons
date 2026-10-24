---
'fyicons': minor
---

Add 12 icons: `IconCircleDashedUser`, `IconImageSolid`, `IconMath`, `IconAppsLg`, `IconShapesPlus`, `IconMarkdownSimple`, `IconParagraphThumbnail`, `IconDotsDiamond`, `IconDotsTriangle`, `IconChatEllipsis`, `IconChatRoundEllipsis`, `IconAgentSubSimple`.

Update 94 SVG sources, including visual refinements to 91 existing icons. The collection now contains 1,143 icons.

This release changes exported names and shadcn registry names. Update imports and install commands using this table:

| Previous export             | New export                    | New registry name            |
| --------------------------- | ----------------------------- | ---------------------------- |
| `IconAgentSubagent`         | `IconAgentSub`                | `agent-sub`                  |
| `IconArrowClockwise`        | `IconArrowClockwiseLg`        | `arrow-clockwise-lg`         |
| `IconArrowCornerResize`     | `IconArrowCornerExpand`       | `arrow-corner-expand`        |
| `IconArrowCounterClockwise` | `IconArrowCounterClockwiseLg` | `arrow-counter-clockwise-lg` |
| `IconArrowRedo`             | `IconArrowClockwise`          | `arrow-clockwise`            |
| `IconArrowUndo`             | `IconArrowCounterClockwise`   | `arrow-counter-clockwise`    |
| `IconBezier`                | `IconVectorBezier`            | `vector-bezier`              |
| `IconBroadcastTower`        | `IconBroadcastAntenna`        | `broadcast-antenna`          |
| `IconDotsDiamond`           | `IconDotsDiamondFill`         | `dots-diamond-fill`          |
| `IconLinkNewTab`            | `IconLinkNewWindow`           | `link-new-window`            |
| `IconText`                  | `IconTextTitle`               | `text-title`                 |
| `IconTextFill`              | `IconTextTitleFill`           | `text-title-fill`            |
| `IconTextThumbnail`         | `IconParagraphThumbnailStart` | `paragraph-thumbnail-start`  |

`IconArrowClockwise` and `IconArrowCounterClockwise` now refer to the former redo and undo icons. Use their `Lg` versions to keep the previous artwork. `IconDotsDiamond` is now the outline icon; use `IconDotsDiamondFill` to keep the previous filled artwork. Apply the table to your original imports once, without chaining replacements.

Remove `IconDownloadWide` and `IconUploadWide` imports and their `download-wide` and `upload-wide` registry installs. These icons are no longer included.

Historical lookup aliases remain where they do not conflict with current names. React exports and registry installs use the new names.
