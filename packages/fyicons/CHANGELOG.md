# fyicons

## 0.2.0

### Minor Changes

- b275c67: Add 58 icons: `IconAgentSubSimple`, `IconAppNotification`, `IconAppsLg`, `IconArchiveFolder`, `IconArrowUpArrowDown`, `IconBellFill`, `IconBookRepository`, `IconBrainSide`, `IconBroom`, `IconBroomSweep`, `IconChatEllipsis`, `IconChatRoundEllipsis`, `IconCircleDashedUser`, `IconDiamond`, `IconDiamondFill`, `IconDotsDiamond`, `IconDotsTriangle`, `IconDotsTriangleFill`, `IconEar`, `IconEarSlash`, `IconEmojiAddSimple`, `IconEmojiBeam`, `IconExtensions`, `IconExtensionsLg`, `IconFireAlt`, `IconFolderSparkles`, `IconFolderStar`, `IconFolderZip`, `IconGasFill`, `IconGridGalleryFill`, `IconHeadset`, `IconImageSolid`, `IconInfinitySign`, `IconIntelligenceCupertino`, `IconJournal`, `IconJournalOpen`, `IconLightbulbFill`, `IconMailbox`, `IconMarkdownSimple`, `IconMath`, `IconMouse`, `IconMouseCupertino`, `IconMouseModern`, `IconMusicNote`, `IconPaperclipSimple`, `IconParagraphThumbnailInline`, `IconPercent`, `IconShapesPlus`, `IconSquarePercent`, `IconStars`, `IconThermometer`, `IconVectorSvg`, `IconVolumeMedium`, `IconVolumeMediumFill`, `IconVolumeX`, `IconVolumeXFill`, `IconWatch`, `IconWatchSmart`.

  Refresh existing artwork and standardize icon metadata. The collection now contains 1,182 icons.

  This release changes exported names and shadcn registry names. Update imports and install commands using this table:

  | Previous export             | New export                    | New registry name            |
  | --------------------------- | ----------------------------- | ---------------------------- |
  | `IconAgentSubagent`         | `IconAgentSub`                | `agent-sub`                  |
  | `IconAlert`                 | `IconError`                   | `error`                      |
  | `IconAlertFill`             | `IconErrorFill`               | `error-fill`                 |
  | `IconArrowClockwise`        | `IconArrowClockwiseLg`        | `arrow-clockwise-lg`         |
  | `IconArrowCounterClockwise` | `IconArrowCounterClockwiseLg` | `arrow-counter-clockwise-lg` |
  | `IconArrowRedo`             | `IconArrowClockwise`          | `arrow-clockwise`            |
  | `IconArrowUndo`             | `IconArrowCounterClockwise`   | `arrow-counter-clockwise`    |
  | `IconArrowUpArrowDown`      | `IconArrowDownArrowUp`        | `arrow-down-arrow-up`        |
  | `IconBezier`                | `IconVectorBezier`            | `vector-bezier`              |
  | `IconBookOpenStraight`      | `IconBookOpenAlt`             | `book-open-alt`              |
  | `IconBookSimple`            | `IconBookFlat`                | `book-flat`                  |
  | `IconBoxStorage`            | `IconBoxFace`                 | `box-face`                   |
  | `IconBroadcastTower`        | `IconBroadcastAntenna`        | `broadcast-antenna`          |
  | `IconBrowserFill`           | `IconBrowserSolid`            | `browser-solid`              |
  | `IconCircleAlert`           | `IconAlert`                   | `alert`                      |
  | `IconCircleAlertFill`       | `IconAlertFill`               | `alert-fill`                 |
  | `IconDotsDiamond`           | `IconDotsDiamondFill`         | `dots-diamond-fill`          |
  | `IconEmojiBeam`             | `IconEmojiGrin`               | `emoji-grin`                 |
  | `IconEmojiGrin`             | `IconEmojiHappy`              | `emoji-happy`                |
  | `IconExternalLink`          | `IconArrowExternal`           | `arrow-external`             |
  | `IconExternalLinkLg`        | `IconArrowExternalLg`         | `arrow-external-lg`          |
  | `IconFileDownload`          | `IconFileDown`                | `file-down`                  |
  | `IconFileNew`               | `IconFileAdd`                 | `file-add`                   |
  | `IconFileSpreadsheet`       | `IconFileTable`               | `file-table`                 |
  | `IconFolderApprove`         | `IconFolderCheck`             | `folder-check`               |
  | `IconFolderCheck`           | `IconFolderCheckmark`         | `folder-checkmark`           |
  | `IconLayoutPanelEnd`        | `IconLayoutSidebarEnd`        | `layout-sidebar-end`         |
  | `IconLayoutPanelStart`      | `IconLayoutSidebarStart`      | `layout-sidebar-start`       |
  | `IconLibrary2`              | `IconLibrarySimple`           | `library-simple`             |
  | `IconLibrarySimple`         | `IconLibraryLines`            | `library-lines`              |
  | `IconLinkNewTab`            | `IconLinkNewWindow`           | `link-new-window`            |
  | `IconPuzzle`                | `IconPuzzlePiece`             | `puzzle-piece`               |
  | `IconStickyNote2`           | `IconStickyNoteAlt`           | `sticky-note-alt`            |
  | `IconText`                  | `IconTextTitle`               | `text-title`                 |
  | `IconTextFill`              | `IconTextTitleFill`           | `text-title-fill`            |
  | `IconTextThumbnail`         | `IconParagraphThumbnail`      | `paragraph-thumbnail`        |
  | `IconUserAlt`               | `IconUserPerson`              | `user-person`                |
  | `IconUserAltFill`           | `IconUserPersonFill`          | `user-person-fill`           |
  | `IconUserGroup`             | `IconUsersTwo`                | `users-two`                  |
  | `IconUserGroupFill`         | `IconUsersTwoFill`            | `users-two-fill`             |
  | `IconUserSilhouette`        | `IconPerson`                  | `person`                     |
  | `IconUserSilhouetteFill`    | `IconPersonFill`              | `person-fill`                |
  | `IconUserTeam`              | `IconUsersThree`              | `users-three`                |
  | `IconUserTeamFill`          | `IconUsersThreeFill`          | `users-three-fill`           |
  | `IconXmark`                 | `IconX`                       | `x`                          |
  | `IconXmarkLg`               | `IconXLg`                     | `x-lg`                       |
  | `IconXmarkSm`               | `IconXSm`                     | `x-sm`                       |

  Apply this mapping to the original imports once, without chaining replacements. These names now refer to different artwork: `IconAlert`, `IconAlertFill`, `IconArrowClockwise`, `IconArrowCounterClockwise`, `IconArrowDownArrowUp`, `IconArrowUpArrowDown`, `IconDotsDiamond`, `IconEmojiBeam`, `IconEmojiGrin`, `IconFolderCheck`, `IconLibrarySimple`. Use the table to retain the previous artwork.

  These original icons are no longer included:

  - The original artwork for `IconArrowDownArrowUp` / `arrow-down-arrow-up` was removed. That name now refers to different artwork; review its use.
  - Remove `IconCalendarSmall` imports and `calendar-small` registry installs.
  - Remove `IconDPad` imports and `d-pad` registry installs.
  - Remove `IconDownloadWide` imports and `download-wide` registry installs.
  - Remove `IconFontNumeric` imports and `font-numeric` registry installs.
  - Remove `IconFontNumericTilt` imports and `font-numeric-tilt` registry installs.
  - Remove `IconSearchLg` imports and `search-lg` registry installs. Use `IconSearch` / `search` for a magnifying glass.
  - Remove `IconTextureRefraction` imports and `texture-refraction` registry installs.
  - Remove `IconUploadWide` imports and `upload-wide` registry installs.

  Historical lookup aliases remain where they do not conflict with current names. React exports and registry installs use the new names.

