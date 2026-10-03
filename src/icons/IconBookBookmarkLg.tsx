import * as React from 'react';
import type { IconProps } from './types';
const IconBookBookmarkLg = React.forwardRef<SVGSVGElement, IconProps>(function IconBookBookmarkLg(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M13 1C13.5523 1 14 1.44772 14 2V11.5H13.998C13.998 11.6724 13.9101 11.8368 13.7568 11.9287L13.4014 12.1426C12.754 12.531 12.754 13.469 13.4014 13.8574L13.7568 14.0713C13.9495 14.1869 14.0414 14.4172 13.9814 14.6338C13.9213 14.8502 13.7246 15 13.5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.34315 3.34315 1 5 1H13ZM4 12C3.44772 12 3 12.4477 3 13C3 13.5523 3.44772 14 4 14H12.1816C11.8281 13.3852 11.8281 12.6148 12.1816 12H4ZM5 2C3.89543 2 3 2.89543 3 4V11.2695C3.29437 11.0991 3.63536 11 4 11H13V2H11V7.21582C11 7.8517 10.258 8.19907 9.76953 7.79199L9 7.15039L8.23047 7.79199C7.74197 8.19907 7 7.8517 7 7.21582V2H5ZM8 6.68262L8.67969 6.11621L9 5.84961L9.32031 6.11621L10 6.68262V2H8V6.68262Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconBookBookmarkLg;
