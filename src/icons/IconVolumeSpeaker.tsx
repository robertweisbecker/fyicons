import * as React from 'react';
import type { IconProps } from './types';
const IconVolumeSpeaker = React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeSpeaker(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.9688 2.08401C11.7872 1.42928 13 2.01245 13 3.06057V12.9395C13 13.9876 11.7872 14.5708 10.9688 13.916L7.32422 11H4.5C3.6716 11 3.00003 10.3284 3 9.50002V6.50002C3 5.67163 3.67161 5.00007 4.5 5.00002H7.32422L10.9688 2.08401ZM12 3.06057C12 2.85095 11.7574 2.73431 11.5938 2.86526L7.8125 5.89065C7.72387 5.9615 7.61347 6.00001 7.5 6.00002H4.5C4.22387 6.00004 4 6.22389 4 6.50002V9.50002C4.00003 9.77614 4.22388 10 4.5 10H7.5L7.58398 10.0069C7.66712 10.021 7.74594 10.0561 7.8125 10.1094L11.5938 13.1348C11.7574 13.2657 12 13.1491 12 12.9395V3.06057Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconVolumeSpeaker;
