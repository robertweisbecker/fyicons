import * as React from 'react';
import type { IconProps } from './types';
const IconPenTip = React.forwardRef<SVGSVGElement, IconProps>(function IconPenTip(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<rect x={7} y={6} width={2} height={2} rx={1} fill="currentColor" fillOpacity={0.3} style={{
      fill: "currentColor",
      fillOpacity: 0.3
    }} /><path d="M9 1C9.23834 1 9.44349 1.16863 9.49023 1.40234L9.5 1.4502C9.79158 2.90809 10.6105 4.20748 11.7998 5.09961C11.9675 5.2254 12.0388 5.44274 11.9785 5.64355L10.6396 10.1055C11.4304 10.3723 12 11.1192 12 12V13.5C12 13.7761 11.7761 14 11.5 14H11.208L10.917 15H5.08301L4.79199 14H4.5C4.22386 14 4 13.7761 4 13.5V12C4 11.1196 4.56911 10.3726 5.35938 10.1055L4.02148 5.64355C3.96124 5.44274 4.03247 5.2254 4.2002 5.09961C5.38954 4.20748 6.20842 2.90809 6.5 1.4502L6.50977 1.40234L6.53418 1.31738C6.60805 1.12866 6.79148 1 7 1H9ZM6 11C5.44772 11 5 11.4477 5 12V13H11V12C11 11.4477 10.5523 11 10 11H6ZM7.40039 2C7.03406 3.44174 6.21933 4.72972 5.0752 5.68066L6.37109 10H9.62793L10.9238 5.68066C9.78 4.72977 8.96588 3.44149 8.59961 2H8.375V5.67773C8.952 5.84105 9.375 6.3707 9.375 7C9.375 7.75939 8.75939 8.375 8 8.375C7.24061 8.375 6.625 7.75939 6.625 7C6.625 6.3707 7.048 5.84105 7.625 5.67773V2H7.40039ZM8 6.375C7.65482 6.375 7.375 6.65482 7.375 7C7.375 7.34518 7.65482 7.625 8 7.625C8.34518 7.625 8.625 7.34518 8.625 7C8.625 6.65482 8.34518 6.375 8 6.375Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPenTip;
