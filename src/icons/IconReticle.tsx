import * as React from 'react';
import type { IconProps } from './types';
const IconReticle = React.forwardRef<SVGSVGElement, IconProps>(function IconReticle(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C8.27614 1 8.5 1.22386 8.5 1.5V3.02441C10.8622 3.25894 12.7411 5.13777 12.9756 7.5H14.5C14.7761 7.5 15 7.72386 15 8C15 8.27614 14.7761 8.5 14.5 8.5H12.9756C12.7411 10.8622 10.8622 12.74 8.5 12.9746V14.5C8.5 14.7761 8.27614 15 8 15C7.72386 15 7.5 14.7761 7.5 14.5V12.9746C5.13782 12.74 3.25893 10.8622 3.02441 8.5H1.5C1.22386 8.5 1 8.27614 1 8C1 7.72386 1.22386 7.5 1.5 7.5H3.02441C3.25894 5.13777 5.13777 3.25894 7.5 3.02441V1.5C7.5 1.22386 7.72386 1 8 1ZM8.5 5.5C8.5 5.77614 8.27614 6 8 6C7.72386 6 7.5 5.77614 7.5 5.5V4.03125C5.69071 4.25688 4.25791 5.69073 4.03223 7.5H5.5C5.77614 7.5 6 7.72386 6 8C6 8.27614 5.77614 8.5 5.5 8.5H4.03223C4.25791 10.3092 5.69077 11.7421 7.5 11.9678V10.5C7.5 10.2239 7.72386 10 8 10C8.27614 10 8.5 10.2239 8.5 10.5V11.9678C10.3092 11.7421 11.7421 10.3092 11.9678 8.5H10.5C10.2239 8.5 10 8.27614 10 8C10 7.72386 10.2239 7.5 10.5 7.5H11.9678C11.7421 5.69073 10.3093 4.25688 8.5 4.03125V5.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconReticle;
