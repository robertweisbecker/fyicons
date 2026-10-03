import * as React from 'react';
import type { IconProps } from './types';
const IconSquareNine = React.forwardRef<SVGSVGElement, IconProps>(function IconSquareNine(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11 2C12.6569 2 14 3.34315 14 5V11C14 12.6569 12.6569 14 11 14H5C3.34315 14 2 12.6569 2 11V5C2 3.34315 3.34315 2 5 2H11ZM5 3C3.89543 3 3 3.89543 3 5V11C3 12.1046 3.89543 13 5 13H11C12.1046 13 13 12.1046 13 11V5C13 3.89543 12.1046 3 11 3H5ZM8 5C9.10514 5 10.0003 5.89635 10 7.00098C9.99986 8.39692 9.43779 9.38618 8.87402 10.0205C8.59407 10.3354 8.31344 10.5638 8.10156 10.7139C7.99557 10.7889 7.90522 10.8453 7.83984 10.8838C7.80735 10.9029 7.78031 10.9181 7.76074 10.9287C7.75109 10.9339 7.74244 10.9382 7.73633 10.9414C7.73346 10.9429 7.73054 10.9443 7.72852 10.9453C7.72758 10.9459 7.7263 10.9469 7.72559 10.9473H7.72461L7.72363 10.9482L7.62891 10.9844C7.40451 11.0443 7.16079 10.9404 7.05273 10.7246C6.92951 10.4782 7.02958 10.1787 7.27539 10.0547C7.27678 10.054 7.27998 10.0521 7.28418 10.0498C7.29372 10.0446 7.31039 10.0352 7.33203 10.0225C7.37584 9.99665 7.4424 9.95484 7.52344 9.89746C7.68631 9.78209 7.90629 9.60347 8.12598 9.35645C8.2312 9.23807 8.33629 9.10305 8.43555 8.95215C8.29539 8.98328 8.14955 9.00098 8 9.00098C6.89557 9.00081 6.00071 8.10488 6 7.00098C5.99968 5.89647 6.895 5.0002 8 5ZM8 6C7.44787 6.00018 6.99979 6.4483 7 7.00098C7.0006 7.55316 7.44827 8.00081 8 8.00098C8.55187 8.00098 8.9994 7.55326 9 7.00098C9.00021 6.4482 8.55227 6 8 6Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSquareNine;
