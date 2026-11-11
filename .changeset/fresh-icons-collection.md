---
'fyicons': minor
---

Add 43 icons: `Icon4kFill`, `Icon4k`, `IconArray`, `IconAttachments`, `IconBanFill`, `IconBatteryHigh`, `IconBatteryMin`, `IconBell2Fill`, `IconBellDotFill`, `IconBellDot`, `IconBoxSolid`, `IconCameraSquareFlip`, `IconChartLineAxes`, `IconCircleDollarFill`, `IconCircleDollar`, `IconCommentNotification`, `IconCommentReplyCheck`, `IconCommentReplyEdit`, `IconCommentReplyNotification`, `IconCommentReplyPlus`, `IconCommentReply`, `IconComments`, `IconFan`, `IconFlashlightOn`, `IconIdFill`, `IconId`, `IconLetterU`, `IconMapFill`, `IconMegaphone`, `IconMobileFold`, `IconPageAdd`, `IconQuill`, `IconServer`, `IconSnooze`, `IconSquareMinusFill`, `IconTextUnderlineDashed`, `IconTextUnderlineDotted`, `IconTextUnderlineWavy`, `IconUserAdd`, `IconUserCardFill`, `IconUserCard`, `IconUserKey`, and `IconUserSubtract`. Update the artwork of existing icons.

The Git Worktree icons have new names. Update imports to keep the same artwork:

- Replace `IconGitWorktreeHorizontal` with `IconGitWorktreeAlt`.
- Replace the previous `IconGitWorktreeAlt` with `IconGitWorktree`.

The `git-worktree-alt` SVG and shadcn registry item now refer to the artwork previously named `git-worktree-horizontal`. Use `git-worktree` for the previous `git-worktree-alt` artwork.

Additional renamed icons:

- Replace `IconBookOpenAlt` with `IconBookOpen2`.
- Replace `IconBookOpenFull` with `IconBookOpen3`.
- Replace `IconPageAttachment` with `IconAttachment`.
- Replace `IconBoxShipping` with `IconBoxTaped`.

The SVG filenames and shadcn registry items use the new names as well. `IconCloudDownloadAlt` and `IconSpellChecked` have been removed. `IconCloudDownload` is available as an alternative to `IconCloudDownloadAlt`.
