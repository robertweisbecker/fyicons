import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterVFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterVFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-v-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-.776 3.053a.5.5 0 0 0-.671.223L8 9.382 5.947 5.276a.5.5 0 0 0-.894.448l2.5 5a.5.5 0 0 0 .894 0l2.5-5a.5.5 0 0 0-.223-.671" />{props.children}</SvgRoot>;
});
export default IconSquareLetterVFill;
