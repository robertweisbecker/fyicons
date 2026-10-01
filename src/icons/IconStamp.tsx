import * as React from 'react';
import type { IconProps } from './types';
const IconStamp = React.forwardRef<SVGSVGElement, IconProps>(function IconStamp(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C9.24264 1 10.25 2.00736 10.25 3.25C10.25 3.85619 10.0095 4.4063 9.62012 4.80957C9.36732 5.07135 9.25 5.28261 9.25 5.46094V7.11816C9.72589 7.28936 10.1285 7.63782 10.3623 8.10547L10.9043 9.19141C11.0376 9.45828 11.0647 9.74018 11.0107 10H12C13.1046 10 14 10.8954 14 12V12.5C14 13.3284 13.3284 14 12.5 14H12C12 14.5523 11.5523 15 11 15H5C4.44772 15 4 14.5523 4 14H3.5C2.67157 14 2 13.3284 2 12.5V12C2 10.8954 2.89543 10 4 10H4.98926C4.93533 9.74018 4.96238 9.45828 5.0957 9.19141L5.6377 8.10547L5.70508 7.98145C5.9448 7.57611 6.3171 7.27384 6.75 7.11816V5.46094C6.75 5.28261 6.63268 5.07135 6.37988 4.80957C5.99054 4.4063 5.75 3.85619 5.75 3.25C5.75 2.00736 6.75736 1 8 1ZM7.42676 8C7.09525 8.0001 6.7884 8.1639 6.60352 8.43164L6.53223 8.55273L5.99023 9.63867C5.9074 9.80476 6.02804 10 6.21387 10C6.49001 10 6.71387 10.2239 6.71387 10.5C6.71387 10.7761 6.49001 11 6.21387 11H4C3.44772 11 3 11.4477 3 12V12.5C3 12.7761 3.22386 13 3.5 13H12.5C12.7761 13 13 12.7761 13 12.5V12C13 11.4477 12.5523 11 12 11H9.78613C9.50999 11 9.28613 10.7761 9.28613 10.5C9.28613 10.2239 9.50999 10 9.78613 10C9.97196 10 10.0926 9.80476 10.0098 9.63867L9.46777 8.55273C9.31973 8.25664 9.03618 8.05554 8.71387 8.00977L8.57324 8H7.42676ZM8 2C7.30964 2 6.75 2.55964 6.75 3.25C6.75 3.58629 6.88253 3.89045 7.09961 4.11523C7.38282 4.40854 7.75 4.86773 7.75 5.46094V7H8.25V5.46094C8.25 4.86773 8.61718 4.40854 8.90039 4.11523C9.11747 3.89045 9.25 3.58629 9.25 3.25C9.25 2.55964 8.69036 2 8 2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconStamp;
