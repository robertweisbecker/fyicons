import * as React from 'react';
import type { IconProps } from './types';
const IconBrowser = React.forwardRef<SVGSVGElement, IconProps>(function IconBrowser(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12 2C13.1046 2 14 2.89543 14 4V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V4C2 2.89543 2.89543 2 4 2H12ZM3 7V12C3 12.5523 3.44772 13 4 13H12C12.5523 13 13 12.5523 13 12V7H3ZM4 3C3.44772 3 3 3.44772 3 4V6H13V4C13 3.44772 12.5523 3 12 3H4ZM4.5 3.75C4.91421 3.75 5.25 4.08579 5.25 4.5C5.25 4.91421 4.91421 5.25 4.5 5.25C4.08579 5.25 3.75 4.91421 3.75 4.5C3.75 4.08579 4.08579 3.75 4.5 3.75ZM6.5 3.75C6.91421 3.75 7.25 4.08579 7.25 4.5C7.25 4.91421 6.91421 5.25 6.5 5.25C6.08579 5.25 5.75 4.91421 5.75 4.5C5.75 4.08579 6.08579 3.75 6.5 3.75ZM8.5 3.75C8.91421 3.75 9.25 4.08579 9.25 4.5C9.25 4.91421 8.91421 5.25 8.5 5.25C8.08579 5.25 7.75 4.91421 7.75 4.5C7.75 4.08579 8.08579 3.75 8.5 3.75Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconBrowser;
