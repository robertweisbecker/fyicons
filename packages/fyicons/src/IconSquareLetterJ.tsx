import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterJ = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterJ(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-j"><path stroke="currentColor" strokeLinecap="round" d="M9.5 5.5V9a1.5 1.5 0 1 1-3 0v-.5" /><rect width={11} height={11} x={2.5} y={2.5} stroke="currentColor" rx={2} />{props.children}</SvgRoot>;
});
export default IconSquareLetterJ;
