import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquarrowUp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquarrowUp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="squarrow-up"><path fill="currentColor" d="M2 11.5A2.5 2.5 0 0 0 4.5 14H6a2.5 2.5 0 0 0 2.5-2.5V6.707l1.646 1.647a.5.5 0 1 0 .707-.708l-2.5-2.5a.5.5 0 0 0-.707 0l-2.5 2.5a.5.5 0 1 0 .708.708L7.5 6.707V11.5A1.5 1.5 0 0 1 6 13H4.5A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5.5.5 0 0 0 0 1 2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5z" /></SvgRoot>;
});
export default IconSquarrowUp;
