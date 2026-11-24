import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconServer = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconServer(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="server"><rect width={11} height={10} x={2.5} y={3.5} stroke="currentColor" rx={2} /><path stroke="currentColor" d="M2.5 8.5h11" /><circle cx={8.5} cy={5.5} r={0.5} fill="currentColor" /><circle cx={11.5} cy={11.5} r={0.5} fill="currentColor" /><rect width={2} height={1} x={10} y={5} fill="currentColor" rx={0.5} /><rect width={2} height={1} x={8} y={11} fill="currentColor" rx={0.5} />{props.children}</SvgRoot>;
});
export default IconServer;
