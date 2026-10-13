import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCaretUpLg = React.forwardRef<SVGSVGElement, IconProps>(function IconCaretUpLg(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.44336 4.37183C7.72255 4.06168 8.19639 4.0421 8.5 4.31323L8.55859 4.37183L12.4971 8.7478C12.9314 9.23044 12.5888 9.99976 11.9395 9.99976H4.0625C3.41327 9.99963 3.07054 9.2304 3.50488 8.7478L7.44336 4.37183Z" fill="currentColor" /></SvgRoot>;
});
export default IconCaretUpLg;
