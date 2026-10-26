import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAnchor = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAnchor(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a1.998 1.998 0 0 1 .5 3.934V6h1a.5.5 0 0 1 0 1h-1v5.967a4 4 0 0 0 2.327-1.139A4 4 0 0 0 11.871 10h-.257a.5.5 0 0 1-.374-.832l.887-.997a.5.5 0 0 1 .748 0l.887.997a.5.5 0 0 1-.374.832h-.492A5 5 0 0 1 8.5 13.974v.526a.5.5 0 0 1-1 0v-.526a5 5 0 0 1-4.12-3.06A5 5 0 0 1 3.102 10h-.489a.5.5 0 0 1-.374-.832l.887-.997a.5.5 0 0 1 .748 0l.887.997a.5.5 0 0 1-.374.832h-.26q.07.27.177.53A4 4 0 0 0 7.5 12.967V7h-1a.5.5 0 0 1 0-1h1V4.934A1.998 1.998 0 0 1 8 1m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></SvgRoot>;
});
export default IconAnchor;
