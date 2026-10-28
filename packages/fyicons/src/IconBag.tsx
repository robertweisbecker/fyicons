import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBag = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBag(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="bag"><path fill="currentColor" d="M8 1a3 3 0 0 1 3 3 3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3 3 3 0 0 1 3-3M5 5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0zm3-3a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2" /></SvgRoot>;
});
export default IconBag;
