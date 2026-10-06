import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconTriangleUpDown = React.forwardRef<SVGSVGElement, IconProps>(function IconTriangleUpDown(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M8.19948 12.7329C8.09948 12.8663 7.89948 12.8663 7.79948 12.7329L5.29948 9.39959C5.17587 9.23478 5.29347 8.99959 5.49948 8.99959H10.4995C10.7055 8.99959 10.8231 9.23478 10.6995 9.39959L8.19948 12.7329ZM10.6995 6.59959C10.8231 6.7644 10.7055 6.99959 10.4995 6.99959H5.49948C5.29347 6.99959 5.17587 6.7644 5.29948 6.59959L7.79948 3.26626C7.89948 3.13293 8.09948 3.13293 8.19948 3.26626L10.6995 6.59959Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconTriangleUpDown;
