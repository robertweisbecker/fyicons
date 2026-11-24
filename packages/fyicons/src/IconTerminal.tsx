import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTerminal = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTerminal(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="terminal"><path fill="currentColor" d="M13.5 11a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zM2.128 4.172a.5.5 0 0 1 .706-.047l4 3.5a.5.5 0 0 1 0 .752l-4 3.5a.5.5 0 0 1-.659-.752l3.57-3.124-3.57-3.124a.5.5 0 0 1-.047-.705" />{props.children}</SvgRoot>;
});
export default IconTerminal;
