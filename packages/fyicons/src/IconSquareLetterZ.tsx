import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterZ = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterZ(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-z"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.559 5.5h2.715a.25.25 0 0 1 .206.392l-2.902 4.216a.25.25 0 0 0 .206.392H9.5" /><rect width={11} height={11} x={2.5} y={2.5} stroke="currentColor" rx={2} />{props.children}</SvgRoot>;
});
export default IconSquareLetterZ;
