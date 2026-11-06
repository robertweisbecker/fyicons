import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBorderRadius = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBorderRadius(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="border-radius"><path fill="currentColor" d="M2.5 10a.5.5 0 0 1 .5.5v.5a2 2 0 0 0 2 2h.5a.5.5 0 0 1 0 1H5a3 3 0 0 1-3-3v-.5a.5.5 0 0 1 .5-.5m11 0a.5.5 0 0 1 .5.5v.5a3 3 0 0 1-3 3h-.5a.5.5 0 0 1 0-1h.5a2 2 0 0 0 2-2v-.5a.5.5 0 0 1 .5-.5m-8-.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m5 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-5-5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m5 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M5.5 2a.5.5 0 0 1 0 1H5a2 2 0 0 0-2 2v.5a.5.5 0 0 1-1 0V5a3 3 0 0 1 3-3zM11 2a3 3 0 0 1 3 3v.5a.5.5 0 0 1-1 0V5a2 2 0 0 0-2-2h-.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconBorderRadius;
