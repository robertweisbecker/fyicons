import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterC = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterC(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-c"><path stroke="currentColor" strokeLinecap="round" d="M9.5 6.25c-.438-.714-1.188-.83-1.5-.85C6.662 5.312 5.478 6.486 5.5 8s1.16 2.718 2.5 2.6c.768-.068 1.403-.553 1.75-1.183" /><rect width={11} height={11} x={2.5} y={2.5} stroke="currentColor" rx={2} />{props.children}</SvgRoot>;
});
export default IconSquareLetterC;
