import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBrackets = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBrackets(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="brackets"><path fill="currentColor" d="M5.5 2a.5.5 0 0 1 0 1h-2a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h2a.5.5 0 0 1 0 1h-2A1.5 1.5 0 0 1 2 12.5v-9A1.5 1.5 0 0 1 3.5 2zm7 0A1.5 1.5 0 0 1 14 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconBrackets;
