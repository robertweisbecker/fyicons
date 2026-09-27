import * as React from 'react';
import type { IconProps } from './types';
const IconHeartWideFilled = React.forwardRef<SVGSVGElement, IconProps>(function IconHeartWideFilled(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.5498 2.61141C10.371 2.10347 11.2668 2.03535 12.1299 2.26669C13.8513 2.72829 15 4.27716 15 6.00008C14.9999 7.69564 14.1032 9.06037 12.8564 10.2843C11.6194 11.4986 9.94868 12.6564 8.30078 13.8995C8.12274 14.0335 7.87726 14.0335 7.69922 13.8995C6.05132 12.6564 4.38059 11.4986 3.14355 10.2843C1.89678 9.06037 1.0001 7.69564 1 6.00008C1.00001 4.27716 2.14866 2.72829 3.87012 2.26669C4.7332 2.03535 5.62896 2.10347 6.4502 2.61141C7.03806 2.97509 7.55834 3.54618 8 4.33407C8.44166 3.54618 8.96194 2.97509 9.5498 2.61141Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconHeartWideFilled;
