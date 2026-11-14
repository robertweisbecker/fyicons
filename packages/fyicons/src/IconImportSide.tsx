import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconImportSide = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconImportSide(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="import-side"><path fill="currentColor" d="M2 10.5a.5.5 0 0 1 1 0v1A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7A1.5 1.5 0 0 0 3 4.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5zM1.999 8a.5.5 0 0 1 .5-.5h6.294L7.146 5.854a.5.5 0 1 1 .708-.708l2.5 2.5a.5.5 0 0 1 .064.63l-.064.078-2.5 2.5a.5.5 0 1 1-.708-.707L8.793 8.5H2.499a.5.5 0 0 1-.5-.5" />{props.children}</SvgRoot>;
});
export default IconImportSide;
