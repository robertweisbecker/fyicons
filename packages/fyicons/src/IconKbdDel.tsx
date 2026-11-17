import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconKbdDel = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconKbdDel(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="kbd-del"><path fill="currentColor" d="M11.5 3A2.5 2.5 0 0 1 14 5.5v5a2.5 2.5 0 0 1-2.5 2.5H6.082a2.9 2.9 0 0 1-2.176-.977L1.335 9.129a1.7 1.7 0 0 1 0-2.258l2.57-2.893A2.9 2.9 0 0 1 6.083 3zM6.082 4c-.546 0-1.067.234-1.429.642l-2.57 2.893a.7.7 0 0 0 0 .93l2.57 2.893c.362.408.883.642 1.429.642H11.5a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 4zm4.564 1.646a.5.5 0 1 1 .707.708L9.707 7.999l1.647 1.647a.5.5 0 0 1-.707.707L9 8.707l-1.647 1.648a.5.5 0 1 1-.707-.708L8.293 8 6.647 6.354a.5.5 0 0 1 .707-.708L9 7.292z" />{props.children}</SvgRoot>;
});
export default IconKbdDel;
