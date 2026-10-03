import * as React from 'react';
import type { IconProps } from './types';
const IconEyedropper = React.forwardRef<SVGSVGElement, IconProps>(function IconEyedropper(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.01562 3.07544C10.0026 1.59574 12.097 1.3894 13.3545 2.64673L13.4678 2.76685C14.5609 3.99318 14.3719 5.90085 13.0596 6.88892L12.9248 6.98462L10.9834 8.27661L11.3535 8.64673L11.4365 8.73853C11.8225 9.21244 11.7954 9.91172 11.3535 10.3538C10.9117 10.7952 10.2124 10.8228 9.73828 10.4368L9.64648 10.3538L8.96582 9.6731L4.02148 13.7209C3.80075 13.9016 3.52349 14 3.23828 14.0002C2.5554 14.0002 2.00149 13.4465 2.00098 12.7639C2.00093 12.4784 2.09944 12.2008 2.28027 11.9797L6.32617 7.03345L5.64648 6.35376C5.17506 5.88168 5.17629 5.11761 5.64746 4.64673C6.11878 4.17623 6.88296 4.17529 7.35449 4.64673L7.72168 5.01392L9.01562 3.07544ZM3.05469 12.6135C3.02025 12.6557 3.00109 12.7084 3.00098 12.7629C3.00119 12.8937 3.10771 13.0002 3.23828 13.0002C3.2926 13 3.34564 12.9809 3.3877 12.9465L8.25586 8.96313L7.03613 7.74341L3.05469 12.6135Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconEyedropper;
