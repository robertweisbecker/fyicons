import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquarrowLeft = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquarrowLeft(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.5 8h5a2 2 0 0 0 2-2V4.5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 5.5 5.5 8 8 10.5" /></SvgRoot>;
});
export default IconSquarrowLeft;
