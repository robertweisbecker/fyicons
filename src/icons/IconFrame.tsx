import * as React from 'react';
import type { IconProps } from './types';
const IconFrame = React.forwardRef<SVGSVGElement, IconProps>(function IconFrame(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11.4619 2C11.7379 2.0002 11.9619 2.22398 11.9619 2.5V4.03809H13.5C13.776 4.03809 13.9998 4.26212 14 4.53809C14 4.81423 13.7761 5.03809 13.5 5.03809H11.9619V10.9619H13.5C13.7761 10.9619 14 11.1858 14 11.4619C13.9998 11.7379 13.776 11.9619 13.5 11.9619H11.9619V13.5C11.9619 13.776 11.7379 13.9998 11.4619 14C11.1858 14 10.9619 13.7761 10.9619 13.5V11.9619H5.03809V13.5C5.03809 13.7761 4.81423 14 4.53809 14C4.26212 13.9998 4.03809 13.776 4.03809 13.5V11.9619H2.5C2.22398 11.9619 2.0002 11.7379 2 11.4619C2 11.1858 2.22386 10.9619 2.5 10.9619H4.03809V5.03809H2.5C2.22386 5.03809 2 4.81423 2 4.53809C2.0002 4.26212 2.22398 4.03809 2.5 4.03809H4.03809V2.5C4.03809 2.22398 4.26212 2.0002 4.53809 2C4.81423 2 5.03809 2.22386 5.03809 2.5V4.03809H10.9619V2.5C10.9619 2.22386 11.1858 2 11.4619 2ZM5.03809 10.9619H10.9619V5.03809H5.03809V10.9619Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconFrame;
