import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterJFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterJFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-j-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-2 3a.5.5 0 0 0-.5.5V9a1 1 0 0 1-2 0v-.5a.5.5 0 0 0-1 0V9a2 2 0 1 0 4 0V5.5a.5.5 0 0 0-.5-.5" />{props.children}</SvgRoot>;
});
export default IconSquareLetterJFill;
