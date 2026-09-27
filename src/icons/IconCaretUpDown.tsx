import * as React from 'react';
import type { IconProps } from './types';
const IconCaretUpDown = React.forwardRef<SVGSVGElement, IconProps>(function IconCaretUpDown(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.19948 12.733C8.09948 12.8663 7.89948 12.8663 7.79948 12.733L5.29948 9.39968C5.17587 9.23487 5.29347 8.99968 5.49948 8.99968H10.4995C10.7055 8.99968 10.8231 9.23487 10.6995 9.39968L8.19948 12.733ZM10.6995 6.59968C10.8231 6.76449 10.7055 6.99968 10.4995 6.99968H5.49948C5.29347 6.99968 5.17587 6.76449 5.29948 6.59968L7.79948 3.26634C7.89948 3.13301 8.09948 3.13301 8.19948 3.26634L10.6995 6.59968Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCaretUpDown;
