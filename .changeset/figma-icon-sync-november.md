---
'fyicons': minor
---

Sync the icon collection with the current design source.

- Add 70 icons.
- Remove `IconWrap`, which is no longer in the source inventory.
- Update SVG artwork for 370 existing icons; 366 have rendered pixel changes.
- Rename 34 React exports. Previous names remain website lookup aliases, not React exports.

Breaking changes and migration:

- Replace `IconCookie` imports with `IconCookieBite`.
- Replace `IconSwatch` imports with `IconSwatches`.
- Replace `IconCookieFill` imports with `IconCookieBiteFill`.
- Replace `IconHourglassSimple` imports with `IconHourglassEmpty`.
- Replace `IconCircleDashedUser` imports with `IconCircleUserDashed`.
- The `IconCookie` name now refers to a different source icon. Review its use in your application.
- The `IconCookieFill` name now refers to a different source icon. Review its use in your application.
- Replace `IconPencilEdit` imports with `IconEdit`.
- The `IconCalendarFill` name now refers to a different source icon. Review its use in your application.
- The `IconCheckThick` name now refers to a different source icon. Review its use in your application.
- Replace `IconPaintBucket` imports with `IconBucket`.
- Replace `IconCheckThickSm` imports with `IconCheckThickXs`.
- Replace `IconSendStraight` imports with `IconSendAlt`.
- Replace `IconKbdCommandSquare` imports with `IconSquareCommand`.
- Replace `IconPlugAtSign` imports with `IconAtSignPlug`.
- Replace `IconSendStraightFill` imports with `IconSendAltFill`.
- Replace `IconPlugPlug` imports with `IconPlugs`.
- Replace `IconCircleProgressTodo` imports with `IconCircleProgress0`.
- Replace `IconCircleProgressQuarter` imports with `IconCircleProgress25`.
- Replace `IconCircleProgressHalf` imports with `IconCircleProgress50`.
- Replace `IconCircleProgressThreeQuarters` imports with `IconCircleProgress75`.
- Replace `IconPencilEditFill` imports with `IconEditSolid`.
- Replace `IconClockFillAlt` imports with `IconClockSolid`.
- Replace `IconArrowWrap` imports with `IconLineWrap`.
- Replace `IconArticle` imports with `IconPageThumbnail`.
- Replace `IconGitModified` imports with `IconLetterM`.
- Replace `IconCircleProgressFull` imports with `IconCircleProgress100`.
- Replace `IconGitAdded` imports with `IconLetterA`.
- Replace `IconGitRemoved` imports with `IconLetterR`.
- Replace `IconPlugPlugged` imports with `IconPlugsPlugged`.
- Replace `IconPlugUnplug` imports with `IconPlugsUnplug`.
- Replace `IconChartBarSimple` imports with `IconChartBarAxes`.
- Remove `IconWrap` imports. This icon is no longer available.
- Replace `IconOverflow` imports with `IconLineOverflow`.
- Replace `IconCalendarFill` imports with `IconCalendarSolid`.
- Replace `IconCheckThick` imports with `IconCheckThickSm`.
- The `IconCheckThickSm` name now refers to a different source icon. Review its use in your application.
- Replace `IconSidebarRightOpen` imports with `IconSidebarRightFill`.
- Replace `IconSidebarLeftOpen` imports with `IconSidebarLeftFill`.
- Replace `IconArticleSimple` imports with `IconRichText`.
