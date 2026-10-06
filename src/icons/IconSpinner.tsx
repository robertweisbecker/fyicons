import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSpinner = React.forwardRef<SVGSVGElement, IconProps>(function IconSpinner(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1.5V4.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /><path opacity={0.9} d="M11.8203 2.74121L10.057 5.16826" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /><path opacity={0.8} d="M14.1816 5.99121L11.3285 6.91826" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /><path opacity={0.7} d="M14.1816 10.0088L11.3285 9.08174" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /><path opacity={0.6} d="M11.8203 13.2588L10.057 10.8317" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /><path opacity={0.5} d="M8 14.5L8 11.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /><path opacity={0.4} d="M4.17969 13.2588L5.94304 10.8317" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /><path opacity={0.3} d="M1.81836 10.0088L4.67153 9.08174" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /><path opacity={0.2} d="M1.81836 5.99121L4.67153 6.91826" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /><path opacity={0.1} d="M4.17969 2.74121L5.94304 5.16826" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /></SvgRoot>;
});
export default IconSpinner;
