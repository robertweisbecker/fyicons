import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMoonFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMoonFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="moon-fill"><path fill="currentColor" d="M7.358 1.029a.501.501 0 0 1 .405.845 4.5 4.5 0 0 0 6.361 6.361.501.501 0 0 1 .846.405 7 7 0 1 1-7.612-7.611" /></SvgRoot>;
});
export default IconMoonFill;
