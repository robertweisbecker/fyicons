import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconArrowUp = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowUp(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.64931 2.64635C7.82015 2.47564 8.0842 2.45385 8.27822 2.5819L8.35635 2.64635L12.3544 6.6444C12.5496 6.83963 12.5495 7.15618 12.3544 7.35143C12.1591 7.54661 11.8426 7.54661 11.6474 7.35143L8.50283 4.2069V13.4999C8.50276 13.776 8.27893 13.9999 8.00283 13.9999C7.72673 13.9999 7.5029 13.776 7.50283 13.4999V4.2069L4.35635 7.35339C4.16108 7.54865 3.84458 7.54865 3.64932 7.35339C3.45418 7.15811 3.45409 6.84158 3.64932 6.64635L7.64931 2.64635Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconArrowUp;
