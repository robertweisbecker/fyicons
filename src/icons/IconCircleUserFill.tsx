import * as React from 'react';
import type { IconProps } from './types';
const IconCircleUserFill = React.forwardRef<SVGSVGElement, IconProps>(function IconCircleUserFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 10C7.47483 10 6.95494 10.1038 6.46973 10.3047C5.98442 10.5057 5.54331 10.8004 5.17188 11.1719C4.80044 11.5433 4.50571 11.9844 4.30469 12.4697C4.27796 12.5343 4.25276 12.5993 4.22949 12.665C5.26 13.499 6.57106 14 8 14C9.42894 14 10.74 13.499 11.7705 12.665C11.7472 12.5993 11.722 12.5343 11.6953 12.4697C11.4943 11.9844 11.1996 11.5433 10.8281 11.1719C10.4567 10.8004 10.0156 10.5057 9.53027 10.3047C9.04506 10.1038 8.52517 10 8 10ZM8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCircleUserFill;
