import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShare = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShare(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="share"><path fill="currentColor" d="M5.5 6a.5.5 0 0 1 0 1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-.5a.5.5 0 0 1 0-1h.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zM8 1c.14 0 .275.06.37.164l2.5 2.75a.5.5 0 0 1-.74.671L8.5 2.792V9.5a.5.5 0 0 1-1 0V2.792L5.87 4.585a.5.5 0 0 1-.74-.671l2.5-2.75A.5.5 0 0 1 8 1" /></SvgRoot>;
});
export default IconShare;
