import * as React from 'react';
import type { IconProps } from './types';
const IconRectangleAudioDescriptions = React.forwardRef<SVGSVGElement, IconProps>(function IconRectangleAudioDescriptions(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M13 3C14.1046 3 15 3.89543 15 5V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1 12.1046 1 11V5C1 3.89543 1.89543 3 3 3H13ZM3 4C2.44772 4 2 4.44772 2 5V11C2 11.5523 2.44772 12 3 12H13C13.5523 12 14 11.5523 14 11V5C14 4.44772 13.5523 4 13 4H3ZM10.7275 5.25098C11.4024 5.26769 11.9309 5.70004 12.2617 6.2041C12.5959 6.71351 12.7831 7.36998 12.7529 8.00586C12.725 8.59134 12.526 9.18454 12.1953 9.64551C11.8657 10.1048 11.3637 10.4838 10.7285 10.501C10.4561 10.5083 10.0831 10.5076 9.7832 10.5059C9.63243 10.505 9.49784 10.504 9.40137 10.5029C9.35327 10.5024 9.31391 10.5013 9.28711 10.501H9.24512C8.97233 10.4965 8.75308 10.2738 8.75293 10.001V5.75098C8.75312 5.4778 8.97295 5.25494 9.24609 5.25098H9.25684C9.26387 5.25088 9.27482 5.25017 9.28809 5.25C9.31488 5.24967 9.35431 5.24953 9.40234 5.24902C9.49868 5.24801 9.63283 5.24691 9.7832 5.24609C10.083 5.24448 10.4559 5.24433 10.7275 5.25098ZM5.5 5.25C5.70244 5.25 5.88466 5.37248 5.96191 5.55957L7.71191 9.80957C7.81692 10.0648 7.69559 10.3567 7.44043 10.4619C7.18527 10.5668 6.89331 10.4454 6.78809 10.1904L6.45215 9.375H4.54785L4.21191 10.1904C4.10661 10.4455 3.81476 10.567 3.55957 10.4619C3.30465 10.3566 3.1832 10.0647 3.28809 9.80957L5.03809 5.55957L5.07129 5.49219C5.16067 5.34355 5.32297 5.25012 5.5 5.25ZM9.75293 9.50488C9.76474 9.50496 9.77702 9.50577 9.78906 9.50586C10.088 9.50763 10.4465 9.5078 10.7012 9.50098C10.9265 9.49493 11.17 9.35896 11.3828 9.0625C11.5944 8.76755 11.7346 8.36248 11.7539 7.95801C11.7738 7.53704 11.6461 7.08894 11.4258 6.75293C11.2018 6.41178 10.9352 6.25669 10.7021 6.25098C10.4468 6.24474 10.088 6.24448 9.78906 6.24609C9.77707 6.24615 9.76469 6.24602 9.75293 6.24609V9.50488ZM4.85645 8.625H6.14355L5.5 7.06152L4.85645 8.625Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconRectangleAudioDescriptions;
