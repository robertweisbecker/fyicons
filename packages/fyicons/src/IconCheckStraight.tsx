import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCheckStraight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCheckStraight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="check-straight"><path fill="currentColor" d="M13.106 3.194a.5.5 0 1 1 .789.613l-7 9a.5.5 0 0 1-.749.047l-4-4a.5.5 0 0 1 .708-.707l3.6 3.6z" /></SvgRoot>;
});
export default IconCheckStraight;
