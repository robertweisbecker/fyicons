import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterMFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterMFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-m-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-.83 3.03a.5.5 0 0 0-.554.15L8 7.719l-2.116-2.54A.5.5 0 0 0 5 5.5v5a.5.5 0 0 0 1 0V6.88l1.616 1.94a.5.5 0 0 0 .768 0L10 6.88v3.62a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.33-.47" />{props.children}</SvgRoot>;
});
export default IconSquareLetterMFill;
