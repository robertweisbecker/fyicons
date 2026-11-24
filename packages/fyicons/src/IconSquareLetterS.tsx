import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterS = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterS(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-s"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.471 9.531c.222.605.853.945 1.5.974 1.15.051 1.937-.915 1.5-1.762-.549-1.059-2.377-.703-2.915-1.75-.412-.802.315-1.727 1.415-1.618.446.045.889.25 1.25.518" /><rect width={11} height={11} x={2.5} y={2.5} stroke="currentColor" rx={2} />{props.children}</SvgRoot>;
});
export default IconSquareLetterS;
