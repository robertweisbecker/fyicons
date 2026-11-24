import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterV = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterV(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-v"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m5.5 5.5 2.5 5 2.5-5" /><rect width={11} height={11} x={2.5} y={2.5} stroke="currentColor" rx={2} />{props.children}</SvgRoot>;
});
export default IconSquareLetterV;
