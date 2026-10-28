import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCodeSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCodeSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="code-simple"><path fill="currentColor" d="M5.17 4.124a.5.5 0 1 1 .659.752L2.259 8l3.57 3.124a.5.5 0 0 1-.659.752l-3.999-3.5a.5.5 0 0 1 0-.752zm4.954.047a.5.5 0 0 1 .705-.047l4 3.5a.5.5 0 0 1 0 .752l-4 3.5a.5.5 0 0 1-.658-.752L13.741 8l-3.57-3.124a.5.5 0 0 1-.047-.705" /></SvgRoot>;
});
export default IconCodeSimple;
