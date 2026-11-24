import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterUFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterUFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-u-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-1.25 3a.5.5 0 0 0-.5.5v3a1.75 1.75 0 1 1-3.5 0v-3a.5.5 0 0 0-1 0v3a2.75 2.75 0 1 0 5.5 0v-3a.5.5 0 0 0-.5-.5" />{props.children}</SvgRoot>;
});
export default IconSquareLetterUFill;
