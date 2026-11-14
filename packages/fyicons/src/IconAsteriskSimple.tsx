import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAsteriskSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAsteriskSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="asterisk-simple"><path fill="currentColor" d="M8 1c.416 0 .752.342.745.759l-.11 5.954 5.63-1.944a.746.746 0 1 1 .46 1.418L9.027 8.922l3.59 4.753a.745.745 0 1 1-1.206.876L8 9.668l-3.412 4.883a.745.745 0 1 1-1.206-.876l3.59-4.753-5.698-1.735a.746.746 0 1 1 .46-1.417l5.63 1.944-.11-5.955A.745.745 0 0 1 8 1" />{props.children}</SvgRoot>;
});
export default IconAsteriskSimple;
