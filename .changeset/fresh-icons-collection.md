---
'fyicons': minor
---

### Breaking changes

Several icons have new names. Update imports, SVG filenames, and shadcn registry references:

- `IconBookOpenAlt` → `IconBookOpen2`
- `IconBookOpenFull` → `IconBookOpen3`
- `IconPageAttachment` → `IconAttachment`
- `IconBoxShipping` → `IconBoxTaped`
- `IconGitWorktreeHorizontal` → `IconGitWorktreeAlt`
- The previous `IconGitWorktreeAlt` → `IconGitWorktree`

The book names now use numbers because the icons represent variations of the same idea. For the Git Worktree icons, `git-worktree-alt` now refers to the former horizontal icon. Use `git-worktree` for the previous alternate icon.

Removed `IconCloudDownloadAlt`, which was used for testing. Use `IconCloudDownload` instead. Also removed `IconSpellChecked` for now; combine `IconSpellCheck` with a check icon to represent a checked state.

### Added

- Emoji: `IconSnooze`, `IconPartyPopper`, and `IconHundredPoints`.
- `IconRabbit` and `IconTurtle` for speed options.
- `IconBatteryMin` and `IconBatteryHigh` to expand the battery levels.
- Dashed, dotted, and wavy underline styles: `IconTextUnderlineDashed`, `IconTextUnderlineDotted`, and `IconTextUnderlineWavy`.
- The `IconCommentReply` family, with reversed versions of the comment icons introduced in 0.3.0: `IconCommentReply`, `IconCommentReplyCheck`, `IconCommentReplyEdit`, `IconCommentReplyNotification`, and `IconCommentReplyPlus`.
- A foldable phone (`IconMobileFold`) and earbuds (`IconEarbuds`).
- More user icons: `IconUserAdd`, `IconUserSubtract`, `IconUserKey`, `IconUserCard`, and `IconUserCardFill`.
- Also added `Icon4k`, `Icon4kFill`, `IconArray`, `IconAttachments`, `IconBanFill`, `IconBell2Fill`, `IconBellDot`, `IconBellDotFill`, `IconBoxSolid`, `IconCameraSquareFlip`, `IconChartLineAxes`, `IconCircleDollar`, `IconCircleDollarFill`, `IconCommentNotification`, `IconComments`, `IconFan`, `IconFlashlightOn`, `IconId`, `IconIdFill`, `IconLetterU`, `IconMapFill`, `IconMegaphone`, `IconPageAdd`, `IconQuill`, `IconServer`, and `IconSquareMinusFill`.

### Updated

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
