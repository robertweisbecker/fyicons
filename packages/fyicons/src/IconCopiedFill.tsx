import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCopiedFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCopiedFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="copied-fill"><path fill="currentColor" d="M12.5 1A2.5 2.5 0 0 1 15 3.5v6a2.5 2.5 0 0 1-2.5 2.5H12v.5A2.5 2.5 0 0 1 9.5 15h-6A2.5 2.5 0 0 1 1 12.5v-6A2.5 2.5 0 0 1 3.5 4H4v-.5A2.5 2.5 0 0 1 6.5 1zM8.745 7.064a.5.5 0 0 0-.68.19L6.16 10.64 4.876 9.17a.5.5 0 1 0-.752.658l1.75 2a.5.5 0 0 0 .812-.084l2.25-4a.5.5 0 0 0-.19-.68M6.5 2A1.5 1.5 0 0 0 5 3.5V4h4.5A2.5 2.5 0 0 1 12 6.5V11h.5A1.5 1.5 0 0 0 14 9.5v-6A1.5 1.5 0 0 0 12.5 2z" />{props.children}</SvgRoot>;
});
export default IconCopiedFill;
