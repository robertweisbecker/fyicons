import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconKbdDel = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconKbdDel(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="kbd-del"><path fill="currentColor" d="M12.5 3A2.5 2.5 0 0 1 15 5.5v5a2.5 2.5 0 0 1-2.5 2.5H5.922a2.9 2.9 0 0 1-1.947-.747l-3.32-2.99a1.7 1.7 0 0 1 0-2.527l3.32-2.989A2.9 2.9 0 0 1 5.923 3zM5.922 4a1.9 1.9 0 0 0-1.277.49l-3.32 2.99a.7.7 0 0 0 0 1.04l3.32 2.99c.35.315.806.49 1.277.49H12.5a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 12.5 4zm4.724 1.646a.5.5 0 0 1 .707.708L9.708 7.999l1.647 1.647a.5.5 0 0 1-.707.707L9 8.707l-1.646 1.648a.5.5 0 0 1-.707-.708L8.293 8 6.648 6.354a.5.5 0 1 1 .707-.708L9 7.292z" /></SvgRoot>;
});
export default IconKbdDel;
