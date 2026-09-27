import * as React from 'react';
import type { IconProps } from './types';
const IconExternalLink2 = React.forwardRef<SVGSVGElement, IconProps>(function IconExternalLink2(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M1.5 10.7998C1.77608 10.7998 1.99989 11.0238 2 11.2998V13.25C2 13.6642 2.33579 14 2.75 14H4.7002C4.97625 14.0001 5.2002 14.2239 5.2002 14.5C5.2002 14.7761 4.97625 14.9999 4.7002 15H2.75C1.7835 15 1 14.2165 1 13.25V11.2998C1.00011 11.0238 1.22392 10.7998 1.5 10.7998ZM10.8975 11C10.9607 11.0838 11 11.1868 11 11.2998V13.25C11 14.2165 10.2165 15 9.25 15H7.2998C7.02375 14.9999 6.7998 14.7761 6.7998 14.5C6.7998 14.2239 7.02375 14.0001 7.2998 14H9.25C9.66421 14 10 13.6642 10 13.25V11.2998C10 11.1868 10.0393 11.0838 10.1025 11H7C5.89543 11 5 10.1046 5 9V5.89648C4.91616 5.95998 4.81343 5.99996 4.7002 6H2.75C2.33579 6 2 6.33579 2 6.75V8.7002C1.99989 8.97625 1.77608 9.2002 1.5 9.2002C1.22392 9.2002 1.00011 8.97625 1 8.7002V6.75C1 5.7835 1.7835 5 2.75 5H4.7002C4.81322 5.00004 4.91624 5.03926 5 5.10254V3C5 1.89543 5.89543 1 7 1H13C14.1046 1 15 1.89543 15 3V9C15 10.1046 14.1046 11 13 11H10.8975ZM7 2C6.44772 2 6 2.44772 6 3V9C6 9.55228 6.44772 10 7 10H13C13.5523 10 14 9.55228 14 9V3C14 2.44772 13.5523 2 13 2H7ZM12.5 3C12.7761 3 13 3.22386 13 3.5V6.5C13 6.77614 12.7761 7 12.5 7C12.2239 7 12 6.77614 12 6.5V4.70703L8.35352 8.35352C8.15825 8.54878 7.84175 8.54878 7.64648 8.35352C7.45122 8.15825 7.45122 7.84175 7.64648 7.64648L11.293 4H9.5C9.22386 4 9 3.77614 9 3.5C9 3.22386 9.22386 3 9.5 3H12.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconExternalLink2;
