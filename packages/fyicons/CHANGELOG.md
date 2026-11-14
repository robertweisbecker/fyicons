# fyicons

## 0.4.2

### Patch Changes

- 26e0f68: Reduce the uncompressed SVG source size of 53 existing icons by 1.75 KB. This includes smaller exports for pause, volume-slash, arrow-external, arrow-down-arrow-up, and other icons while preserving their names, React exports, and 16 × 16 canvas. Render the width icon and the central height arrow at full opacity, matching their current design. Other reviewed rendering differences are limited to small edge and antialiasing changes.

  Replace filled outlines with stroked paths in arrow-clockwise-lg, arrow-corner-minimize, arrow-corner-resize, arrow-down, arrow-down-arrow-up, arrow-external, picture-in-picture-enter, play, and volume-slash. The clockwise arrowhead and the filled portions of picture-in-picture-enter remain filled. Pause now uses two stroked rectangles instead of a filled outline path.

- 239d13e: Correct bell clappers, slash details, and notification-dot shape and placement in `bell-slash`, `bell-2-slash`, `bell-2-fill`, `bell-dot`, and `bell-dot-fill`. Existing icon names and imports stay the same.
- 779add3: Refine 14 existing device, media, grid, and frame icons. Adjust frame and grid proportions, grid positioning indicators, device and presentation details, the muted volume symbol, and Bluetooth.

  Convert `laptop-simple` and `projector` from outlined filled geometry to live SVG strokes. Existing icon names and imports stay the same.

- 94e04d0: Refine the artwork of 12 existing emoji icons: the happy, grin, beam, neutral, scared, smile, add, and add-simple designs and their selected filled variants. Existing icon names and imports stay the same.
- b36c43d: Improve optical sizing of circles and quadrant elements in `apps`, `apps-search`, `apps-connected`, `apps-plus`, `shapes`, `math`, and `basket`.

  Enlarge the app circles while preserving their 1 px outline weight, center the triangle in `shapes`, and lengthen the minus, division bar, and multiplication symbol in `math`. Refine the rounded basket outline for better optical balance.

  Public icon names and imports remain unchanged. No outlined filled strokes were converted to stroked paths. Combined source SVG size changes from 3.83 KB to 4.04 KB (+207 B).

- 563aa91: Refine rectangle radii and spacing in `credit-card`, `id`, `id-fill`, `hd`, `hd-fill`, `user-card`, `user-card-fill`, `briefcase`, and `luggage-rolling`.

  Align the card and badge proportions, refine their rounded corners, and improve spacing around lettering and portrait details. Adjust the briefcase body and clasp and the luggage body and tag for clearer interior spacing.

  Existing public icon names and imports remain unchanged. No outlined filled strokes were converted to stroked paths. Combined source SVG size changes from 5.32 KB to 5.26 KB (63 B smaller).

- 7bbaf5d: Refine 13 existing status and control icons: `caret-down`, `caret-up`, `carets-y`, `square-check`, `square-alert`, and the outline and filled variants of `circle-stop`, `circle-no-entry`, `circle-minus`, and `circle-record`.

  Adjust caret proportions and the interior status symbols. The record pair now uses a solid center in the outline variant and a filled outer circle with a contrasting ring in the filled variant. Existing icon names and imports stay the same.

- 7e07e64: Refine typography, drawing tools, object details, and layout spacing across 26 existing icons. This includes glyph proportions and weight, drawing-tip contours, menu and list spacing, picture-frame details, and attachment geometry.

  Convert `letter-k` from outlined filled geometry to live SVG strokes. Existing public icon names, imports, and historical lookup aliases remain available. The 26 artwork SVGs change from 16.32 KB to 16.34 KB (+19 B).

- e912a3b: Reduce the combined SVG source size of `quotes`, `quotes-fill`, and `square` from 6.15 KB to 1.33 KB, saving 4.81 KB (78.3%), while preserving their appearance, full opacity, names, and imports. Small edge-rendering differences remain in the quotes pair.

  Convert `quotes` from outlined filled geometry to a stroked path, and `square` to a stroked rounded rectangle. `quotes-fill` remains a filled path.

