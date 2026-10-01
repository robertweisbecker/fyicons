import * as React from 'react';
import type { IconProps } from './types';
const IconCheckVerifiedSolid = React.forwardRef<SVGSVGElement, IconProps>(function IconCheckVerifiedSolid(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.93923 1.9895C7.52503 1.40394 8.47461 1.40379 9.06032 1.9895L9.85134 2.78052C9.99197 2.92106 10.1828 3.00024 10.3816 3.00024H11.4998C12.328 3.0005 12.9998 3.67197 12.9998 4.50024V5.61841C12.9998 5.81712 13.0781 6.00808 13.2185 6.14868L14.0095 6.9397C14.5951 7.5255 14.5952 8.47508 14.0095 9.06079L13.2195 9.85083C13.0788 9.99148 12.9998 10.1822 12.9998 10.3811V11.5002C12.9995 12.3283 12.3278 13 11.4998 13.0002H10.3806C10.1817 13.0002 9.99101 13.0793 9.85036 13.22L9.06032 14.01C8.47461 14.5957 7.52503 14.5956 6.93923 14.01L6.14919 13.22C6.00862 13.0794 5.8177 13.0003 5.61891 13.0002H4.49977C3.6715 13.0002 3.00003 12.3285 2.99977 11.5002V10.3821C2.99977 10.1832 2.92059 9.99244 2.78005 9.8518L1.98903 9.06079C1.40332 8.47508 1.40347 7.5255 1.98903 6.9397L2.78005 6.14868C2.92062 6.00811 2.99968 5.8172 2.99977 5.61841V4.50024C2.99977 3.67182 3.67135 3.00024 4.49977 3.00024H5.61794C5.81673 3.00015 6.00764 2.92109 6.14821 2.78052L6.93923 1.9895ZM10.2429 5.56274C10.0016 5.42865 9.6964 5.51575 9.56227 5.75708L7.66188 9.17798L6.35329 7.86938C6.15803 7.67412 5.84152 7.67412 5.64626 7.86938C5.45144 8.06468 5.45114 8.3813 5.64626 8.57641L7.4236 10.3538C7.53441 10.4644 7.69134 10.5169 7.84645 10.4954C8.0016 10.4736 8.13836 10.3802 8.21462 10.2434L10.4373 6.24341C10.5713 6.00211 10.4841 5.69693 10.2429 5.56274Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCheckVerifiedSolid;
