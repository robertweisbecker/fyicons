import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGridMixedLeft = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGridMixedLeft(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="grid-mixed-left"><path fill="currentColor" d="M6 2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm7 7a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zM3 13h3V3H3zm7-3v3h3v-3zm3-8a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-3 4h3V3h-3z" />{props.children}</SvgRoot>;
});
export default IconGridMixedLeft;
