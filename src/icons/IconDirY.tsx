import * as React from 'react';
import type { IconProps } from './types';
const IconDirY = React.forwardRef<SVGSVGElement, IconProps>(function IconDirY(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.64537 1.64622C7.84062 1.45111 8.15816 1.45108 8.35338 1.64622L11.3524 4.64622C11.5476 4.84147 11.5476 5.15801 11.3524 5.35326C11.1572 5.54844 10.8406 5.54843 10.6454 5.35326L8.49791 3.20579V12.7937L10.6464 10.6462C10.8416 10.4511 11.1581 10.4511 11.3534 10.6462C11.5486 10.8414 11.5485 11.158 11.3534 11.3533L8.35436 14.3533C8.15911 14.5485 7.84163 14.5485 7.64635 14.3533L4.64635 11.3533C4.45123 11.158 4.45116 10.8415 4.64635 10.6462C4.84158 10.4511 5.15815 10.4511 5.35338 10.6462L7.49791 12.7908V3.20775L5.35241 5.35326C5.15715 5.54844 4.84062 5.54843 4.64537 5.35326C4.45026 5.158 4.45022 4.84144 4.64537 4.64622L7.64537 1.64622Z" fill="currentColor" fillOpacity={1} style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconDirY;
