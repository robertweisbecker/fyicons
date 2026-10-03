import * as React from 'react';
import type { IconProps } from './types';
const IconChevronDown = React.forwardRef<SVGSVGElement, IconProps>(function IconChevronDown(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.1484 6.14644C12.3436 5.95119 12.6602 5.95119 12.8554 6.14644C13.0507 6.3417 13.0507 6.65821 12.8554 6.85347L8.35542 11.3535C8.16016 11.5487 7.84365 11.5487 7.64839 11.3535L3.14839 6.85347C2.95315 6.65821 2.95313 6.34169 3.14839 6.14644C3.34364 5.95121 3.66016 5.95121 3.85542 6.14644L8.0019 10.2929L12.1484 6.14644Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconChevronDown;
