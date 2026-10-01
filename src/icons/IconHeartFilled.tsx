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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.26715 14.8106C8.10429 14.9287 7.89235 14.9314 7.7265 14.8176C6.43469 13.9309 1.00007 9.96525 1 6.00072C0.99996 3.79159 2.7981 1.82201 5 2.00072C6.40333 2.11462 7.5 3.00073 7.99961 4.00079C8.5 3.00073 9.5964 2.11443 11 2.00072C13.2019 1.82234 14.9833 3.79165 15 6.00072C15.028 9.69129 9.55221 13.8789 8.26715 14.8106Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconHeartFilled;
