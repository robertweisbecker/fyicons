import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCode = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCode(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.632 2.017a.5.5 0 0 1 .35.614l-3 11a.5.5 0 0 1-.964-.263l3-11a.5.5 0 0 1 .614-.35m-5.51 2.158a.5.5 0 0 1 .759.65L2.159 8.002l2.722 3.174a.5.5 0 0 1-.76.65l-3-3.5a.5.5 0 0 1 0-.65zm7.054-.054a.5.5 0 0 1 .705.054l3 3.5a.5.5 0 0 1 0 .65l-3 3.5a.5.5 0 0 1-.76-.65l2.72-3.174-2.72-3.175a.5.5 0 0 1 .055-.705" /></SvgRoot>;
});
export default IconCode;
