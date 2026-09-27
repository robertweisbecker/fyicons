import * as React from 'react';
import type { IconProps } from './types';
const IconCaretUpRounded = React.forwardRef<SVGSVGElement, IconProps>(function IconCaretUpRounded(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.6748 4.12006C7.86196 3.95994 8.13808 3.95987 8.3252 4.12006L11.8252 7.12006C11.984 7.25621 12.0413 7.47758 11.9688 7.67377C11.8961 7.86975 11.709 7.99987 11.5 7.99994H4.5C4.2909 7.99994 4.10395 7.86979 4.03125 7.67377C3.95866 7.47753 4.01594 7.25623 4.1748 7.12006L7.6748 4.12006Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCaretUpRounded;
