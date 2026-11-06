# Migrate FYIcons 0.2.1 to 0.3.0

This candidate has 1,285 icons, 105 additions, 80 export renames, two removals, and ten names reassigned to different source icons. The comparison baseline is published `fyicons@0.2.1` at `1a099e1041546ebe25ab04c58999f76b84f6d009`. All mappings below use stable component identity, not similar-looking artwork.

## Apply the mapping once

Map the original imported symbol directly to its final name. Do not apply sequential global replacements. A destination name can also be an old name that maps elsewhere. For example, old `IconCheckThick` maps to `IconCheckThickSm`; old `IconCheckThickSm` maps to `IconCheckThickXs`. Old `IconGaugeHigh` maps to `IconMeterHigh`; old `IconGaugeSimpleHigh` maps to `IconGaugeHigh`.

Preserve existing local import aliases, or introduce aliases to keep JSX unchanged:

```tsx
// Original 0.2.1 imports:
import {
  IconCheckThick,
  IconCheckThickSm,
  IconGaugeHigh,
  IconGaugeSimpleHigh,
} from 'fyicons';

// Equivalent source identities in 0.3.0, preserving those local identifiers:
import {
  IconCheckThickSm as IconCheckThick,
  IconCheckThickXs as IconCheckThickSm,
  IconMeterHigh as IconGaugeHigh,
  IconGaugeHigh as IconGaugeSimpleHigh,
} from 'fyicons';
```

Update direct `fyicons/icons/IconName` paths to the new export name. SVG filenames use `<canonical-name>-16.svg`; CSS selectors use `fy-<canonical-name>`; shadcn item names use the canonical name. The same one-pass rule applies to those names. The table below maps every original export and canonical name to its final name.

Historical names remain website lookup aliases. Canonical names take precedence when an alias conflicts. Aliases do not create compatibility React exports. Reinstall copied shadcn source icons and shared helpers together from the final release tag after publication; that tag is not available yet.

Names preserve source identity, not a promise of unchanged pixels: 419 existing SVGs changed, of which 413 render differently at 16 or 64 px. Review application screenshots after migrating.

## Names that still compile but select different artwork

Review all uses of these names. A successful typecheck cannot detect this visual change. The replacement in the second column retains the old source identity.

| Original 0.2.1 export | Replacement in 0.3.0 |
| --------------------- | -------------------- |
| `IconCalendarFill`    | `IconCalendarSolid`  |
| `IconCheckThick`      | `IconCheckThickSm`   |
| `IconCheckThickSm`    | `IconCheckThickXs`   |
| `IconCookie`          | `IconCookieBite`     |
| `IconCookieFill`      | `IconCookieBiteFill` |
| `IconFlagPennant`     | `IconFlagBanner`     |
| `IconFlower`          | `IconFlowerSpiral`   |
| `IconGaugeHigh`       | `IconMeterHigh`      |
| `IconGaugeLow`        | `IconMeterLow`       |
| `IconMenuSimple`      | `IconMenuAltSimple`  |

## Removed icons

- Remove `IconFontCapital` imports and `font-capital-16.svg` references. There is no identity-preserving replacement; choose a new icon after visual review.
- Remove `IconWrap` imports and `wrap-16.svg` references. There is no identity-preserving replacement; choose a new icon after visual review.

## All 80 renames

