import * as React from 'react';
import type { IconProps } from './types';
const IconArrowsCompressAll = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowsCompressAll(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.49995 8.99996C6.77608 8.99997 6.99995 9.22383 6.99995 9.49996V12.5C6.99991 12.7761 6.77606 13 6.49995 13C6.22383 13 5.99999 12.7761 5.99995 12.5V10.707L2.85347 13.8535C2.65822 14.0487 2.34169 14.0487 2.14644 13.8535C1.95118 13.6582 1.9512 13.3417 2.14644 13.1464L5.29292 9.99996H3.49995C3.22383 9.99996 2.99999 9.77607 2.99995 9.49996C2.99995 9.22382 3.22381 8.99996 3.49995 8.99996H6.49995ZM12.5 8.99996C12.7761 8.99997 13 9.22383 13 9.49996C12.9999 9.77606 12.7761 9.99995 12.5 9.99996H10.707L13.8535 13.1464C14.0487 13.3417 14.0487 13.6582 13.8535 13.8535C13.6582 14.0487 13.3417 14.0487 13.1464 13.8535L9.99995 10.707V12.5C9.99991 12.7761 9.77606 13 9.49995 13C9.22383 13 8.99999 12.7761 8.99995 12.5V9.49996C8.99995 9.22382 9.22381 8.99996 9.49995 8.99996H12.5ZM2.14644 2.14645C2.3417 1.95118 2.6582 1.95118 2.85347 2.14645L5.99995 5.29293V3.49996C5.99995 3.22382 6.22381 2.99996 6.49995 2.99996C6.77608 2.99997 6.99995 3.22383 6.99995 3.49996V6.49996C6.99991 6.77606 6.77606 6.99995 6.49995 6.99996H3.49995C3.22383 6.99996 2.99999 6.77607 2.99995 6.49996C2.99995 6.22382 3.22381 5.99996 3.49995 5.99996H5.29292L2.14644 2.85348C1.95118 2.65822 1.9512 2.34171 2.14644 2.14645ZM13.1464 2.14645C13.3417 1.95118 13.6582 1.95118 13.8535 2.14645C14.0487 2.34171 14.0487 2.65823 13.8535 2.85348L10.707 5.99996H12.5C12.7761 5.99997 13 6.22383 13 6.49996C12.9999 6.77606 12.7761 6.99995 12.5 6.99996H9.49995C9.22383 6.99996 8.99999 6.77607 8.99995 6.49996V3.49996C8.99995 3.22382 9.22381 2.99996 9.49995 2.99996C9.77608 2.99997 9.99995 3.22383 9.99995 3.49996V5.29293L13.1464 2.14645Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowsCompressAll;
