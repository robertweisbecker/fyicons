import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterD = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterD(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-d"><path stroke="currentColor" strokeLinejoin="round" d="M6.5 5.5H8a2.5 2.5 0 0 1 0 5H6.5z" /><rect width={11} height={11} x={2.5} y={2.5} stroke="currentColor" rx={2} />{props.children}</SvgRoot>;
});
export default IconSquareLetterD;
