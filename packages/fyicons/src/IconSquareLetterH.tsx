import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterH = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterH(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-h"><path stroke="currentColor" strokeLinecap="round" d="M6.33 5.5v5m3.34-5v5m-3.34-2h3.34" /><rect width={11} height={11} x={2.5} y={2.5} stroke="currentColor" rx={2} />{props.children}</SvgRoot>;
});
export default IconSquareLetterH;
