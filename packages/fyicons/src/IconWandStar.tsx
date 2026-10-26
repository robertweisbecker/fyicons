import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWandStar = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWandStar(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.317 1.169a.5.5 0 0 1 .527.045l2.095 1.563 2.478-.84.068-.017a.5.5 0 0 1 .567.65l-.841 2.478 1.564 2.097a.5.5 0 0 1-.407.799l-2.615-.033-1.51 2.137a.501.501 0 0 1-.885-.142l-.608-1.95-5.895 5.897a.5.5 0 0 1-.707-.707l5.9-5.903-1.965-.612a.5.5 0 0 1-.142-.884l2.136-1.511-.033-2.615a.5.5 0 0 1 .273-.452m.765 3.317a.5.5 0 0 1-.212.415L7.347 5.977l1.782.555.11.05a.5.5 0 0 1 .218.278l.554 1.782 1.077-1.523a.5.5 0 0 1 .415-.211l1.865.022-1.115-1.494a.5.5 0 0 1-.073-.459l.6-1.767-1.767.6a.5.5 0 0 1-.46-.074L9.058 2.62z" /></SvgRoot>;
});
export default IconWandStar;
