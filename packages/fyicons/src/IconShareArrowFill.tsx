import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShareArrowFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShareArrowFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="share-arrow-fill"><path fill="currentColor" d="M8.294 2.044a.5.5 0 0 1 .536.081l5.823 5.124a1 1 0 0 1 0 1.502L8.83 13.875A.5.5 0 0 1 8 13.5V11h-.193a7.5 7.5 0 0 0-4.686 1.644l-.308.247A.5.5 0 0 1 2 12.5a7.58 7.58 0 0 1 6-7.416V2.5a.5.5 0 0 1 .294-.456" /></SvgRoot>;
});
export default IconShareArrowFill;
