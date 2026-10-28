import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCrop = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCrop(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="crop"><path d="M4.5 1.5V11C4.5 11.2761 4.72386 11.5 5 11.5H14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M1.5 4.5H11C11.2761 4.5 11.5 4.72386 11.5 5V14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconCrop;
