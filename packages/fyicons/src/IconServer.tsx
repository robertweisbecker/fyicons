import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconServer = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconServer(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="server"><path stroke="currentColor" d="M2.5 4.5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2V8h-11zm0 3.5h11v3.5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2z" /><circle cx={10.5} cy={5.5} r={0.75} fill="currentColor" /><circle cx={5.5} cy={10.5} r={0.75} fill="currentColor" /><path fill="currentColor" d="M8 10h1v2H8zM5 4h1v2H5zm5 6h1v2h-1zM7 4h1v2H7z" />{props.children}</SvgRoot>;
});
export default IconServer;
