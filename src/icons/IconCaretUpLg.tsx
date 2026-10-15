import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCaretUpLg = React.forwardRef<SVGSVGElement, IconProps>(function IconCaretUpLg(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.44287 4.37183C7.72206 4.06168 8.19591 4.0421 8.49951 4.31323L8.55811 4.37183L12.4966 8.7478C12.931 9.23044 12.5883 9.99976 11.939 9.99976H4.06201C3.41279 9.99963 3.07005 9.2304 3.50439 8.7478L7.44287 4.37183Z" fill="currentColor" /></SvgRoot>;
});
export default IconCaretUpLg;
