import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRuler = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRuler(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="ruler"><path fill="currentColor" d="M5.707 11 5 11.707 2.293 9 3 8.293zm1-3L6 8.707 4.293 7 5 6.293zm3-1L9 7.706 6.293 5 7 4.293zm1-3L10 4.707 8.293 3 9 2.293z" /><rect width={5.69} height={14.19} x={11.005} y={0.971} stroke="currentColor" rx={1.277} transform="rotate(45 11.005 .971)" />{props.children}</SvgRoot>;
});
export default IconRuler;
