import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterXFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterXFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-x-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-1.463 3.09a.5.5 0 0 0-.696.123L8 7.128 6.66 5.213a.5.5 0 0 0-.82.574L7.39 8l-1.55 2.213a.5.5 0 0 0 .82.574L8 8.871l1.34 1.916a.5.5 0 0 0 .82-.574L8.61 8l1.55-2.213a.5.5 0 0 0-.123-.696" />{props.children}</SvgRoot>;
});
export default IconSquareLetterXFill;
