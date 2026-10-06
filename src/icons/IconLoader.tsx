import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconLoader = React.forwardRef<SVGSVGElement, IconProps>(function IconLoader(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 3C8.98891 3 9.95561 3.29324 10.7779 3.84265C11.6001 4.39206 12.241 5.17295 12.6194 6.08658C12.9978 7.00021 13.0969 8.00555 12.9039 8.97545C12.711 9.94536 12.2348 10.8363 11.5355 11.5355C10.8363 12.2348 9.94536 12.711 8.97545 12.9039C8.00555 13.0969 7.00021 12.9978 6.08658 12.6194C5.17295 12.241 4.39206 11.6001 3.84265 10.7779C3.29324 9.95561 3 8.98891 3 8" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeWidth={2} strokeLinecap="round" /><path opacity={0.25} d="M8 3C8.65661 3 9.30679 3.12933 9.91342 3.3806C10.52 3.63188 11.0712 4.00017 11.5355 4.46447C11.9998 4.92876 12.3681 5.47996 12.6194 6.08658C12.8707 6.69321 13 7.34339 13 8C13 8.65661 12.8707 9.30679 12.6194 9.91342C12.3681 10.52 11.9998 11.0712 11.5355 11.5355C11.0712 11.9998 10.52 12.3681 9.91342 12.6194C9.30679 12.8707 8.65661 13 8 13C7.34339 13 6.69321 12.8707 6.08658 12.6194C5.47995 12.3681 4.92876 11.9998 4.46446 11.5355C4.00017 11.0712 3.63187 10.52 3.3806 9.91342C3.12933 9.30679 3 8.65661 3 8C3 7.34339 3.12933 6.69321 3.3806 6.08658C3.63188 5.47995 4.00017 4.92876 4.46447 4.46446C4.92876 4.00017 5.47996 3.63187 6.08659 3.3806C6.69321 3.12933 7.34339 3 8 3L8 3Z" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeWidth={1.5} /></SvgRoot>;
});
export default IconLoader;
