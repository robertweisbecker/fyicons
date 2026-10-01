import * as React from 'react';
import type { IconProps } from './types';
const IconEjectFilled = React.forwardRef<SVGSVGElement, IconProps>(function IconEjectFilled(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.7504 11C13.3027 11 13.7504 11.4478 13.7504 12V13C13.7504 13.5523 13.3026 14 12.7504 14H3.25037C2.6981 14 2.25039 13.5523 2.25037 13V12C2.25037 11.4478 2.69808 11 3.25037 11H12.7504ZM7.31775 2.38872C7.70218 2.02943 8.29964 2.02925 8.68396 2.38872L13.9008 7.26958C14.5631 7.88917 14.125 8.99981 13.2181 9.00005H2.78357C1.87652 9.00005 1.43761 7.88925 2.09998 7.26958L7.31775 2.38872Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconEjectFilled;
