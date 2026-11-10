---
'fyicons': minor
---

Add 32 icons: `Icon4k`, `Icon4kFill`, `IconArray`, `IconAttachments`, `IconBanFill`, `IconBell2Fill`, `IconCameraSquareFlip`, `IconChartLineAxes`, `IconCircleDollar`, `IconCircleDollarFill`, `IconCommentNotification`, `IconCommentReply`, `IconCommentReplyCheck`, `IconCommentReplyEdit`, `IconCommentReplyNotification`, `IconCommentReplyPlus`, `IconComments`, `IconFan`, `IconFlashlightOn`, `IconId`, `IconIdFill`, `IconLetterU`, `IconMobileFold`, `IconPageAdd`, `IconQuill`, `IconSnooze`, `IconSquareMinusFill`, `IconTextUnderlineDashed`, `IconTextUnderlineDotted`, `IconTextUnderlineWavy`, `IconUserId`, and `IconUserIdFill`. Update the artwork of existing icons.

The Git Worktree icons have new names. Update imports to keep the same artwork:

- Replace `IconGitWorktreeHorizontal` with `IconGitWorktreeAlt`.
- Replace the previous `IconGitWorktreeAlt` with `IconGitWorktree`.

The `git-worktree-alt` SVG and shadcn registry item now refer to the artwork previously named `git-worktree-horizontal`. Use `git-worktree` for the previous `git-worktree-alt` artwork.

Additional renamed icons:

- Replace `IconBookOpenAlt` with `IconBookOpen2`.
- Replace `IconBookOpenFull` with `IconBookOpen3`.
- Replace `IconPageAttachment` with `IconAttachment`.

The SVG filenames and shadcn registry items use the new names as well. `IconCloudDownloadAlt` has been removed; `IconCloudDownload` is available as an alternative.
