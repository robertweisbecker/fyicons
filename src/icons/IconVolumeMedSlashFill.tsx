import * as React from 'react';
import type { IconProps } from './types';
const IconVolumeMedSlashFill = React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeMedSlashFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9 10.4139V12.1874C8.99966 13.0226 8.03554 13.4892 7.37988 12.9716L4.25 10.5009H2.5C1.67166 10.5009 1.00013 9.82918 1 9.00085V7.00085C1.00007 6.17253 1.67166 5.50092 2.5 5.50085H4.08691L9 10.4139ZM10.4951 6.06433C10.7975 6.14162 11.0802 6.2892 11.3184 6.49792C11.683 6.81772 11.919 7.26025 11.9824 7.74109C12.0457 8.22191 11.9324 8.70987 11.6631 9.11316C11.5115 9.33994 11.314 9.52823 11.0889 9.67468L10.4502 9.03601C10.5098 8.92108 10.5971 8.8147 10.6904 8.72546C10.7429 8.67535 10.7902 8.61863 10.8311 8.5575C10.9656 8.35585 11.0229 8.11134 10.9912 7.87097C10.9594 7.63081 10.8413 7.40963 10.6592 7.24988C10.6038 7.20135 10.5432 7.15972 10.4795 7.12488C10.2372 6.99248 10 6.77795 10 6.50183C10.0003 6.22593 10.2277 5.99606 10.4951 6.06433ZM7.37988 3.02917C8.03562 2.51157 8.9999 2.97894 9 3.81433V7.58582L5.73828 4.3241L7.37988 3.02917Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M2.5 2.5L13.5 13.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /></svg>;
});
export default IconVolumeMedSlashFill;
