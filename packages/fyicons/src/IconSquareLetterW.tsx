import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterW = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterW(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-w"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m4.75 5.5 1.585 5 1.489-2.825a.2.2 0 0 1 .353 0L9.681 10.5l1.569-5" /><rect width={11} height={11} x={2.5} y={2.5} stroke="currentColor" rx={2} />{props.children}</SvgRoot>;
});
export default IconSquareLetterW;
