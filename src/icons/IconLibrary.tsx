import * as React from 'react';
import type { IconProps } from './types';
const IconLibrary = React.forwardRef<SVGSVGElement, IconProps>(function IconLibrary(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.5 1C8.32256 1 8.9896 1.6621 8.99902 2.48242L10.7588 1.96289C11.2884 1.80647 11.8445 2.10906 12.001 2.63867L14.835 12.2285C14.9912 12.758 14.6885 13.3141 14.1592 13.4707L12.2412 14.0381C11.7118 14.1945 11.1557 13.8916 10.999 13.3623L9 6.59668V12.5C9 13.3284 8.32843 14 7.5 14H6.5C6.11515 14 5.76555 13.8535 5.5 13.6152C5.23445 13.8535 4.88485 14 4.5 14H3.5C2.67157 14 2 13.3284 2 12.5V4.5C2 3.67157 2.67157 3 3.5 3H4.5C4.6755 3 4.84347 3.03153 5 3.08691V2.5C5 1.67157 5.67157 1 6.5 1H7.5ZM11.457 11.3838L11.958 13.0791L13.876 12.5117L13.3721 10.8096L11.457 11.3838ZM3.5 4C3.22386 4 3 4.22386 3 4.5V12.5C3 12.7761 3.22386 13 3.5 13H4.5C4.77614 13 5 12.7761 5 12.5V4.5C5 4.22386 4.77614 4 4.5 4H3.5ZM6.5 2C6.22386 2 6 2.22386 6 2.5V12.5C6 12.7761 6.22386 13 6.5 13H7.5C7.77614 13 8 12.7761 8 12.5V2.5C8 2.22386 7.77614 2 7.5 2H6.5ZM10.1172 6.84961L11.1738 10.4258L13.0889 9.85059L12.0469 6.32324L10.1172 6.84961ZM9.12402 3.48828L9.83301 5.88965L11.7637 5.36328L11.042 2.92188L9.12402 3.48828Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLibrary;
