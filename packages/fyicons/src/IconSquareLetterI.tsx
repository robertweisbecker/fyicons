import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterI = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterI(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-i"><path stroke="currentColor" strokeLinecap="round" d="M8 5.5v5m-1.5 0h3m-3-5h3" /><rect width={11} height={11} x={2.5} y={2.5} stroke="currentColor" rx={2} />{props.children}</SvgRoot>;
});
export default IconSquareLetterI;
