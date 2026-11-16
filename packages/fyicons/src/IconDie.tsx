import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDie = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDie(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="die"><circle cx={4} cy={9} r={1} fill="currentColor" /><circle cx={7} cy={10} r={1} fill="currentColor" /><circle cx={11.5} cy={5.5} r={0.75} fill="currentColor" /><rect width={7} height={7} x={1.213} y={7.025} stroke="currentColor" rx={1.275} transform="rotate(-15 1.213 7.025)" /><rect width={5} height={5} x={10.585} y={2.085} stroke="currentColor" rx={1.134} transform="rotate(30 10.585 2.085)" /></SvgRoot>;
});
export default IconDie;
