import * as React from 'react';
import type { IconProps } from './types';
const IconChevronDownSm = React.forwardRef<SVGSVGElement, IconProps>(function IconChevronDownSm(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11.1465 6.14652C11.3417 5.95126 11.6583 5.95126 11.8535 6.14652C12.0487 6.34179 12.0488 6.6583 11.8535 6.85355L8.35352 10.3536C8.15827 10.5488 7.84175 10.5488 7.64648 10.3536L4.14648 6.85355C3.95122 6.65829 3.95122 6.34178 4.14648 6.14652C4.34175 5.95126 4.65825 5.95126 4.85352 6.14652L8 9.29301L11.1465 6.14652Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconChevronDownSm;
