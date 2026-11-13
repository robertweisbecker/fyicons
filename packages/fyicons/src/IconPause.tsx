import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPause = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPause(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="pause"><rect width={3} height={11} x={3.5} y={2.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx={0.75} /><rect width={3} height={11} x={9.5} y={2.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx={0.75} /></SvgRoot>;
});
export default IconPause;
