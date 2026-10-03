import * as React from 'react';
import type { IconProps } from './types';
const IconGraduationCap = React.forwardRef<SVGSVGElement, IconProps>(function IconGraduationCap(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.89355 3.01172C7.99868 2.98887 8.10951 3.00009 8.20898 3.0459L14.71 6.0459C14.8867 6.12774 15 6.30519 15 6.5C14.9999 6.69479 14.8867 6.87233 14.71 6.9541L12.6221 7.91699C12.8637 8.30595 13 8.76072 13 9.23633V13.5C12.9999 13.776 12.776 13.9999 12.5 14C12.2239 14 12.0001 13.776 12 13.5V11.6377C11.8944 11.7206 11.7806 11.8069 11.6562 11.8916C10.841 12.4469 9.6196 12.9999 8 13C5.46197 13 3.91024 11.6453 3.34863 11.0469C3.1007 10.7826 3.00005 10.4443 3 10.1289V7.74316L1.29004 6.9541C1.11321 6.87234 1.00009 6.69482 1 6.5C1 6.30509 1.11314 6.12769 1.29004 6.0459L7.79004 3.0459L7.89355 3.01172ZM4 10.1289C4.00005 10.2389 4.03493 10.3162 4.07812 10.3623C4.53868 10.8531 5.8448 12 8 12C9.38 11.9999 10.4091 11.5318 11.0938 11.0654C11.437 10.8316 11.6929 10.5979 11.8613 10.4258C11.9183 10.3676 11.9634 10.3149 12 10.2734V9.23633C12 8.90727 11.8896 8.59613 11.7002 8.3418L8.20898 9.9541C8.07622 10.0152 7.92279 10.0153 7.79004 9.9541L4 8.2041V10.1289ZM2.69336 6.5L7.99902 8.94824L10.7441 7.68066L9.27637 6.94727C9.02941 6.82379 8.92931 6.52334 9.05273 6.27637C9.17623 6.02938 9.47664 5.92924 9.72363 6.05273L11.6182 7C11.711 7.04644 11.7997 7.09868 11.8848 7.15527L13.3057 6.5L7.99902 4.05078L2.69336 6.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconGraduationCap;
