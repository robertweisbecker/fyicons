import * as React from 'react';
import type { IconProps } from './types';
const IconArrowUndoArcLg = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowUndoArcLg(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.16707 2.11486C8.00339 1.88351 6.79643 2.00263 5.70027 2.45666C4.60413 2.91081 3.6661 3.68007 3.00691 4.66662C2.34799 5.65308 1.99623 6.81333 1.99617 7.99962H0.600664C0.377943 7.99962 0.26643 8.26889 0.423906 8.42638L2.32039 10.3229C2.41802 10.4205 2.57628 10.4205 2.67391 10.3229L4.57039 8.42638C4.72758 8.26891 4.61615 7.99978 4.39363 7.99962H2.99617C2.99623 7.01091 3.28969 6.04342 3.83895 5.2213C4.38824 4.39939 5.16981 3.75889 6.08309 3.38048C6.99648 3.00219 8.00211 2.90257 8.97176 3.09533C9.94148 3.28823 10.8321 3.76541 11.5313 4.46447C12.2305 5.16363 12.7075 6.0543 12.9005 7.02404C13.0933 7.99379 12.9936 8.99921 12.6153 9.91271C12.2369 10.8261 11.5965 11.6075 10.7745 12.1569C9.95233 12.7061 8.98492 12.9996 7.99617 12.9996C7.7204 13 7.49632 13.2238 7.49617 13.4996C7.49629 13.7755 7.72038 13.9993 7.99617 13.9996C9.1825 13.9996 10.3427 13.6478 11.3292 12.9889C12.3158 12.3296 13.085 11.3918 13.5391 10.2955C13.9932 9.19926 14.1124 7.99251 13.8809 6.82873C13.6493 5.66511 13.0773 4.59639 12.2384 3.75744C11.3994 2.91859 10.3307 2.34638 9.16707 2.11486Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowUndoArcLg;
