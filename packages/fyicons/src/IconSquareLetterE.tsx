import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterE = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterE(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-e"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 5.5h-3v2.375m0 0h2.25m-2.25 0V10.5h3" /><rect width={11} height={11} x={2.5} y={2.5} stroke="currentColor" rx={2} />{props.children}</SvgRoot>;
});
export default IconSquareLetterE;
