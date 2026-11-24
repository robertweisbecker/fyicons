import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterF = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterF(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-f"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 5.5h-3v2.375m2 0h-2m0 0V10.5" /><rect width={11} height={11} x={2.5} y={2.5} stroke="currentColor" rx={2} />{props.children}</SvgRoot>;
});
export default IconSquareLetterF;
