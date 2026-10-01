import * as React from 'react';
import type { IconProps } from './types';
const IconFork2 = React.forwardRef<SVGSVGElement, IconProps>(function IconFork2(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.14648 9.14687C9.34175 8.95161 9.65825 8.95161 9.85352 9.14687L13 12.2934V10.5004C13 10.2242 13.2239 10.0004 13.5 10.0004C13.7761 10.0004 14 10.2242 14 10.5004V13.5004C13.9998 13.7764 13.776 14.0004 13.5 14.0004H10.5C10.224 14.0004 10.0002 13.7764 10 13.5004C10 13.2242 10.2239 13.0004 10.5 13.0004H12.293L9.14648 9.8539C8.95129 9.65871 8.95142 9.34215 9.14648 9.14687ZM13.5 2.00039C13.7761 2.00039 14 2.22425 14 2.50039V5.50039C13.9998 5.77635 13.776 6.00039 13.5 6.00039C13.224 6.00034 13.0002 5.77632 13 5.50039V3.70742L10.0244 6.68301C9.18064 7.52649 8.03585 8.00029 6.84277 8.00039H2.5C2.22403 8.00034 2.00021 7.77632 2 7.50039C2 7.22428 2.2239 7.00044 2.5 7.00039H6.84277C7.77064 7.00029 8.66114 6.63193 9.31738 5.97598L12.293 3.00039H10.4502C10.1742 3.00034 9.95041 2.77632 9.9502 2.50039C9.9502 2.22428 10.1741 2.00044 10.4502 2.00039H13.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconFork2;
