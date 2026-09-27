import * as React from 'react';
import type { IconProps } from './types';
const IconVolumeLarge = React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeLarge(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.96875 2.08401C10.7872 1.42928 12 2.01245 12 3.06057V12.9395C12 13.9876 10.7872 14.5708 9.96875 13.916L6.32422 11H3.5C2.6716 11 2.00003 10.3284 2 9.50002V6.50002C2 5.67163 2.67161 5.00007 3.5 5.00002H6.32422L9.96875 2.08401ZM11 3.06057C11 2.85095 10.7574 2.73431 10.5938 2.86526L6.8125 5.89065C6.72387 5.9615 6.61347 6.00001 6.5 6.00002H3.5C3.22387 6.00004 3 6.22389 3 6.50002V9.50002C3.00003 9.77614 3.22388 10 3.5 10H6.5L6.58398 10.0069C6.66712 10.021 6.74594 10.0561 6.8125 10.1094L10.5938 13.1348C10.7574 13.2657 11 13.1491 11 12.9395V3.06057Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconVolumeLarge;
