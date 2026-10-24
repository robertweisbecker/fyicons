import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDotsTriangle = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDotsTriangle(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M4.25 8C5.76878 8 7 9.23122 7 10.75C7 12.2688 5.76878 13.5 4.25 13.5C2.73122 13.5 1.5 12.2688 1.5 10.75C1.5 9.23122 2.73122 8 4.25 8ZM11.75 8C13.2688 8 14.5 9.23122 14.5 10.75C14.5 12.2688 13.2688 13.5 11.75 13.5C10.2312 13.5 9 12.2688 9 10.75C9 9.23122 10.2312 8 11.75 8ZM4.25 9C3.2835 9 2.5 9.7835 2.5 10.75C2.5 11.7165 3.2835 12.5 4.25 12.5C5.2165 12.5 6 11.7165 6 10.75C6 9.7835 5.2165 9 4.25 9ZM11.75 9C10.7835 9 10 9.7835 10 10.75C10 11.7165 10.7835 12.5 11.75 12.5C12.7165 12.5 13.5 11.7165 13.5 10.75C13.5 9.7835 12.7165 9 11.75 9ZM8 2C9.51878 2 10.75 3.23122 10.75 4.75C10.75 6.26878 9.51878 7.5 8 7.5C6.48122 7.5 5.25 6.26878 5.25 4.75C5.25 3.23122 6.48122 2 8 2ZM8 3C7.0335 3 6.25 3.7835 6.25 4.75C6.25 5.7165 7.0335 6.5 8 6.5C8.9665 6.5 9.75 5.7165 9.75 4.75C9.75 3.7835 8.9665 3 8 3Z" fill="currentColor" /></SvgRoot>;
});
export default IconDotsTriangle;
