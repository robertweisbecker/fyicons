import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextSubmit = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextSubmit(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.5 7a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.5 11.5H5A2.5 2.5 0 0 1 2.5 9V2.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m11.5 9.5 2 2-2 2m-6-9h7" /></SvgRoot>;
});
export default IconTextSubmit;
