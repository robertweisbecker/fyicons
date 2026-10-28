import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMoon = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMoon(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="moon"><path fill="currentColor" d="M7.358 1.031a.5.5 0 0 1 .405.846 4.5 4.5 0 0 0 6.361 6.36.5.5 0 0 1 .846.403 7 7 0 1 1-7.612-7.61m-1.13 1.237A6 6 0 0 0 8 14a6 6 0 0 0 5.731-4.23A5.47 5.47 0 0 1 11 10.5a5.5 5.5 0 0 1-4.772-8.232" /></SvgRoot>;
});
export default IconMoon;
