import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFileDiff = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFileDiff(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="file-diff"><path fill="currentColor" d="M7.672 1a2.5 2.5 0 0 1 1.767.732l2.829 2.829A2.5 2.5 0 0 1 13 6.328V12.5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 12.5V3a2 2 0 0 1 2-2zM5 2a1 1 0 0 0-1 1v9.5A1.5 1.5 0 0 0 5.5 14h5a1.5 1.5 0 0 0 1.5-1.5V6.328a1.5 1.5 0 0 0-.44-1.06L8.733 2.439A1.5 1.5 0 0 0 7.672 2z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 6v1.5m0 0V9m0-1.5h1.5M8 7.5H6.5m3 4h-3" />{props.children}</SvgRoot>;
});
export default IconFileDiff;
