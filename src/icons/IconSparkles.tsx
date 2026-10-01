import * as React from 'react';
import type { IconProps } from './types';
const IconSparkles = React.forwardRef<SVGSVGElement, IconProps>(function IconSparkles(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5.07695 4.93741C5.53308 3.5706 7.46653 3.5706 7.92266 4.93741L8.70684 7.2919L11.0623 8.07706C12.4292 8.53312 12.4292 10.4667 11.0623 10.9228L8.70684 11.7069L7.92266 14.0624C7.46659 15.4294 5.53302 15.4294 5.07695 14.0624L4.2918 11.7069L1.93731 10.9228C0.57039 10.4667 0.570365 8.53312 1.93731 8.07706L4.2918 7.2919L5.07695 4.93741ZM6.97441 5.25381C6.82233 4.79831 6.17728 4.79831 6.0252 5.25381L5.16191 7.84561L5.08281 8.08292L4.84551 8.16202L2.25371 9.0253C1.79808 9.17732 1.7981 9.82247 2.25371 9.97452L4.84551 10.8378L5.08281 10.9169L5.16191 11.1542L6.0252 13.746C6.17722 14.2016 6.82239 14.2016 6.97441 13.746L7.8377 11.1542L7.9168 10.9169L8.1541 10.8378L10.7459 9.97452C11.2015 9.82247 11.2015 9.17732 10.7459 9.0253L8.1541 8.16202L7.9168 8.08292L7.8377 7.84561L6.97441 5.25381ZM11.9705 1.29971C12.2111 0.912947 12.7865 0.912961 13.0271 1.29971L13.073 1.38858L13.534 2.46377L14.6102 2.92569C15.1152 3.14214 15.1152 3.85766 14.6102 4.07413L13.534 4.53506L13.073 5.61124C12.8566 6.1163 12.1411 6.1163 11.9246 5.61124L11.4627 4.53506L10.3875 4.07413C9.88249 3.85764 9.88245 3.14214 10.3875 2.92569L11.4627 2.46377L11.9246 1.38858L11.9705 1.29971ZM12.0936 2.89737L12.034 3.03506L11.8963 3.09463L10.951 3.49991L11.8963 3.90518L12.034 3.96475L12.0936 4.10245L12.4988 5.04678L12.9041 4.10245L12.9637 3.96475L13.1014 3.90518L14.0457 3.49991L13.1014 3.09463L12.9637 3.03506L12.9041 2.89737L12.4988 1.95206L12.0936 2.89737Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSparkles;
