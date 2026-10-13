import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSparkleFill = React.forwardRef<SVGSVGElement, IconProps>(function IconSparkleFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M6.5799 2.43802C7.03617 1.07149 8.96945 1.07139 9.4256 2.43802L10.4598 5.54251L13.5653 6.57767C14.932 7.03378 14.9318 8.96712 13.5653 9.42337L10.4598 10.4576L9.4256 13.563C8.96953 14.93 7.03597 14.93 6.5799 13.563L5.54475 10.4576L2.44025 9.42337C1.0733 8.9673 1.0733 7.03374 2.44025 6.57767L5.54475 5.54251L6.5799 2.43802Z" fill="currentColor" /></SvgRoot>;
});
export default IconSparkleFill;
