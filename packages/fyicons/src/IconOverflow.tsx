import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconOverflow = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconOverflow(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="overflow"><path fill="currentColor" d="M7.5 10a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m3.646-3.854a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 1 1-.707-.707L12.294 9H2.5a.5.5 0 0 1 0-1h9.793l-1.146-1.146a.5.5 0 0 1 0-.708M7.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5" /></SvgRoot>;
});
export default IconOverflow;
