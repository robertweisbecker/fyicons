import * as React from 'react';
import type { IconProps } from './types';
const IconTextUnderline = React.forwardRef<SVGSVGElement, IconProps>(function IconTextUnderline(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.5 14C12.7761 14 13 14.2239 13 14.5C13 14.7761 12.7761 15 12.5 15H3.5C3.22386 15 3 14.7761 3 14.5C3 14.2239 3.22386 14 3.5 14H12.5ZM12 2C12.2761 2 12.5 2.22386 12.5 2.5V7.99023C12.4999 9.05941 12.0118 10.1221 11.1562 10.8633C10.3086 11.5975 9.17214 12 8 12C6.82786 12 5.69136 11.5975 4.84375 10.8633C3.98818 10.1221 3.50007 9.05941 3.5 7.99023V2.5C3.5 2.22386 3.72386 2 4 2C4.27614 2 4.5 2.22386 4.5 2.5V7.99023C4.50007 8.7588 4.85452 9.54912 5.49902 10.1074C6.15169 10.6727 7.05048 11 8 11C8.94952 11 9.84831 10.6727 10.501 10.1074C11.1455 9.54912 11.4999 8.7588 11.5 7.99023V2.5C11.5 2.22386 11.7239 2 12 2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconTextUnderline;
