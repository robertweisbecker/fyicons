import * as React from 'react';
import type { IconProps } from './types';
const IconAudioDescription = React.forwardRef<SVGSVGElement, IconProps>(function IconAudioDescription(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M13 3C14.1046 3 15 3.89543 15 5V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1 12.1046 1 11V5C1 3.89543 1.89543 3 3 3H13ZM3 4C2.44772 4 2 4.44772 2 5V11C2 11.5523 2.44772 12 3 12H13C13.5523 12 14 11.5523 14 11V5C14 4.44772 13.5523 4 13 4H3ZM10.7275 5.25098C11.4025 5.2677 11.9309 5.69996 12.2617 6.2041C12.5959 6.71353 12.7831 7.36994 12.7529 8.00586C12.725 8.59135 12.526 9.18452 12.1953 9.64551C11.8657 10.1048 11.3638 10.4838 10.7285 10.501C10.4561 10.5083 10.0832 10.5076 9.7832 10.5059C9.63228 10.505 9.49792 10.504 9.40137 10.5029C9.35311 10.5024 9.31398 10.5013 9.28711 10.501H9.24512C8.97213 10.4967 8.75302 10.274 8.75293 10.001V5.75098C8.75306 5.47764 8.97275 5.25475 9.24609 5.25098H9.25684C9.26393 5.25088 9.27466 5.25017 9.28809 5.25C9.31494 5.24967 9.35415 5.24953 9.40234 5.24902C9.49875 5.24801 9.63268 5.24691 9.7832 5.24609C10.0831 5.24448 10.4559 5.24432 10.7275 5.25098ZM5.5 5.25C5.7025 5.25 5.8847 5.37239 5.96191 5.55957L7.71191 9.80957C7.81695 10.0648 7.6956 10.3567 7.44043 10.4619C7.18521 10.567 6.89332 10.4455 6.78809 10.1904L6.45215 9.375H4.54785L4.21191 10.1904C4.10667 10.4456 3.8148 10.567 3.55957 10.4619C3.30447 10.3567 3.18306 10.0648 3.28809 9.80957L5.03809 5.55957L5.07129 5.49219C5.1607 5.34344 5.32285 5.25003 5.5 5.25ZM9.75293 9.50488C9.76486 9.50496 9.7769 9.50579 9.78906 9.50586C10.0882 9.50763 10.4465 9.50781 10.7012 9.50098C10.9265 9.49492 11.17 9.35904 11.3828 9.0625C11.5944 8.76753 11.7346 8.3625 11.7539 7.95801C11.7738 7.53701 11.6462 7.08897 11.4258 6.75293C11.2018 6.41165 10.9353 6.25669 10.7021 6.25098C10.4468 6.24473 10.0881 6.24448 9.78906 6.24609C9.77696 6.24616 9.76481 6.24602 9.75293 6.24609V9.50488ZM4.85645 8.625H6.14355L5.5 7.06152L4.85645 8.625Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconAudioDescription;
