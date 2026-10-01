import * as React from 'react';
import type { IconProps } from './types';
const IconChevronDownSharp = React.forwardRef<SVGSVGElement, IconProps>(function IconChevronDownSharp(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.1484 6.14653C12.3436 5.95128 12.6602 5.95128 12.8554 6.14653C13.0507 6.34179 13.0507 6.6583 12.8554 6.85356L8.35542 11.3536C8.16016 11.5488 7.84365 11.5488 7.64839 11.3536L3.14839 6.85356C2.95315 6.6583 2.95313 6.34179 3.14839 6.14653C3.34364 5.9513 3.66016 5.9513 3.85542 6.14653L8.0019 10.293L12.1484 6.14653Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconChevronDownSharp;
