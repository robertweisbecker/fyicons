import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCheckStraight = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCheckStraight(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="check-straight"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m2.5 8.5 4 4 7-8" />{props.children}</SvgRoot>;
});
export default IconCheckStraight;
