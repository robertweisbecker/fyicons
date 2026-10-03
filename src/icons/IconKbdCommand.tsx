import * as React from 'react';
import type { IconProps } from './types';
const IconKbdCommand = React.forwardRef<SVGSVGElement, IconProps>(function IconKbdCommand(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11.5 2C12.8807 2 14 3.11929 14 4.5C14 5.88071 12.8807 7 11.5 7H10V9H11.5C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5V10H7V11.5C7 12.8807 5.88071 14 4.5 14C3.11929 14 2 12.8807 2 11.5C2 10.1193 3.11929 9 4.5 9H6V7H4.5C3.11929 7 2 5.88071 2 4.5C2 3.11929 3.11929 2 4.5 2C5.88071 2 7 3.11929 7 4.5V6H9V4.5C9 3.11929 10.1193 2 11.5 2ZM4.5 10C3.67157 10 3 10.6716 3 11.5C3 12.3284 3.67157 13 4.5 13C5.32843 13 6 12.3284 6 11.5V10H4.5ZM10 11.5C10 12.3284 10.6716 13 11.5 13C12.3284 13 13 12.3284 13 11.5C13 10.6716 12.3284 10 11.5 10H10V11.5ZM7 9H9V7H7V9ZM4.5 3C3.67157 3 3 3.67157 3 4.5C3 5.32843 3.67157 6 4.5 6H6V4.5C6 3.67157 5.32843 3 4.5 3ZM11.5 3C10.6716 3 10 3.67157 10 4.5V6H11.5C12.3284 6 13 5.32843 13 4.5C13 3.67157 12.3284 3 11.5 3Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconKbdCommand;
