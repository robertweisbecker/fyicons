import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStarFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStarFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="star-fill"><path fill="currentColor" d="M7.037 1.71c.366-.84 1.56-.84 1.926 0l1.487 3.42 3.711.358.165.028c.79.2 1.074 1.233.43 1.803l-2.793 2.47.808 3.64c.198.895-.768 1.596-1.558 1.131L8 12.667l-3.21 1.892h-.002c-.79.465-1.755-.235-1.557-1.131l.805-3.64-2.79-2.47c-.687-.608-.32-1.742.594-1.83l3.71-.36z" /></SvgRoot>;
});
export default IconStarFill;
