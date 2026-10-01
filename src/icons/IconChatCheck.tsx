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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.5 2C12.433 2 14 3.567 14 5.5V9.5C14 11.433 12.433 13 10.5 13H9.66699L8.5752 13.8184C8.0104 14.242 7.36654 14.5484 6.68164 14.7197L6.27246 14.8223C5.6078 14.9884 5.02065 14.355 5.2373 13.7051L5.30176 13.5127C5.36062 13.3361 5.33895 13.1462 5.24902 12.9893C3.43323 12.8605 2 11.3486 2 9.5V5.5C2 3.567 3.567 2 5.5 2H10.5ZM5.5 3C4.11929 3 3 4.11929 3 5.5V9.5C3 10.8807 4.11929 12 5.5 12H5.70703L5.85352 12.1465C6.28527 12.5782 6.44044 13.2125 6.26074 13.7939L6.43848 13.75C6.99425 13.6111 7.51729 13.3623 7.97559 13.0186L9.2002 12.0996L9.26855 12.0566C9.33963 12.0195 9.41903 12 9.5 12H10.5C11.8807 12 13 10.8807 13 9.5V5.5C13 4.11929 11.8807 3 10.5 3H5.5ZM9.59277 5.70898C9.7533 5.48436 10.0663 5.43229 10.291 5.59277C10.5156 5.7533 10.5677 6.06634 10.4072 6.29102L7.90723 9.79102C7.8218 9.91056 7.68745 9.98593 7.54102 9.99805C7.39461 10.0101 7.25036 9.9574 7.14648 9.85352L5.64648 8.35352C5.45122 8.15825 5.45122 7.84175 5.64648 7.64648C5.84175 7.45122 6.15825 7.45122 6.35352 7.64648L7.43555 8.72852L9.59277 5.70898Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconChatCheck;
