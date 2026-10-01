import * as React from 'react';
import type { IconProps } from './types';
const IconChevronUp = React.forwardRef<SVGSVGElement, IconProps>(function IconChevronUp(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.1464 9.85352C12.3417 10.0488 12.6582 10.0488 12.8535 9.85352C13.0487 9.65825 13.0487 9.34173 12.8535 9.14648L8.35345 4.64648C8.1582 4.45129 7.84167 4.45129 7.64642 4.64648L3.14642 9.14648C2.95118 9.34173 2.95121 9.65825 3.14642 9.85352C3.34168 10.0488 3.65819 10.0488 3.85345 9.85352L7.99994 5.70703L12.1464 9.85352Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconChevronUp;
