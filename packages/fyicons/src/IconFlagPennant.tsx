import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFlagPennant = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFlagPennant(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="flag-pennant"><path fill="currentColor" d="M3.5 1a.5.5 0 0 1 .5.5v.662l9.686 3.875a.5.5 0 0 1 0 .927L4 10.838v3.663a.5.5 0 0 1-1 0v-13A.5.5 0 0 1 3.5 1M4 9.762 12.154 6.5 4 3.238z" /><circle cx={6.5} cy={6.5} r={1.5} fill="currentColor" /></SvgRoot>;
});
export default IconFlagPennant;
