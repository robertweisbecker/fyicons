import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterQ = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterQ(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-q"><path stroke="currentColor" d="M8 5.4c1.63 0 2.375 1.365 2.375 2.6S9.629 10.6 8 10.6 5.625 9.235 5.625 8 6.371 5.4 8 5.4Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10.462 11.495-1.998-2.5" /><rect width={11} height={11} x={2.5} y={2.5} stroke="currentColor" rx={2} />{props.children}</SvgRoot>;
});
export default IconSquareLetterQ;
