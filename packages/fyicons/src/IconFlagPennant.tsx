import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFlagPennant = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFlagPennant(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="flag-pennant"><path fill="currentColor" d="M3.5 1a.5.5 0 0 1 .5.5v.406l10.68 4.127a.5.5 0 0 1 0 .934L4 11.093V14.5a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5m.5 9.02 9.11-3.52L4 2.98z" /><circle cx={6.5} cy={6.5} r={1.5} fill="currentColor" /></SvgRoot>;
});
export default IconFlagPennant;
