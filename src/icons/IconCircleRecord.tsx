import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCircleRecord = React.forwardRef<SVGSVGElement, IconProps>(function IconCircleRecord(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><g clipPath={`url(#${idPrefix}clip0_158_11590)`}><path d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5ZM8 4C10.2091 4 12 5.79086 12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4Z" fill="currentColor" style={{
        fill: "currentColor",
        fillOpacity: 1
      }} /></g><defs><clipPath id={idPrefix + "clip0_158_11590"}><rect width={16} height={16} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></SvgRoot>;
});
export default IconCircleRecord;
