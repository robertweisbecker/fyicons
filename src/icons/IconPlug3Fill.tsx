import * as React from 'react';
import type { IconProps } from './types';
const IconPlug3Fill = React.forwardRef<SVGSVGElement, IconProps>(function IconPlug3Fill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.5 3C12.7761 3.00007 13 3.2239 13 3.5V4H14.5C14.7761 4.00007 15 4.2239 15 4.5C15 4.7761 14.7761 4.99993 14.5 5H13V7H14.5C14.7761 7.00007 15 7.2239 15 7.5C15 7.7761 14.7761 7.99993 14.5 8H13V8.5C13 8.7761 12.7761 8.99993 12.5 9H10.8281C10.2978 8.99995 9.78909 8.78909 9.41406 8.41406L8.58594 7.58594C8.21097 7.21097 7.70215 7.00011 7.17188 7H6.5C6.2583 7 6.0563 6.82854 6.00977 6.60059L6 6.5H5.71582C5.34452 6.49999 4.97659 6.4289 4.63184 6.29102L3.63477 5.89258C2.85185 5.57941 2 6.1558 2 6.99902C2.00002 7.60233 2.4508 8.11071 3.0498 8.18262L6.02539 8.53906C7.28159 8.68988 8.16308 9.85202 7.9707 11.1025C7.80254 12.1941 6.86328 12.9999 5.75879 13H5.5C5.22386 13 5 12.7761 5 12.5C5 12.2239 5.22386 12 5.5 12H5.75879C6.36981 11.9999 6.88943 11.5541 6.98242 10.9502C7.08884 10.2584 6.60117 9.61569 5.90625 9.53223L2.93066 9.1748C1.8291 9.04255 1.00002 8.10851 1 6.99902C1 5.44836 2.5661 4.38802 4.00586 4.96387L5.00293 5.3623C5.22956 5.45294 5.47174 5.49999 5.71582 5.5H6C6 5.22386 6.22386 5 6.5 5H7.17188C7.70215 4.99989 8.21097 4.78903 8.58594 4.41406L9.41406 3.58594C9.78909 3.21091 10.2978 3.00005 10.8281 3H12.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPlug3Fill;
