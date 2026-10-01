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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.63184 2.01806C9.89806 2.09085 10.0551 2.36601 9.98242 2.63232L6.98242 13.6323C6.90954 13.8984 6.63437 14.0555 6.36816 13.9829C6.102 13.9102 5.94515 13.6349 6.01758 13.3686L9.01758 2.36865C9.09034 2.10239 9.36551 1.94543 9.63184 2.01806ZM4.18066 5.1167C4.39271 4.94 4.70794 4.9683 4.88477 5.18017C5.06129 5.39221 5.0331 5.7075 4.82129 5.88427L2.28125 8.00048L4.82129 10.1167C5.03302 10.2935 5.06143 10.6088 4.88477 10.8208C4.70795 11.0325 4.39264 11.0608 4.18066 10.8843L1.18066 8.38427C1.06693 8.28935 1.00108 8.14863 1.00098 8.00048C1.00098 7.85229 1.06695 7.71169 1.18066 7.6167L4.18066 5.1167ZM11.1172 5.18017C11.294 4.9683 11.6092 4.93999 11.8213 5.1167L14.8213 7.6167C14.935 7.71169 15.001 7.85229 15.001 8.00048C15.0009 8.14864 14.935 8.28935 14.8213 8.38427L11.8213 10.8843C11.6093 11.0608 11.294 11.0325 11.1172 10.8208C10.9405 10.6088 10.9689 10.2935 11.1807 10.1167L13.7197 8.00048L11.1807 5.88427C10.9688 5.7075 10.9407 5.39221 11.1172 5.18017Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCode;
