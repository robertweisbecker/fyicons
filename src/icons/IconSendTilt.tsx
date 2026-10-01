import * as React from 'react';
import type { IconProps } from './types';
const IconSendTilt = React.forwardRef<SVGSVGElement, IconProps>(function IconSendTilt(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M13.2334 3.00026C14.3989 3.00058 15.119 4.27212 14.5195 5.27174L9.08203 14.3342C8.41416 15.4467 6.74426 15.2442 6.3623 14.0042L5.41406 10.9192C5.11825 9.95737 5.4265 8.90558 6.21875 8.26979C6.29048 8.21224 6.36544 8.15354 6.44141 8.09303C6.35963 8.11791 6.28031 8.14331 6.2041 8.16628C5.3739 8.41627 4.48083 8.20633 3.8418 7.63112L1.60156 5.61549C0.580049 4.69586 1.23108 3.00054 2.60547 3.00026H13.2334ZM2.60547 4.00026C2.14748 4.00054 1.93101 4.56584 2.27148 4.87233L4.51074 6.88795C4.89543 7.23422 5.42738 7.35637 5.91602 7.20924C7.05019 6.86748 8.68006 6.35105 9.27637 6.05299C9.52336 5.9295 9.82377 6.02964 9.94727 6.27663C10.0707 6.52359 9.97058 6.82405 9.72363 6.94753C9.45954 7.07963 8.99273 7.39948 8.44434 7.8069C7.9074 8.20582 7.32436 8.6635 6.84375 9.04909C6.37875 9.4224 6.19112 10.0462 6.36914 10.6253L7.31836 13.7092C7.44567 14.1225 8.00193 14.1902 8.22461 13.8196L13.6621 4.7571C13.8615 4.42403 13.6216 4.00058 13.2334 4.00026H2.60547Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSendTilt;