| Original export                   | New export                | Original canonical name          | New canonical name     |
| --------------------------------- | ------------------------- | -------------------------------- | ---------------------- |
| `IconArrowWrap`                   | `IconLineWrap`            | `arrow-wrap`                     | `line-wrap`            |
| `IconArticle`                     | `IconPageThumbnail`       | `article`                        | `page-thumbnail`       |
| `IconArticleSimple`               | `IconRichText`            | `article-simple`                 | `rich-text`            |
| `IconBlockquote`                  | `IconQuoteBlock`          | `blockquote`                     | `quote-block`          |
| `IconBlueprintGrid`               | `IconGridRuler`           | `blueprint-grid`                 | `grid-ruler`           |
| `IconCalendarFill`                | `IconCalendarSolid`       | `calendar-fill`                  | `calendar-solid`       |
| `IconChartBarSimple`              | `IconChartBarAxes`        | `chart-bar-simple`               | `chart-bar-axes`       |
| `IconCheckThick`                  | `IconCheckThickSm`        | `check-thick`                    | `check-thick-sm`       |
| `IconCheckThickSm`                | `IconCheckThickXs`        | `check-thick-sm`                 | `check-thick-xs`       |
| `IconCircleDashedUser`            | `IconCircleUserDashed`    | `circle-dashed-user`             | `circle-user-dashed`   |
| `IconCircleProgressFull`          | `IconProgressTaskDone`    | `circle-progress-full`           | `progress-task-done`   |
| `IconCircleProgressHalf`          | `IconProgressTask50`      | `circle-progress-half`           | `progress-task-50`     |
| `IconCircleProgressQuarter`       | `IconProgressTask25`      | `circle-progress-quarter`        | `progress-task-25`     |
| `IconCircleProgressThreeQuarters` | `IconProgressTask75`      | `circle-progress-three-quarters` | `progress-task-75`     |
| `IconCircleProgressTodo`          | `IconProgressTaskTodo`    | `circle-progress-todo`           | `progress-task-todo`   |
| `IconClick`                       | `IconCursorRays`          | `click`                          | `cursor-rays`          |
| `IconClockFillAlt`                | `IconClockSolid`          | `clock-fill-alt`                 | `clock-solid`          |
| `IconCompassAlt`                  | `IconCompassSimple`       | `compass-alt`                    | `compass-simple`       |
| `IconCookie`                      | `IconCookieBite`          | `cookie`                         | `cookie-bite`          |
| `IconCookieFill`                  | `IconCookieBiteFill`      | `cookie-fill`                    | `cookie-bite-fill`     |
| `IconExtensionsLg`                | `IconExtensionsAlt`       | `extensions-lg`                  | `extensions-alt`       |
| `IconFlagBurgee`                  | `IconFlagPennant`         | `flag-burgee`                    | `flag-pennant`         |
| `IconFlagPennant`                 | `IconFlagBanner`          | `flag-pennant`                   | `flag-banner`          |
| `IconFlower`                      | `IconFlowerSpiral`        | `flower`                         | `flower-spiral`        |
| `IconFolderView`                  | `IconFolderTree`          | `folder-view`                    | `folder-tree`          |
| `IconFolderViewFill`              | `IconFolderTreeFill`      | `folder-view-fill`               | `folder-tree-fill`     |
| `IconGauge`                       | `IconMeter`               | `gauge`                          | `meter`                |
| `IconGaugeHigh`                   | `IconMeterHigh`           | `gauge-high`                     | `meter-high`           |
| `IconGaugeLow`                    | `IconMeterLow`            | `gauge-low`                      | `meter-low`            |
| `IconGaugeSimpleHigh`             | `IconGaugeHigh`           | `gauge-simple-high`              | `gauge-high`           |
| `IconGaugeSimpleLow`              | `IconGaugeLow`            | `gauge-simple-low`               | `gauge-low`            |
| `IconGaugeSimpleMax`              | `IconGaugeMax`            | `gauge-simple-max`               | `gauge-max`            |
| `IconGaugeSimpleMin`              | `IconGaugeMin`            | `gauge-simple-min`               | `gauge-min`            |
| `IconGear`                        | `IconCogWheel`            | `gear`                           | `cog-wheel`            |
| `IconGitAdded`                    | `IconLetterA`             | `git-added`                      | `letter-a`             |
| `IconGitModified`                 | `IconLetterM`             | `git-modified`                   | `letter-m`             |
| `IconGitRemoved`                  | `IconLetterR`             | `git-removed`                    | `letter-r`             |
| `IconGridColumnEnd`               | `IconGridPositionRight`   | `grid-column-end`                | `grid-position-right`  |
| `IconGridColumnStart`             | `IconGridPositionLeft`    | `grid-column-start`              | `grid-position-left`   |
| `IconGridFooter`                  | `IconGridMixedBottom`     | `grid-footer`                    | `grid-mixed-bottom`    |
| `IconGridHeader`                  | `IconGridMixedTop`        | `grid-header`                    | `grid-mixed-top`       |
| `IconGridRowBottom`               | `IconGridPositionBottom`  | `grid-row-bottom`                | `grid-position-bottom` |
| `IconGridRowTop`                  | `IconGridPositionTop`     | `grid-row-top`                   | `grid-position-top`    |
| `IconGridSidebarEnd`              | `IconGridMixedRight`      | `grid-sidebar-end`               | `grid-mixed-right`     |
| `IconGridSidebarStart`            | `IconGridMixedLeft`       | `grid-sidebar-start`             | `grid-mixed-left`      |
| `IconHourglassSimple`             | `IconHourglassEmpty`      | `hourglass-simple`               | `hourglass-empty`      |
| `IconInfinitySign`                | `IconInfinity`            | `infinity-sign`                  | `infinity`             |
| `IconKbdCommandSquare`            | `IconSquareCommand`       | `kbd-command-square`             | `square-command`       |
| `IconLayoutFooter`                | `IconLayoutRowBottom`     | `layout-footer`                  | `layout-row-bottom`    |
| `IconLayoutHeader`                | `IconLayoutRowTop`        | `layout-header`                  | `layout-row-top`       |
| `IconLayoutSidebarEnd`            | `IconLayoutColumnRight`   | `layout-sidebar-end`             | `layout-column-right`  |
| `IconLayoutSidebarStart`          | `IconLayoutColumnLeft`    | `layout-sidebar-start`           | `layout-column-left`   |
| `IconLayoutTabs`                  | `IconTabs`                | `layout-tabs`                    | `tabs`                 |
| `IconLayoutTemplate`              | `IconLayoutDashed`        | `layout-template`                | `layout-dashed`        |
| `IconMenuSimple`                  | `IconMenuAltSimple`       | `menu-simple`                    | `menu-alt-simple`      |
| `IconMouseModern`                 | `IconMouseWheel`          | `mouse-modern`                   | `mouse-wheel`          |
| `IconOverflow`                    | `IconLineOverflow`        | `overflow`                       | `line-overflow`        |
| `IconPaintBucket`                 | `IconBucket`              | `paint-bucket`                   | `bucket`               |
| `IconParagraphProse`              | `IconParagraphWords`      | `paragraph-prose`                | `paragraph-words`      |
| `IconPencilEdit`                  | `IconEdit`                | `pencil-edit`                    | `edit`                 |
| `IconPencilEditFill`              | `IconEditSolid`           | `pencil-edit-fill`               | `edit-solid`           |
| `IconPlugAtSign`                  | `IconAtSignPlug`          | `plug-at-sign`                   | `at-sign-plug`         |
| `IconPlugPlug`                    | `IconPlugs`               | `plug-plug`                      | `plugs`                |
| `IconPlugPlugged`                 | `IconPlugsPlugged`        | `plug-plugged`                   | `plugs-plugged`        |
| `IconPlugUnplug`                  | `IconPlugsUnplug`         | `plug-unplug`                    | `plugs-unplug`         |
| `IconPointerRulers`               | `IconRulersPointer`       | `pointer-rulers`                 | `rulers-pointer`       |
| `IconSendStraight`                | `IconSendAlt`             | `send-straight`                  | `send-alt`             |
| `IconSendStraightFill`            | `IconSendAltFill`         | `send-straight-fill`             | `send-alt-fill`        |
| `IconSidebarLeftOpen`             | `IconSidebarLeftFill`     | `sidebar-left-open`              | `sidebar-left-fill`    |
| `IconSidebarRightOpen`            | `IconSidebarRightFill`    | `sidebar-right-open`             | `sidebar-right-fill`   |
| `IconSwatch`                      | `IconSwatches`            | `swatch`                         | `swatches`             |
| `IconSwitchesIos`                 | `IconSwitchesCupertino`   | `switches-ios`                   | `switches-cupertino`   |
| `IconTextBlockquote`              | `IconParagraphBlockquote` | `text-blockquote`                | `paragraph-blockquote` |
| `IconTextBox`                     | `IconBoundingBoxText`     | `text-box`                       | `bounding-box-text`    |
| `IconTextBoxHeading`              | `IconBoundingBoxHeading`  | `text-box-heading`               | `bounding-box-heading` |
| `IconTextHtml`                    | `IconTextMarkup`          | `text-html`                      | `text-markup`          |
| `IconTextQuotes`                  | `IconParagraphQuotes`     | `text-quotes`                    | `paragraph-quotes`     |
| `IconTexture`                     | `IconBackgroundInner`     | `texture`                        | `background-inner`     |
| `IconWindowPointer`               | `IconViewPointer`         | `window-pointer`                 | `view-pointer`         |
| `IconWindowText`                  | `IconViewText`            | `window-text`                    | `view-text`            |

## Optional provider defaults

Existing regular imports stay context-free and support Server Components. To opt into shared defaults, import both `FyiProvider` and its icons from `fyicons/client`. Only that entry consumes provider defaults. Nested providers inherit unspecified size/color values and combine classes/styles; local icon props take precedence. Accessibility labels, IDs, handlers, and refs stay per-icon.

## Packaged SVG selectors

Package SVG exports now add `fy-icon` and `fy-<canonical-name>` root classes. Artwork, viewBox, paint, and reference IDs are preserved relative to the candidate source. Update filename/class references using the mapping above. Style inline SVG with CSS `color`, `width`, and `height`.