- Standardize icon manifest metadata.

  For metadata integrations, use `source.id` as the collection identifier. `source.fileKey`, `sourceUrl`, and export-specific fields are no longer included.

- f3883d8: Add `fy-icon` and `fy-{icon-name}` classes to every React icon, before any user-supplied `className`. The icon name matches the catalog, including variant suffixes. These classes are also included in components installed through shadcn.

  Icons without a non-empty `aria-label` now default to `aria-hidden="true"`. A non-empty label is passed to the SVG and defaults to `role="img"`. Empty or whitespace-only labels remain decorative. Explicit `role` and `aria-hidden` props still override these defaults.

  **Breaking change:** `title` and `aria-labelledby` no longer make an icon accessible automatically. Replace `<IconSun title="Light mode" />` with `<IconSun aria-label="Light mode" />` when the icon conveys information. You can keep `title` to render an SVG title. To use an external label, set `aria-labelledby`, `role="img"`, and `aria-hidden={false}` together.

### Patch Changes

- 6ab656c: Reduce SVG and React bundle sizes with three-decimal path optimization. Remove inner seams from supported fill-and-stroke exports.

## 0.1.0

### Minor Changes

- Add the first release of FYIcons.

  - Include 1,133 icons from the current Figma collection.
  - Add React components with TypeScript declarations and direct imports.
  - Add source SVG files and icon metadata.
  - Add the MIT license.

  Icon names and React exports can change before version 1.0.
