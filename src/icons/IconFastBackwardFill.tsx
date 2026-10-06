import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconFastBackwardFill = React.forwardRef<SVGSVGElement, IconProps>(function IconFastBackwardFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M13.6887 4.23787C14.2753 3.90807 15.0002 4.33151 15.0002 5.00447V10.9908C15.0002 11.6638 14.2753 12.0882 13.6887 11.7584L8.36444 8.76521C8.1935 8.66911 8.07345 8.52898 8.00018 8.37165V10.9957C7.99989 11.6685 7.27515 12.0922 6.68866 11.7623L1.36346 8.76716C0.765525 8.43074 0.765604 7.56948 1.36346 7.23298L6.68866 4.23787C7.27523 3.90792 8.00009 4.3315 8.00018 5.00447V7.62263C8.07347 7.46585 8.19404 7.32689 8.36444 7.23103L13.6887 4.23787Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconFastBackwardFill;
