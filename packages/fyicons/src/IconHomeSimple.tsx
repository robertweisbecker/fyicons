import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHomeSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHomeSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.894 1.966a1.5 1.5 0 0 1 2.21 0l4.5 4.91c.254.276.395.638.395 1.013V12.5l-.008.153A1.5 1.5 0 0 1 12.5 14h-3a.5.5 0 0 1-.5-.5V9H7v4.5a.5.5 0 0 1-.5.5h-3a1.5 1.5 0 0 1-1.492-1.347L2 12.5V7.89c0-.375.14-.737.395-1.014zm1.474.676a.5.5 0 0 0-.738 0L3.13 7.55a.5.5 0 0 0-.131.338V12.5a.5.5 0 0 0 .5.5h2.5V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4h2.5a.5.5 0 0 0 .5-.5V7.89l-.009-.093a.5.5 0 0 0-.122-.245z" /></SvgRoot>;
});
export default IconHomeSimple;
