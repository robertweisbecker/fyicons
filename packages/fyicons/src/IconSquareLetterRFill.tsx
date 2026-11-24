import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterRFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterRFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-r-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-5 3a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V9h.75l1.35 1.8a.5.5 0 0 0 .8-.6L8.854 8.806A1.998 1.998 0 0 0 8 5zM8 6a1 1 0 0 1 0 2H7V6z" />{props.children}</SvgRoot>;
});
export default IconSquareLetterRFill;
