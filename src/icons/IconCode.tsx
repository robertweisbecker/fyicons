import * as React from 'react';
import type { IconProps } from './types';
const IconCode = React.forwardRef<SVGSVGElement, IconProps>(function IconCode(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.63184 2.01823C9.89806 2.09102 10.0551 2.36618 9.98242 2.63249L6.98242 13.6325C6.90954 13.8985 6.63437 14.0556 6.36816 13.9831C6.102 13.9103 5.94515 13.6351 6.01758 13.3688L9.01758 2.36882C9.09034 2.10256 9.36551 1.9456 9.63184 2.01823ZM4.18066 5.11686C4.39271 4.94016 4.70794 4.96847 4.88477 5.18034C5.06129 5.39238 5.0331 5.70767 4.82129 5.88444L2.28125 8.00065L4.82129 10.1169C5.03302 10.2937 5.06143 10.609 4.88477 10.821C4.70795 11.0326 4.39264 11.0609 4.18066 10.8844L1.18066 8.38444C1.06693 8.28952 1.00108 8.1488 1.00098 8.00065C1.00098 7.85246 1.06695 7.71185 1.18066 7.61686L4.18066 5.11686ZM11.1172 5.18034C11.294 4.96846 11.6092 4.94016 11.8213 5.11686L14.8213 7.61686C14.935 7.71186 15.001 7.85245 15.001 8.00065C15.0009 8.14881 14.935 8.28951 14.8213 8.38444L11.8213 10.8844C11.6093 11.061 11.294 11.0326 11.1172 10.821C10.9405 10.609 10.9689 10.2937 11.1807 10.1169L13.7197 8.00065L11.1807 5.88444C10.9688 5.70766 10.9407 5.39238 11.1172 5.18034Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCode;
