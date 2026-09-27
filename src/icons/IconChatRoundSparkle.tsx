import * as React from 'react';
import type { IconProps } from './types';
const IconChatRoundSparkle = React.forwardRef<SVGSVGElement, IconProps>(function IconChatRoundSparkle(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.99902 1C11.865 1.00001 14.999 4.13402 14.999 8C14.999 11.866 11.865 15 7.99902 15C7.02066 14.9999 6.08856 14.7982 5.24219 14.4346C5.01242 14.3359 4.70289 14.3592 4.40723 14.5098C3.69777 14.8711 2.83931 15 1.91309 15C1.44412 15 1.13532 14.6774 1.03613 14.3291C0.940691 13.9937 1.01878 13.5875 1.31836 13.3057L1.41895 13.1963C1.52166 13.07 1.6293 12.8944 1.72852 12.6797C1.8578 12.3998 1.95834 12.0854 2.01465 11.7949C2.02723 11.73 2.01438 11.6309 1.94141 11.5049C1.34359 10.4742 0.999023 9.27685 0.999023 8C0.999023 4.13412 4.1333 1.00026 7.99902 1ZM7.99902 2C4.68548 2.00024 1.99902 4.68649 1.99902 8C1.99902 9.09489 2.29334 10.1197 2.80566 11.0029C2.95711 11.264 3.06965 11.6107 2.99707 11.9854C2.92537 12.3553 2.79876 12.7468 2.63574 13.0996C2.48325 13.4295 2.28338 13.7553 2.04004 13.9971C2.83003 13.9855 3.46745 13.8655 3.95312 13.6182C4.43636 13.3721 5.06338 13.2693 5.63672 13.5156C6.36123 13.8269 7.15928 13.9999 7.99902 14C11.3127 14 13.999 11.3137 13.999 8C13.999 4.6863 11.3127 2.00001 7.99902 2ZM8 5C8.23541 5 8.43851 5.16445 8.48828 5.39453C8.71745 6.45427 9.54576 7.28246 10.6055 7.51172C10.8356 7.56147 11 7.76458 11 8C11 8.23542 10.8356 8.43853 10.6055 8.48828C9.54576 8.71754 8.71745 9.54573 8.48828 10.6055C8.43851 10.8355 8.23541 11 8 11C7.76468 10.9999 7.56145 10.8355 7.51172 10.6055C7.28251 9.54568 6.45433 8.71747 5.39453 8.48828C5.16454 8.43845 5 8.23535 5 8C5 7.76465 5.16454 7.56155 5.39453 7.51172C6.45433 7.28253 7.28251 6.45432 7.51172 5.39453L7.53711 5.31152C7.61256 5.12595 7.79406 5.00009 8 5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconChatRoundSparkle;
