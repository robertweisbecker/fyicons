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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.14648 3.14652C7.34175 2.95126 7.65825 2.95126 7.85352 3.14652C8.04874 3.34179 8.04877 3.6583 7.85352 3.85355L4.20703 7.50004H13.5C13.7761 7.50006 14 7.72391 14 8.00004C14 8.27615 13.7761 8.50002 13.5 8.50004H4.20703L7.85352 12.1465C8.04874 12.3418 8.04876 12.6583 7.85352 12.8536C7.65827 13.0488 7.34175 13.0488 7.14648 12.8536L2.64648 8.35355C2.45122 8.15829 2.45122 7.84178 2.64648 7.64652L7.14648 3.14652Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowLeft;
