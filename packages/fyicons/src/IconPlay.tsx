import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPlay = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPlay(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M4 3.977C4 2.61 5.495 1.77 6.661 2.482l6.599 4.024a1.75 1.75 0 0 1 0 2.988l-6.6 4.024c-1.165.71-2.66-.129-2.66-1.495zm2.14-.641a.75.75 0 0 0-1.14.64v8.048a.75.75 0 0 0 1.14.64l6.6-4.023a.75.75 0 0 0 0-1.282z" /></SvgRoot>;
});
export default IconPlay;
