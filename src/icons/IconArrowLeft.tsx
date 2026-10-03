import * as React from 'react';
import type { IconProps } from './types';
const IconArrowLeft = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowLeft(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.64648 3.64663C6.84173 3.45145 7.15827 3.45145 7.35352 3.64663C7.54875 3.84187 7.54871 4.1584 7.35352 4.35366L4.20703 7.50014H13.5C13.7761 7.50014 14 7.724 14 8.00014C14 8.27629 13.7761 8.50014 13.5 8.50014H4.20703L7.35352 11.6466C7.54878 11.8419 7.54878 12.1584 7.35352 12.3537C7.15825 12.5489 6.84175 12.5489 6.64648 12.3537L2.64648 8.35366L2.58398 8.27749C2.52963 8.19596 2.5 8.09958 2.5 8.00014C2.5 7.86754 2.55272 7.7404 2.64648 7.64663L6.64648 3.64663Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowLeft;
