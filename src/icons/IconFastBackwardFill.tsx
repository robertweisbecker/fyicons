import * as React from 'react';
import type { IconProps } from './types';
const IconFastBackwardFill = React.forwardRef<SVGSVGElement, IconProps>(function IconFastBackwardFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M13.6887 4.23793C14.2753 3.90813 15.0002 4.33157 15.0002 5.00453V10.9909C15.0002 11.6638 14.2753 12.0882 13.6887 11.7584L8.36444 8.76527C8.1935 8.66917 8.07345 8.52904 8.00018 8.37172V10.9957C7.99989 11.6685 7.27515 12.0922 6.68866 11.7623L1.36346 8.76722C0.765525 8.4308 0.765604 7.56954 1.36346 7.23304L6.68866 4.23793C7.27523 3.90798 8.00009 4.33156 8.00018 5.00453V7.62269C8.07347 7.46591 8.19404 7.32696 8.36444 7.23109L13.6887 4.23793Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconFastBackwardFill;
