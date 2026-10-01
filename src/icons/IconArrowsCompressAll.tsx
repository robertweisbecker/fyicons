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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.5 9.00008C6.77611 9.00012 7 9.22396 7 9.50008V12.5001C6.99996 12.7762 6.77608 13 6.5 13.0001C6.22388 13.0001 6.00004 12.7762 6 12.5001V10.7071L2.85352 13.8536C2.65828 14.0488 2.34175 14.0488 2.14648 13.8536C1.95122 13.6583 1.95122 13.3418 2.14648 13.1466L5.29297 10.0001H3.5C3.22388 10.0001 3.00004 9.77618 3 9.50008C3 9.22393 3.22386 9.00008 3.5 9.00008H6.5ZM12.5 9.00008C12.7761 9.00012 13 9.22396 13 9.50008C13 9.77616 12.7761 10 12.5 10.0001H10.707L13.8535 13.1466C14.0487 13.3418 14.0488 13.6584 13.8535 13.8536C13.6583 14.0488 13.3418 14.0488 13.1465 13.8536L10 10.7071V12.5001C9.99996 12.7762 9.77608 13 9.5 13.0001C9.22388 13.0001 9.00004 12.7762 9 12.5001V9.50008C9 9.22393 9.22386 9.00008 9.5 9.00008H12.5ZM2.14648 2.14656C2.34175 1.9513 2.65825 1.9513 2.85352 2.14656L6 5.29305V3.50008C6 3.22393 6.22386 3.00008 6.5 3.00008C6.77611 3.00012 7 3.22396 7 3.50008V6.50008C6.99996 6.77616 6.77608 7.00004 6.5 7.00008H3.5C3.22388 7.00008 3.00004 6.77618 3 6.50008C3 6.22393 3.22386 6.00008 3.5 6.00008H5.29297L2.14648 2.85359C1.95122 2.65833 1.95122 2.34182 2.14648 2.14656ZM13.1465 2.14656C13.3417 1.9513 13.6583 1.9513 13.8535 2.14656C14.0487 2.34183 14.0488 2.65835 13.8535 2.85359L10.707 6.00008H12.5C12.7761 6.00012 13 6.22396 13 6.50008C13 6.77616 12.7761 7.00004 12.5 7.00008H9.5C9.22388 7.00008 9.00004 6.77618 9 6.50008V3.50008C9 3.22393 9.22386 3.00008 9.5 3.00008C9.77611 3.00012 10 3.22396 10 3.50008V5.29305L13.1465 2.14656Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowsCompressAll;
