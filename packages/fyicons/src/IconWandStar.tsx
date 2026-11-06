import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWandStar = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWandStar(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="wand-star"><path fill="currentColor" d="M7.317 2.169a.5.5 0 0 1 .526.045l2.096 1.563 2.478-.84.068-.017a.5.5 0 0 1 .566.652l-.84 2.477 1.564 2.096a.5.5 0 0 1-.407.8l-2.615-.034-1.51 2.137a.5.5 0 0 1-.885-.142l-.608-1.95-4.895 4.897a.5.5 0 1 1-.707-.707l4.9-4.903-1.966-.611a.5.5 0 0 1-.14-.885l2.135-1.51-.033-2.616a.5.5 0 0 1 .273-.452m.764 3.317a.5.5 0 0 1-.211.415L6.346 6.977l1.783.555.11.05a.5.5 0 0 1 .218.278l.554 1.782 1.077-1.523a.5.5 0 0 1 .415-.211l1.865.023-1.116-1.495a.5.5 0 0 1-.072-.459l.6-1.767-1.767.6a.5.5 0 0 1-.46-.074L8.057 3.62z" /></SvgRoot>;
});
export default IconWandStar;
