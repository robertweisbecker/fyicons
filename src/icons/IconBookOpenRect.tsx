import * as React from 'react';
import type { IconProps } from './types';
const IconBookOpenRect = React.forwardRef<SVGSVGElement, IconProps>(function IconBookOpenRect(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M4.81641 3.00018C6.17529 3.00018 7.36153 3.7363 8 4.83124C8.63847 3.73629 9.8247 3.00018 11.1836 3.00018H13.5C14.3284 3.00018 15 3.67176 15 4.50018V10.7424C14.9999 11.5707 14.3284 12.2424 13.5 12.2424H12.4053C11.1918 12.2424 10.0124 12.6438 9.05078 13.384L8.30469 13.9582C8.29574 13.9651 8.28464 13.9686 8.27539 13.9748C8.2605 13.9847 8.24619 13.9949 8.23047 14.0031C8.21582 14.0108 8.20067 14.0166 8.18555 14.0226C8.17188 14.0281 8.15858 14.034 8.14453 14.0383C8.12551 14.044 8.1063 14.0475 8.08691 14.051C8.07516 14.053 8.06363 14.0556 8.05176 14.0568C8.03446 14.0586 8.01732 14.0588 8 14.0588C7.98235 14.0588 7.96488 14.0587 7.94727 14.0568C7.9354 14.0556 7.92386 14.0531 7.91211 14.051C7.89274 14.0475 7.87349 14.0441 7.85449 14.0383C7.84046 14.034 7.82713 14.0281 7.81348 14.0226C7.79837 14.0165 7.78318 14.0108 7.76855 14.0031C7.75287 13.9949 7.73849 13.9847 7.72363 13.9748C7.71462 13.9688 7.70404 13.9649 7.69531 13.9582L6.94922 13.384C5.98757 12.6438 4.80823 12.2424 3.59473 12.2424H2.5C1.67164 12.2424 1.0001 11.5707 1 10.7424V4.50018C1 3.67176 1.67157 3.00018 2.5 3.00018H4.81641ZM2.5 4.00018C2.22386 4.00018 2 4.22404 2 4.50018V10.7424C2.0001 11.0184 2.22392 11.2424 2.5 11.2424H3.59473C5.00422 11.2424 6.37439 11.7009 7.5 12.5471V6.68378C7.5 5.20167 6.29851 4.00018 4.81641 4.00018H2.5ZM11.1836 4.00018C9.70149 4.00018 8.5 5.20167 8.5 6.68378V12.5471C9.62561 11.7009 10.9958 11.2424 12.4053 11.2424H13.5C13.7761 11.2424 13.9999 11.0184 14 10.7424V4.50018C14 4.22404 13.7761 4.00018 13.5 4.00018H11.1836Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconBookOpenRect;
