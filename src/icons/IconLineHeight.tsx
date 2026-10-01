import * as React from 'react';
import type { IconProps } from './types';
const IconLineHeight = React.forwardRef<SVGSVGElement, IconProps>(function IconLineHeight(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M4.22461 2.08228C4.41869 1.95411 4.68265 1.97586 4.85352 2.14673L6.85352 4.14673C7.04858 4.34201 7.04871 4.65857 6.85352 4.85376C6.65832 5.04891 6.34175 5.0488 6.14648 4.85376L5 3.70728V12.3987L6.1709 11.3743C6.37869 11.1924 6.69413 11.2134 6.87598 11.4211C7.05759 11.6289 7.03678 11.9444 6.8291 12.1262L4.8291 13.8762C4.64066 14.0411 4.3594 14.041 4.1709 13.8762L2.1709 12.1262C1.96317 11.9444 1.94227 11.6289 2.12402 11.4211C2.30587 11.2134 2.62131 11.1924 2.8291 11.3743L4 12.3987V3.70728L2.85352 4.85376C2.65832 5.04891 2.34175 5.0488 2.14648 4.85376C1.95124 4.65851 1.95127 4.34199 2.14648 4.14673L4.14648 2.14673L4.22461 2.08228ZM13.5 12.0002C13.776 12.0004 14 12.2242 14 12.5002C13.9999 12.7762 13.7759 13.0001 13.5 13.0002H9.5C9.22394 13.0002 9.00014 12.7763 9 12.5002C9 12.2241 9.22386 12.0002 9.5 12.0002H13.5ZM13.5 9.00024C13.776 9.00038 14 9.22419 14 9.50024C13.9999 9.77618 13.7759 10.0001 13.5 10.0002H9.5C9.22394 10.0002 9.00014 9.77627 9 9.50024C9 9.2241 9.22386 9.00024 9.5 9.00024H13.5ZM13.5 6.00024C13.776 6.00038 14 6.22419 14 6.50024C13.9999 6.77618 13.7759 7.0001 13.5 7.00024H9.5C9.22394 7.00024 9.00014 6.77627 9 6.50024C9 6.2241 9.22386 6.00024 9.5 6.00024H13.5ZM13.5 3.00024C13.776 3.00038 14 3.22419 14 3.50024C13.9999 3.77618 13.7759 4.0001 13.5 4.00024H9.5C9.22394 4.00024 9.00014 3.77627 9 3.50024C9 3.2241 9.22386 3.00024 9.5 3.00024H13.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLineHeight;
