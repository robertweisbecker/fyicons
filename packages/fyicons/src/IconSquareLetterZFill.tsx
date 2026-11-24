import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterZFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterZFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-z-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM6.559 5a.5.5 0 0 0 0 1h2.24L6.166 9.825A.75.75 0 0 0 6.784 11H9.5a.5.5 0 0 0 0-1H7.26l2.632-3.825A.75.75 0 0 0 9.274 5z" />{props.children}</SvgRoot>;
});
export default IconSquareLetterZFill;
