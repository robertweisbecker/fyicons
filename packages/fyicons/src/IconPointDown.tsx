import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPointDown = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPointDown(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.16429 12.4783L3.26803 6.54918C2.83105 5.88421 3.30804 5 4.10374 5H11.8963C12.692 5 13.1689 5.88421 12.732 6.54918L8.83571 12.4783C8.4407 13.0794 7.5593 13.0794 7.16429 12.4783Z" fill="currentColor" /></SvgRoot>;
});
export default IconPointDown;
