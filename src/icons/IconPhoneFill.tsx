import * as React from 'react';
import type { IconProps } from './types';
const IconPhoneFill = React.forwardRef<SVGSVGElement, IconProps>(function IconPhoneFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M2.81152 1.3479C3.47102 0.79832 4.45646 0.913295 4.97168 1.59985L6.36719 3.46118C7.07556 4.40599 7.02635 5.71776 6.24902 6.60669L6.15039 6.71899C5.98392 6.90947 5.98612 7.19496 6.15527 7.38306L7.31543 8.67017L8.61621 9.84204C8.80441 10.0114 9.08976 10.0137 9.28027 9.84692L9.3916 9.74927C10.2805 8.9715 11.593 8.92161 12.5381 9.63013L14.3994 11.0266C15.0861 11.5417 15.2017 12.5272 14.6523 13.1868L14.4932 13.3772C13.3533 14.7455 11.5131 15.3127 9.80078 14.8235C9.06601 14.6135 8.39685 14.2193 7.85645 13.679L5.09961 10.9221C5.09558 10.9183 5.09084 10.9153 5.08691 10.9114L2.31934 8.1438C1.77893 7.60325 1.38479 6.93344 1.1748 6.19849C0.685865 4.48635 1.25318 2.64701 2.62109 1.50708L2.81152 1.3479Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPhoneFill;
