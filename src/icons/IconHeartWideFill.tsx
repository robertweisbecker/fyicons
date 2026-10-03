import * as React from 'react';
import type { IconProps } from './types';
const IconHeartWideFill = React.forwardRef<SVGSVGElement, IconProps>(function IconHeartWideFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.5498 2.61133C10.371 2.10339 11.2668 2.03526 12.1299 2.2666C13.8513 2.7282 15 4.27708 15 6C14.9999 7.69556 14.1032 9.06028 12.8564 10.2842C11.6194 11.4985 9.94868 12.6563 8.30078 13.8994C8.12274 14.0334 7.87726 14.0334 7.69922 13.8994C6.05132 12.6563 4.38059 11.4985 3.14355 10.2842C1.89678 9.06028 1.0001 7.69556 1 6C1.00001 4.27708 2.14866 2.7282 3.87012 2.2666C4.7332 2.03526 5.62896 2.10339 6.4502 2.61133C7.03806 2.975 7.55834 3.54609 8 4.33398C8.44166 3.54609 8.96194 2.975 9.5498 2.61133Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconHeartWideFill;
