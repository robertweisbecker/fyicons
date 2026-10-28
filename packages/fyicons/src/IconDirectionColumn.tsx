import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDirectionColumn = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDirectionColumn(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="direction-column"><path fill="currentColor" d="M6 9a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm-3 4h3v-3H3zm8.5-10a.5.5 0 0 1 .5.5v7.793l1.646-1.647a.5.5 0 1 1 .707.707l-2.5 2.5a.5.5 0 0 1-.628.065l-.079-.064-2.5-2.5a.5.5 0 1 1 .708-.708L11 11.293V3.5a.5.5 0 0 1 .5-.5M6 2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM3 6h3V3H3z" /></SvgRoot>;
});
export default IconDirectionColumn;
