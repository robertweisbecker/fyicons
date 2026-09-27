import * as React from 'react';
import type { IconProps } from './types';
const IconBell2 = React.forwardRef<SVGSVGElement, IconProps>(function IconBell2(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C8.9665 1 9.75 1.7835 9.75 2.75C9.75 2.95959 9.71138 3.15987 9.64355 3.3457C11.0885 3.97944 12.0994 5.41996 12.0996 7.09961V8.75781C12.0996 9.08708 12.2101 9.40703 12.4131 9.66602L13.7598 11.3828L13.8447 11.5098C14.2138 12.1561 13.7537 12.9996 12.9727 13H10L9.98926 13.2041C9.887 14.2128 9.03562 15 8 15C6.96435 15 6.11301 14.2128 6.01074 13.2041L6 13H3.02734C2.19349 13 1.72569 12.0391 2.24023 11.3828L3.58594 9.66602C3.78897 9.40704 3.89941 9.08721 3.89941 8.75781V7.09961C3.89959 5.41993 4.91052 3.97848 6.35547 3.34473C6.28801 3.15904 6.25 2.95898 6.25 2.75C6.25 1.78352 7.03354 1.00003 8 1ZM7 13C7 13.5523 7.44772 14 8 14C8.55225 14 9 13.5523 9 13H7ZM8 2C7.58581 2.00003 7.25 2.33581 7.25 2.75C7.25 2.91399 7.30258 3.06469 7.39258 3.18848C7.62021 3.50159 7.51132 4.00446 7.08105 4.1377C5.8171 4.52924 4.89958 5.70815 4.89941 7.09961V8.75781C4.89941 9.3106 4.71432 9.84792 4.37305 10.2832L3.02734 12H12.9727L11.626 10.2832C11.2849 9.84801 11.0996 9.31056 11.0996 8.75781V7.09961C11.0994 5.70791 10.1821 4.52907 8.91797 4.1377C8.48762 4.00444 8.37819 3.50072 8.60645 3.1875C8.69681 3.06349 8.75 2.91355 8.75 2.75C8.75 2.33579 8.41421 2 8 2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconBell2;
