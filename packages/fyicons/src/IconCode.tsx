import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCode = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCode(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.632 2.018a.5.5 0 0 1 .35.614l-3 11a.5.5 0 0 1-.964-.263l3-11a.5.5 0 0 1 .614-.351M4.18 5.117a.5.5 0 0 1 .64.767L2.281 8l2.54 2.117a.5.5 0 0 1-.64.767l-3-2.5a.5.5 0 0 1 0-.767zm6.936.063a.5.5 0 0 1 .704-.063l3 2.5a.5.5 0 0 1 0 .767l-3 2.5a.5.5 0 0 1-.64-.767L13.72 8l-2.54-2.116a.5.5 0 0 1-.063-.704" /></SvgRoot>;
});
export default IconCode;
