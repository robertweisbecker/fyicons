import * as React from 'react';
import type { IconProps } from './types';
const IconArrowDown = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowDown(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.99996 3C8.2761 3 8.49996 3.22386 8.49996 3.5V12.793L11.6464 9.64648C11.8417 9.45122 12.1582 9.45122 12.3535 9.64648C12.5487 9.84175 12.5487 10.1583 12.3535 10.3535L8.35348 14.3535L8.27535 14.418C8.08127 14.5461 7.81731 14.5244 7.64645 14.3535L3.64645 10.3535C3.45118 10.1583 3.45118 9.84175 3.64645 9.64648C3.84171 9.45122 4.15822 9.45122 4.35348 9.64648L7.49996 12.793V3.5C7.49996 3.22386 7.72382 3 7.99996 3Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowDown;
