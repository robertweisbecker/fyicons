import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconApps = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconApps(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="apps"><path fill="currentColor" d="M4.5 8.665a2.835 2.835 0 1 1 0 5.67 2.835 2.835 0 0 1 0-5.67m7 0a2.835 2.835 0 1 1 0 5.67 2.835 2.835 0 0 1 0-5.67m-7 1a1.835 1.835 0 1 0 0 3.67 1.835 1.835 0 0 0 0-3.67m7 0a1.835 1.835 0 1 0 0 3.67 1.835 1.835 0 0 0 0-3.67m-7-8a2.835 2.835 0 1 1 0 5.67 2.835 2.835 0 0 1 0-5.67m7 0a2.835 2.835 0 1 1 0 5.67 2.835 2.835 0 0 1 0-5.67m-7 1a1.835 1.835 0 1 0 0 3.67 1.835 1.835 0 0 0 0-3.67m7 0a1.835 1.835 0 1 0 0 3.67 1.835 1.835 0 0 0 0-3.67" /></SvgRoot>;
});
export default IconApps;
