import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEject = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEject(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="eject"><path fill="currentColor" d="M13 10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zM3 13h10v-2H3zM7.2 2.265a1.25 1.25 0 0 1 1.6 0l5.43 4.525c.897.748.368 2.21-.8 2.21H2.571c-1.169 0-1.698-1.462-.8-2.21zm.96.769a.25.25 0 0 0-.32 0L2.412 7.557a.25.25 0 0 0 .16.443h10.857a.25.25 0 0 0 .16-.443z" /></SvgRoot>;
});
export default IconEject;
