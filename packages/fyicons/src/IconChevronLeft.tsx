import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChevronLeft = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChevronLeft(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.853 3.147a.5.5 0 0 0-.707 0l-4.5 4.5a.5.5 0 0 0 0 .707l4.5 4.5a.5.5 0 0 0 .707-.707L5.707 8l4.146-4.146a.5.5 0 0 0 0-.707" /></SvgRoot>;
});
export default IconChevronLeft;
