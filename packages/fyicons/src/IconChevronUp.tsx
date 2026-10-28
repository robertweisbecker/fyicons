import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChevronUp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChevronUp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chevron-up"><path fill="currentColor" d="M12.147 9.854a.5.5 0 1 0 .707-.707l-4.5-4.5a.5.5 0 0 0-.707 0l-4.5 4.5a.5.5 0 0 0 .707.707L8 5.707z" /></SvgRoot>;
});
export default IconChevronUp;
