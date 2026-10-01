import * as React from 'react';
import type { IconProps } from './types';
const IconArrowToBoxDownRight = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowToBoxDownRight(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M2 10.5C2 10.2239 2.22386 10 2.5 10C2.77613 10 3 10.2239 3 10.5V11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V4.5C13 3.67159 12.3284 3.00002 11.5 3H10.5C10.2239 3 10 2.77614 10 2.5C10 2.22386 10.2239 2 10.5 2H11.5C12.8807 2.00002 14 3.1193 14 4.5V11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5V10.5ZM2.14648 2.85449C1.95122 2.65923 1.95122 2.34272 2.14648 2.14746C2.34175 1.9522 2.65825 1.9522 2.85352 2.14746L6.99902 6.29297V3.5C6.99902 3.22386 7.22288 3 7.49902 3C7.77517 3 7.99902 3.22386 7.99902 3.5V7.5C7.99902 7.77614 7.77517 8 7.49902 8H3.49902C3.22288 8 2.99902 7.77614 2.99902 7.5C2.99902 7.22386 3.22288 7 3.49902 7H6.29199L2.14648 2.85449Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowToBoxDownRight;
