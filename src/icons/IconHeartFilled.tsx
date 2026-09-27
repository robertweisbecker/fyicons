import * as React from 'react';
import type { IconProps } from './types';
const IconHeartFilled = React.forwardRef<SVGSVGElement, IconProps>(function IconHeartFilled(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.55309 14.8303C8.22234 15.0893 7.77228 15.0954 7.43566 14.8441C5.77196 13.6021 1.00007 9.71568 1 6.00073C0.99996 3.79159 2.7981 1.82202 5 2.00073C6.40333 2.11463 7.5 3.00073 7.99961 4.00079C8.5 3.00073 9.5964 2.11444 11 2.00073C13.2019 1.82235 14.9833 3.79166 15 6.00073C15.0262 9.46186 10.2118 13.5315 8.55309 14.8303Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconHeartFilled;
