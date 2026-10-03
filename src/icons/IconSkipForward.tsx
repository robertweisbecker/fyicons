import * as React from 'react';
import type { IconProps } from './types';
const IconSkipForward = React.forwardRef<SVGSVGElement, IconProps>(function IconSkipForward(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11.998 4.00024C12.5503 4.00024 12.998 4.44796 12.998 5.00024V11.0002C12.9979 11.5524 12.5502 12.0002 11.998 12.0002H10.998C10.4459 12.0002 9.99822 11.5524 9.99805 11.0002V8.83032C9.98679 8.83692 9.9765 8.84556 9.96484 8.85181L4.42285 11.8225C3.77918 12.1675 3.00017 11.7012 3 10.9709V5.02954C3 4.29911 3.77908 3.83288 4.42285 4.17798L9.96484 7.14868C9.97639 7.15487 9.9869 7.16265 9.99805 7.16919V5.00024C9.99805 4.44796 10.4458 4.00024 10.998 4.00024H11.998ZM10.998 11.0002H11.998V5.00024H10.998V11.0002ZM4 10.9143L9.4375 8.00024L4 5.08521V10.9143Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSkipForward;
