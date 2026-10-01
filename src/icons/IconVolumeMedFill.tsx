import * as React from 'react';
import type { IconProps } from './types';
const IconVolumeMedFill = React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeMedFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.37988 3.02829C8.03561 2.51061 8.99985 2.97806 9 3.81345V12.1865C9 13.022 8.03566 13.4894 7.37988 12.9716L4.25 10.5H2.5C1.67158 10.5 1 9.8284 1 8.99997V6.99997C1.00014 6.1717 1.6717 5.50003 2.5 5.49997H4.25L7.37988 3.02829ZM10.4951 6.06345C10.5872 6.08696 10.6775 6.11778 10.7656 6.15427C11.008 6.25473 11.2285 6.40235 11.4141 6.58786C11.5995 6.77338 11.7472 6.99398 11.8477 7.2363C11.948 7.47872 11.9999 7.73954 12 8.00192C12 8.2643 11.948 8.52512 11.8477 8.76755C11.7472 9.00987 11.5995 9.23046 11.4141 9.41598C11.2285 9.60151 11.008 9.74911 10.7656 9.84958C10.6776 9.88604 10.5871 9.91593 10.4951 9.93942C10.2277 10.0077 10.0002 9.7779 10 9.50192V9.3945C10 9.17759 10.1824 9.00879 10.3828 8.92575C10.5039 8.87553 10.6143 8.80165 10.707 8.70895C10.7997 8.61626 10.8736 8.50579 10.9238 8.38473C10.9739 8.26363 11 8.13298 11 8.00192C10.9999 7.87087 10.9739 7.74021 10.9238 7.61911C10.8736 7.49807 10.7997 7.38758 10.707 7.29489C10.6143 7.2022 10.5039 7.12831 10.3828 7.07809C10.1824 6.9951 10 6.82532 10 6.60837V6.50192C10 6.22578 10.2276 5.99514 10.4951 6.06345Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconVolumeMedFill;
