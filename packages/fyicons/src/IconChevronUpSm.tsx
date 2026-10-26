import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChevronUpSm = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChevronUpSm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 4.5a.5.5 0 0 1 .353.146l3.5 3.5a.5.5 0 0 1-.707.708L8 5.707 4.853 8.854a.5.5 0 0 1-.707-.708l3.5-3.5A.5.5 0 0 1 8 4.5" /></SvgRoot>;
});
export default IconChevronUpSm;
