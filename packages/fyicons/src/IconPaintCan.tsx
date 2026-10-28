import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPaintCan = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPaintCan(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="paint-can"><path fill="currentColor" d="M12.05 10.275a.626.626 0 0 1 .9 0l.05.058.6.8c.282.377.546.834.676 1.322.132.495.132 1.05-.155 1.57-.28.505-.788.975-1.622.975-.833 0-1.341-.47-1.62-.975-.288-.52-.288-1.075-.156-1.57.13-.488.394-.944.677-1.32l.6-.802zM7.223 2.082a.5.5 0 0 1 .629.065l5 5a.5.5 0 0 1 0 .707l-4.94 4.94a2 2 0 0 1-2.828 0l-2.878-2.88a2 2 0 0 1 0-2.828l4.939-4.94zm-4.31 5.711a1 1 0 0 0 0 1.414l2.878 2.88a1 1 0 0 0 1.415 0l.585-.587-1.646-1.646a.5.5 0 0 1 0-.707l2-2 .078-.065a.5.5 0 0 1 .629.065l1.646 1.646L11.792 7.5 7.5 3.207zM7.207 9.5 8.5 10.793 9.792 9.5 8.5 8.207z" /><path stroke="currentColor" strokeLinecap="round" d="M10.5 5.5h-9" /></SvgRoot>;
});
export default IconPaintCan;
