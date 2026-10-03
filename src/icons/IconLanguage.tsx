import * as React from 'react';
import type { IconProps } from './types';
const IconLanguage = React.forwardRef<SVGSVGElement, IconProps>(function IconLanguage(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.60254 5.31934C9.88558 4.82672 10.6144 4.82677 10.8975 5.31934L10.9502 5.43262L13.9668 13.3213C14.0654 13.5792 13.9365 13.8681 13.6787 13.9668C13.4209 14.0653 13.1319 13.9365 13.0332 13.6787L12.0088 11H8.49121L7.4668 13.6787C7.36808 13.9365 7.07913 14.0654 6.82129 13.9668C6.56362 13.8681 6.43467 13.5791 6.5332 13.3213L9.5498 5.43262L9.60254 5.31934ZM8.87305 10H11.627L10.25 6.39941L8.87305 10ZM5.5 1.5C5.77614 1.5 5.99999 1.72386 6 2V3H8.5C8.77614 3 8.99999 3.22386 9 3.5C9 3.77614 8.77614 4 8.5 4H7.48438C7.40693 5.27665 7.02551 6.36007 6.3252 7.19824C6.60731 7.38788 6.96565 7.57276 7.45605 7.79395C7.7074 7.90751 7.81917 8.20356 7.70605 8.45508C7.5925 8.70676 7.29565 8.81958 7.04395 8.70605C6.45072 8.43848 5.98115 8.19368 5.58691 7.89941C4.78472 8.50518 3.75991 8.86961 2.55273 8.99707C2.27828 9.02594 2.03205 8.82715 2.00293 8.55273C1.97398 8.27828 2.17289 8.03213 2.44727 8.00293C3.44711 7.89739 4.24628 7.61588 4.86035 7.19141C4.54871 6.79467 4.29104 6.31833 4.00684 5.71191C3.88994 5.46204 3.99736 5.16412 4.24707 5.04688C4.49709 4.9297 4.79489 5.0381 4.91211 5.28809C5.16872 5.83559 5.3793 6.21488 5.59863 6.50879C6.10028 5.88497 6.40922 5.05421 6.48242 4H2.5C2.22394 3.9999 2 3.77608 2 3.5C2.00001 3.22392 2.22395 3.0001 2.5 3H5V2C5.00001 1.72392 5.22395 1.5001 5.5 1.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLanguage;
