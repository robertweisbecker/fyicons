import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUserGroupFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconUserGroupFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M5.501 9c2.014 0 3.6 1.144 4.22 2.858a1.49 1.49 0 0 1-.307 1.534A1.9 1.9 0 0 1 8 14H3a1.9 1.9 0 0 1-1.412-.608 1.49 1.49 0 0 1-.307-1.534C1.902 10.144 3.488 9 5.502 9M11 9c1.038 0 1.8.324 2.342.808.532.475.815 1.07.967 1.562a1.2 1.2 0 0 1-.25 1.17c-.26.291-.649.46-1.06.46h-2.266c.12-.457.115-.965-.071-1.481a5.3 5.3 0 0 0-1.411-2.12C9.717 9.152 10.294 9 11 9M5.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m5.496 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></SvgRoot>;
});
export default IconUserGroupFill;
