import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterP = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterP(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-p"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.5 8.192h1.654a1.346 1.346 0 0 0 0-2.692H6.5zm0 0V10.5" /><rect width={11} height={11} x={2.5} y={2.5} stroke="currentColor" rx={2} />{props.children}</SvgRoot>;
});
export default IconSquareLetterP;
