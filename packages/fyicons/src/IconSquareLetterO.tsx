import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterO = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterO(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-o"><path stroke="currentColor" d="M8 5.375c1.63 0 2.375 1.378 2.375 2.625S9.629 10.625 8 10.625 5.625 9.247 5.625 8 6.371 5.375 8 5.375Z" /><rect width={11} height={11} x={2.5} y={2.5} stroke="currentColor" rx={2} />{props.children}</SvgRoot>;
});
export default IconSquareLetterO;