- 49b6925: Remove redundant clipping paths from 37 icons to reduce SVG and React markup. Icon names, imports, and the 16 × 16 canvas stay the same.

  Updated icons:

  - `at-sign-plug`
  - `bee`
  - `comment-check`
  - `comment-reply-check`
  - `copied-sm`
  - `diamond`
  - `diamond-fill`
  - `die`
  - `file-audio`
  - `file-image`
  - `file-play`
  - `file-video`
  - `file-waveform`
  - `flashlight`
  - `flashlight-on`
  - `flower-spiral`
  - `lightbulb-on`
  - `link`
  - `link-linked`
  - `link-slash`
  - `marker-tip-duo`
  - `page-add`
  - `paperclip-tilt`
  - `paperclip-wide-tilt`
  - `plug-simple`
  - `plugs`
  - `plugs-plugged`
  - `plugs-unplug`
  - `sparkle`
  - `sparkle-fill`
  - `stars`
  - `translate`
  - `user-add`
  - `user-bot-simple`
  - `user-clank`
  - `volume-high-fill`
  - `wand`

## 0.4.1

### Patch Changes

- 5a6c6fb: Update the package homepage and README links to fyicons.com. Icon artwork, React components, and the package description are unchanged.

## 0.4.0

### Minor Changes

- 1b63881:

  #### Breaking changes

  Several icons have new names. Update imports, SVG filenames, and shadcn registry references:

  - `IconBookOpenAlt` → `IconBookOpen2`
  - `IconBookOpenFull` → `IconBookOpen3`
  - `IconPageAttachment` → `IconAttachment`
  - `IconBoxShipping` → `IconBoxTaped`
  - `IconGitWorktreeHorizontal` → `IconGitWorktreeAlt`
  - The previous `IconGitWorktreeAlt` → `IconGitWorktree`

  The book names now use numbers because the icons represent variations of the same idea. For the Git Worktree icons, `git-worktree-alt` now refers to the former horizontal icon. Use `git-worktree` for the previous alternate icon.

  Removed `IconCloudDownloadAlt`, which was used for testing. Use `IconCloudDownload` instead. Also removed `IconSpellChecked` for now; combine `IconSpellCheck` with a check icon to represent a checked state.

  #### Added
  - Emoji: `IconSnooze`, `IconPartyPopper`, and `IconHundredPoints`.
  - `IconRabbit` and `IconTurtle` for speed options.
  - `IconBatteryMin` and `IconBatteryHigh` to expand the battery levels.
  - Dashed, dotted, and wavy underline styles: `IconTextUnderlineDashed`, `IconTextUnderlineDotted`, and `IconTextUnderlineWavy`.
  - The `IconCommentReply` family, with reversed versions of the comment icons introduced in 0.3.0: `IconCommentReply`, `IconCommentReplyCheck`, `IconCommentReplyEdit`, `IconCommentReplyNotification`, and `IconCommentReplyPlus`.
  - A foldable phone (`IconMobileFold`) and earbuds (`IconEarbuds`).
  - More user icons: `IconUserAdd`, `IconUserSubtract`, `IconUserKey`, `IconUserCard`, and `IconUserCardFill`.
  - Also added `Icon4k`, `Icon4kFill`, `IconArray`, `IconAttachments`, `IconBanFill`, `IconBell2Fill`, `IconBellDot`, `IconBellDotFill`, `IconBoxSolid`, `IconCameraSquareFlip`, `IconChartLineAxes`, `IconCircleDollar`, `IconCircleDollarFill`, `IconCommentNotification`, `IconComments`, `IconFan`, `IconFlashlightOn`, `IconId`, `IconIdFill`, `IconLetterU`, `IconMapFill`, `IconMegaphone`, `IconPageAdd`, `IconQuill`, `IconServer`, and `IconSquareMinusFill`.

  #### Updated
  - Adjusted the battery fills to work with the expanded range.
  - Gave file type icons the same semi-rounded corners as other file icons.
  - Enlarged the mailbox flag and added a handle for legibility.
  - Adjusted the K and 4 shapes slightly off the pixel grid for optical balance.
  - Filled the tips of the marker and highlighter icons.
  - Updated `IconCameraFlip` to use the camera drawing in place of the square camera drawing.
  - Made the quotation marks in `IconChatQuotes` and `IconChatRoundQuotes` consistent with the blockquote icon.
  - Made text lines consistent across page icons and adjusted the magnifying glass in `IconPageSearch` to fit.
  - Softened the underline in `IconSpellCheck` to match `IconTextUnderlineWavy`.
  - Redrew `IconFlower` to distinguish it from settings and atom icons at small sizes.
  - Filled the screen in `IconComputer` for legibility and made the plug icons more consistent.
  - Aligned small code details in `IconCodeBlock` and terminal icons to the pixel grid.
  - Enlarged the luggage tag as an experiment.

  Other icons also received artwork refinements.

## 0.3.2

### Patch Changes

- f9c3c1c:

  - Update artwork for 52 icons, including the comment, appearance, chart, flashlight, home, video, and luggage icons. `IconChartLine` now shows the lines without axes.
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
