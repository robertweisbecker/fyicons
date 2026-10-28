import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFlagBurgee = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFlagBurgee(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="flag-burgee"><path fill="currentColor" d="M3.5 1a.5.5 0 0 1 .5.5v.4l10.67 3.88a.5.5 0 0 1 0 .94L4 10.6v3.9a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5M4 9.537l9.037-3.287L4 2.963z" /><circle cx={6} cy={6} r={1} fill="currentColor" /></SvgRoot>;
});
export default IconFlagBurgee;
