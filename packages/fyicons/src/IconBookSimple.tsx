import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.75 2c.69 0 1.25.56 1.25 1.25v9.5c0 .69-.56 1.25-1.25 1.25H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1V3zm2 10h6.75a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25H6zm4.5-6a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm1-2a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconBookSimple;
