import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCrop = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCrop(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.5 1.5V11a.5.5 0 0 0 .5.5h9.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M1.5 4.5H11a.5.5 0 0 1 .5.5v9.5" /></SvgRoot>;
});
export default IconCrop;
