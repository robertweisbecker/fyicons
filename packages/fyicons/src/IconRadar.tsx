import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRadar = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRadar(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M14.147 1.146a.5.5 0 0 1 .707.708l-6.5 6.5a.5.5 0 0 1-.707-.708l2.14-2.14a2.996 2.996 0 0 0-4.107.506 3 3 0 0 0 .653 4.397 3 3 0 0 0 3.167.104.5.5 0 0 1 .5.866 4 4 0 0 1-5.644-1.814 4.003 4.003 0 0 1 2.357-5.438 4 4 0 0 1 3.786.667l1.374-1.374A5.996 5.996 0 0 0 2 8a6 6 0 0 0 10.242 4.242.501.501 0 0 1 .708.708A7.002 7.002 0 0 1 2.18 4.111 7 7 0 0 1 12.583 2.71z" /></SvgRoot>;
});
export default IconRadar;
