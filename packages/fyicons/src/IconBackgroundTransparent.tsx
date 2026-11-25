import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBackgroundTransparent = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBackgroundTransparent(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="background-transparent"><path fill="currentColor" d="M3.5 4.5a1 1 0 0 1 1-1H5V5H3.5zm0 2.75H5v1.5H3.5zm0 3.75H5v1.5h-.5a1 1 0 0 1-1-1zm1.75-5.75h1.5v1.5h-1.5zm0 4h1.5v1.5h-1.5zm2-5.75h1.5V5h-1.5zm0 3.75h1.5v1.5h-1.5zm0 3.75h1.5v1.5h-1.5zm2-5.75h1.5v1.5h-1.5zm0 4h1.5v1.5h-1.5zM11 3.5h.5a1 1 0 0 1 1 1V5H11zm0 3.75h1.5v1.5H11zM11 11h1.5v.5a1 1 0 0 1-1 1H11z" /><rect width={11} height={11} x={2.5} y={2.5} stroke="currentColor" rx={2} />{props.children}</SvgRoot>;
});
export default IconBackgroundTransparent;
