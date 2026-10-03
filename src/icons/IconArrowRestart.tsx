import * as React from 'react';
import type { IconProps } from './types';
const IconArrowRestart = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowRestart(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5.56445 2.51709C6.72372 2.00218 8.0165 1.86763 9.25684 2.1333C10.4974 2.39914 11.6221 3.05168 12.4688 3.99658C13.3153 4.94153 13.8403 6.1309 13.9688 7.39307C14.0971 8.6552 13.8225 9.92593 13.1836 11.022C12.5447 12.1179 11.5746 12.9834 10.4131 13.4937C9.2516 14.0038 7.95806 14.1327 6.71875 13.8618C5.47943 13.5908 4.35729 12.9341 3.51465 11.9858C3.33133 11.7795 3.35049 11.4632 3.55664 11.2798C3.76308 11.0965 4.07836 11.1154 4.26172 11.3218C4.96385 12.112 5.89896 12.6594 6.93164 12.8853C7.96435 13.111 9.04286 13.0036 10.0107 12.5786C10.9786 12.1534 11.7869 11.4313 12.3193 10.5181C12.8516 9.60482 13.0815 8.54625 12.9746 7.49463C12.8676 6.44282 12.4291 5.45202 11.7236 4.66455C11.0182 3.87711 10.0816 3.33339 9.04785 3.11182C8.01404 2.8903 6.93595 3.00192 5.96973 3.43115C5.29998 3.7288 4.70696 4.16763 4.23047 4.71436L5.09863 5.58252C5.25586 5.74003 5.14449 6.00925 4.92188 6.00928H2.24023C2.10227 6.00928 1.9904 5.89721 1.99023 5.75928V3.07666C1.9905 2.85415 2.25958 2.74249 2.41699 2.8999L3.52246 4.00635C4.08659 3.37398 4.78166 2.86489 5.56445 2.51709Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowRestart;
