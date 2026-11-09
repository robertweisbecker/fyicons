# fyicons

## 0.3.2

### Patch Changes

- f9c3c1c: - Update artwork for 52 icons, including the comment, appearance, chart, flashlight, home, video, and luggage icons. `IconChartLine` now shows the lines without axes.
  - Adjust SVG paths or subtle rendering for 12 more icons. These changes include small rounding and path optimization differences.

## 0.3.1

### Patch Changes

- 1bc756e: Fix a spur at the inner join of `IconAtom` and a hairline seam in `IconAppearanceSimple` and `IconAppearanceSimpleReverse`. The fixes apply to React icons and SVG downloads.

## 0.3.0

### Minor Changes

- def3cb7: Sync the icon collection with the current design source.

  - Add 105 icons.
  - Remove `IconFontCapital`, `IconWrap`; these components are no longer in the source inventory.
  - Update SVG artwork for 419 existing icons; 413 have rendered pixel changes.
  - Rename 80 React exports. Previous names remain website lookup aliases, not React exports.

  Breaking changes and migration:

  Apply each replacement to the original `0.2.1` import names in one pass. Do not run sequential global replacements: some destination names are also old names that move elsewhere. For example, old `IconCheckThick` becomes `IconCheckThickSm`, while old `IconCheckThickSm` becomes `IconCheckThickXs`. Old `IconGaugeHigh` becomes `IconMeterHigh`, while old `IconGaugeSimpleHigh` becomes `IconGaugeHigh`. Preserve any local import aliases when you update the imported symbol.

  Review uses of these ten names even if TypeScript still accepts them: `IconCookie`, `IconCookieFill`, `IconMenuSimple`, `IconCheckThickSm`, `IconCheckThick`, `IconGaugeHigh`, `IconGaugeLow`, `IconFlower`, `IconCalendarFill`, and `IconFlagPennant`. They now select different source icons. Use the replacements below to retain the original source identity. The corresponding SVG filenames, CSS classes, and shadcn registry item names also follow the new icon names. Historical website search aliases do not restore old React exports, and current canonical names take precedence over aliases.

  - Replace `IconFlagPennant` imports with `IconFlagBanner`.
  - Replace `IconCookie` imports with `IconCookieBite`.
  - Replace `IconSwatch` imports with `IconSwatches`.
  - Replace `IconCookieFill` imports with `IconCookieBiteFill`.
  - Replace `IconHourglassSimple` imports with `IconHourglassEmpty`.
  - Replace `IconLayoutTabs` imports with `IconTabs`.
  - Replace `IconCircleDashedUser` imports with `IconCircleUserDashed`.
  - Replace `IconTexture` imports with `IconBackgroundInner`.
  - Replace `IconExtensionsLg` imports with `IconExtensionsAlt`.
  - Replace `IconMouseModern` imports with `IconMouseWheel`.
  - Replace `IconInfinitySign` imports with `IconInfinity`.
  - Remove `IconFontCapital` imports. This icon is no longer available.
  - The `IconCookie` name now refers to a different source icon. Review its use in your application.
  - The `IconCookieFill` name now refers to a different source icon. Review its use in your application.
  - Replace `IconPencilEdit` imports with `IconEdit`.
  - The `IconCalendarFill` name now refers to a different source icon. Review its use in your application.
  - The `IconCheckThick` name now refers to a different source icon. Review its use in your application.
  - Replace `IconPaintBucket` imports with `IconBucket`.
  - The `IconMenuSimple` name now refers to a different source icon. Review its use in your application.
  - The `IconFlower` name now refers to a different source icon. Review its use in your application.
  - Replace `IconCheckThickSm` imports with `IconCheckThickXs`.
  - Replace `IconSendStraight` imports with `IconSendAlt`.
  - Replace `IconBlockquote` imports with `IconQuoteBlock`.
  - Replace `IconKbdCommandSquare` imports with `IconSquareCommand`.
  - Replace `IconPlugAtSign` imports with `IconAtSignPlug`.
  - Replace `IconCompassAlt` imports with `IconCompassSimple`.
  - Replace `IconGaugeHigh` imports with `IconMeterHigh`.
  - Replace `IconGauge` imports with `IconMeter`.
  - Replace `IconGaugeLow` imports with `IconMeterLow`.
  - Replace `IconGaugeSimpleHigh` imports with `IconGaugeHigh`.
  - The `IconGaugeHigh` name now refers to a different source icon. Review its use in your application.
  - Replace `IconGaugeSimpleLow` imports with `IconGaugeLow`.
  - The `IconGaugeLow` name now refers to a different source icon. Review its use in your application.
  - Replace `IconTextQuotes` imports with `IconParagraphQuotes`.
  - Replace `IconTextBlockquote` imports with `IconParagraphBlockquote`.
  - Replace `IconSendStraightFill` imports with `IconSendAltFill`.
  - Replace `IconPlugPlug` imports with `IconPlugs`.
  - Replace `IconCircleProgressTodo` imports with `IconProgressTaskTodo`.
  - Replace `IconCircleProgressQuarter` imports with `IconProgressTask25`.
  - Replace `IconCircleProgressHalf` imports with `IconProgressTask50`.
  - Replace `IconCircleProgressThreeQuarters` imports with `IconProgressTask75`.
  - Replace `IconPencilEditFill` imports with `IconEditSolid`.
  - Replace `IconGridHeader` imports with `IconGridMixedTop`.
  - Replace `IconGridFooter` imports with `IconGridMixedBottom`.
  - Replace `IconGridSidebarEnd` imports with `IconGridMixedRight`.
  - Replace `IconGridSidebarStart` imports with `IconGridMixedLeft`.
  - Replace `IconMenuSimple` imports with `IconMenuAltSimple`.
  - Replace `IconClick` imports with `IconCursorRays`.
  - Replace `IconTextHtml` imports with `IconTextMarkup`.
  - Replace `IconParagraphProse` imports with `IconParagraphWords`.
  - Replace `IconClockFillAlt` imports with `IconClockSolid`.
  - Replace `IconWindowPointer` imports with `IconViewPointer`.
  - Replace `IconArrowWrap` imports with `IconLineWrap`.
  - Replace `IconGear` imports with `IconCogWheel`.
  - Replace `IconArticle` imports with `IconPageThumbnail`.
  - Replace `IconSwitchesIos` imports with `IconSwitchesCupertino`.
  - Replace `IconGitModified` imports with `IconLetterM`.
  - Replace `IconPointerRulers` imports with `IconRulersPointer`.
  - Replace `IconCircleProgressFull` imports with `IconProgressTaskDone`.
  - Replace `IconFolderView` imports with `IconFolderTree`.
  - Replace `IconFolderViewFill` imports with `IconFolderTreeFill`.
  - Replace `IconTextBox` imports with `IconBoundingBoxText`.
  - Replace `IconGridRowBottom` imports with `IconGridPositionBottom`.
  - Replace `IconGridRowTop` imports with `IconGridPositionTop`.
  - Replace `IconGridColumnEnd` imports with `IconGridPositionRight`.
  - Replace `IconGridColumnStart` imports with `IconGridPositionLeft`.
  - Replace `IconGitAdded` imports with `IconLetterA`.
  - Replace `IconGitRemoved` imports with `IconLetterR`.
  - Replace `IconFlagBurgee` imports with `IconFlagPennant`.
  - The `IconFlagPennant` name now refers to a different source icon. Review its use in your application.
  - Replace `IconGaugeSimpleMax` imports with `IconGaugeMax`.
  - Replace `IconGaugeSimpleMin` imports with `IconGaugeMin`.
  - Replace `IconLayoutTemplate` imports with `IconLayoutDashed`.
  - Replace `IconLayoutSidebarEnd` imports with `IconLayoutColumnRight`.
  - Replace `IconLayoutSidebarStart` imports with `IconLayoutColumnLeft`.
  - Replace `IconLayoutFooter` imports with `IconLayoutRowBottom`.
  - Replace `IconLayoutHeader` imports with `IconLayoutRowTop`.
  - Replace `IconTextBoxHeading` imports with `IconBoundingBoxHeading`.
  - Replace `IconPlugPlugged` imports with `IconPlugsPlugged`.
  - Replace `IconPlugUnplug` imports with `IconPlugsUnplug`.
  - Replace `IconChartBarSimple` imports with `IconChartBarAxes`.
  - Replace `IconFlower` imports with `IconFlowerSpiral`.
  - Remove `IconWrap` imports. This icon is no longer available.
  - Replace `IconOverflow` imports with `IconLineOverflow`.
  - Replace `IconCalendarFill` imports with `IconCalendarSolid`.
  - Replace `IconCheckThick` imports with `IconCheckThickSm`.
  - The `IconCheckThickSm` name now refers to a different source icon. Review its use in your application.
  - Replace `IconWindowText` imports with `IconViewText`.
  - Replace `IconSidebarRightOpen` imports with `IconSidebarRightFill`.
  - Replace `IconSidebarLeftOpen` imports with `IconSidebarLeftFill`.
  - Replace `IconBlueprintGrid` imports with `IconGridRuler`.
  - Replace `IconArticleSimple` imports with `IconRichText`.

- b3a8785: Add the optional `fyicons/client` entry with `FyiProvider` and provider-aware icons. Set shared `size`, `color`, `className`, and `style` defaults for an app or a section. Nested providers inherit defaults, classes and styles combine, and individual icons can override values.

  Import both `FyiProvider` and its icons from `fyicons/client`. Existing `fyicons` imports, direct icon imports, and shadcn source icons remain context-free and keep Server Component support. No migration is required for existing consumers.

### Patch Changes

- 1f497fb: Include `fy-icon` and `fy-{icon-name}` classes on raw SVG exports, matching the React components. The package's SVG files and website downloads preserve the original artwork, viewBox, paint, and reference IDs. Website ZIP checksums include the added classes.

  Use these classes to style inline SVGs with CSS `color`, `width`, and `height`.

## 0.2.1

### Patch Changes

- d6b0c66: Refine alignment in shapes, star, and cloud icons. Sharpen clipboard clamps, correct nested checkmark proportions in clipboard, file, and related icons, and fix the sizing and cutouts in `link-linked`.

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
