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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.07617 3.93738C6.53233 2.57058 8.4658 2.57051 8.92188 3.93738L9.70605 6.29187L12.0615 7.07703C13.4283 7.53315 13.4282 9.46656 12.0615 9.92273L9.70605 10.7069L8.92188 13.0624C8.46581 14.4293 6.53224 14.4293 6.07617 13.0624L5.29102 10.7069L2.93652 9.92273C1.56957 9.46666 1.56957 7.5331 2.93652 7.07703L5.29102 6.29187L6.07617 3.93738ZM7.97363 4.25378C7.8216 3.79822 7.17652 3.7983 7.02441 4.25378L6.16113 6.84558L6.08203 7.08289L5.84473 7.16199L3.25293 8.02527C2.79728 8.17729 2.79728 8.82246 3.25293 8.97449L5.84473 9.83777L6.08203 9.91687L6.16113 10.1542L7.02441 12.746C7.17644 13.2016 7.82161 13.2016 7.97363 12.746L8.83691 10.1542L8.91602 9.91687L9.15332 9.83777L11.7451 8.97449C12.2005 8.82236 12.2006 8.17735 11.7451 8.02527L9.15332 7.16199L8.91602 7.08289L8.83691 6.84558L7.97363 4.25378ZM11.9707 1.29968C12.2114 0.91298 12.7868 0.912879 13.0273 1.29968L13.0732 1.38855L13.5342 2.46375L14.6104 2.92566C15.1152 3.14215 15.1152 3.85756 14.6104 4.0741L13.5342 4.53503L13.0732 5.61121C12.8568 6.11627 12.1413 6.11627 11.9248 5.61121L11.4629 4.53503L10.3877 4.0741C9.88263 3.85764 9.88263 3.14212 10.3877 2.92566L11.4629 2.46375L11.9248 1.38855L11.9707 1.29968ZM12.0938 2.89734L12.0342 3.03503L11.8965 3.0946L10.9512 3.49988L11.8965 3.90515L12.0342 3.96472L12.0938 4.10242L12.499 5.04675L12.9043 4.10242L12.9639 3.96472L13.1016 3.90515L14.0459 3.49988L13.1016 3.0946L12.9639 3.03503L12.9043 2.89734L12.499 1.95203L12.0938 2.89734Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSparkles;
