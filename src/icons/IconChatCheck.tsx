import * as React from 'react';
import type { IconProps } from './types';
const IconChatCheck = React.forwardRef<SVGSVGElement, IconProps>(function IconChatCheck(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.5 2C12.433 2 14 3.567 14 5.5V9.5C14 11.433 12.433 13 10.5 13H9.66699L8.5752 13.8184C8.0104 14.242 7.36654 14.5484 6.68164 14.7197L6.27246 14.8223C5.6078 14.9884 5.02065 14.355 5.2373 13.7051L5.30176 13.5127C5.36062 13.3361 5.33895 13.1462 5.24902 12.9893C3.43323 12.8605 2 11.3486 2 9.5V5.5C2 3.567 3.567 2 5.5 2H10.5ZM5.5 3C4.11929 3 3 4.11929 3 5.5V9.5C3 10.8807 4.11929 12 5.5 12H5.70703L5.85352 12.1465C6.28527 12.5782 6.44044 13.2125 6.26074 13.7939L6.43848 13.75C6.99425 13.6111 7.51729 13.3623 7.97559 13.0186L9.2002 12.0996L9.26855 12.0566C9.33963 12.0195 9.41903 12 9.5 12H10.5C11.8807 12 13 10.8807 13 9.5V5.5C13 4.11929 11.8807 3 10.5 3H5.5ZM9.31543 5.75195C9.45246 5.51255 9.75845 5.42877 9.99805 5.56543C10.2375 5.70238 10.3211 6.00842 10.1846 6.24805L8.18457 9.74805C8.10728 9.88321 7.97071 9.97437 7.81641 9.99512C7.66202 10.0158 7.50667 9.96361 7.39648 9.85352L5.89648 8.35352C5.70142 8.15826 5.70134 7.84169 5.89648 7.64648C6.0917 7.4515 6.40831 7.45147 6.60352 7.64648L7.63965 8.68262L9.31543 5.75195Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconChatCheck;
