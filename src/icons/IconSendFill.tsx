import * as React from 'react';
import type { IconProps } from './types';
const IconSendFill = React.forwardRef<SVGSVGElement, IconProps>(function IconSendFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M1.91797 3.82349C1.44401 2.5428 2.78907 1.34638 4.00586 1.96606L13.2266 6.66333C14.3187 7.21971 14.3187 8.78078 13.2266 9.33716L4.00586 14.0344C2.78918 14.6539 1.4443 13.4575 1.91797 12.177L2.91602 9.47974C3.13378 8.89122 3.69478 8.50043 4.32227 8.50024H9.49707C9.77315 8.50024 9.99697 8.27631 9.99707 8.00024C9.99707 7.7241 9.77321 7.50024 9.49707 7.50024H4.32227C3.69478 7.50006 3.13378 7.10927 2.91602 6.52075L1.91797 3.82349Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSendFill;
