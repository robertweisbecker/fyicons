import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTerminal = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTerminal(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="terminal"><path fill="currentColor" d="M2.128 4.172a.5.5 0 0 1 .705-.047l4 3.5a.5.5 0 0 1 0 .752l-4 3.5a.5.5 0 1 1-.658-.752L5.745 8l-3.57-3.124a.5.5 0 0 1-.047-.705M13.5 11a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconTerminal;
