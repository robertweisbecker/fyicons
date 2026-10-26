import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPlayPause = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPlayPause(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.04 7.372 2.66 4.51a.75.75 0 0 0-1.16.627v5.728a.75.75 0 0 0 1.16.627l4.38-2.863a.75.75 0 0 0 0-1.256" /><rect width={2} height={7} x={9.5} y={4.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx={0.75} /><rect width={2} height={7} x={13.5} y={4.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx={0.75} /></SvgRoot>;
});
export default IconPlayPause;
