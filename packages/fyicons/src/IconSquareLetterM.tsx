import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterM = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterM(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-m"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-7 1A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zm5.616 2.18A.5.5 0 0 1 11 5.5v5a.5.5 0 0 1-1 0V6.88L8.384 8.82a.5.5 0 0 1-.768 0L6 6.88v3.62a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .884-.32L8 7.719z" />{props.children}</SvgRoot>;
});
export default IconSquareLetterM;
