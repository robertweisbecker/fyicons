import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterYFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterYFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-y-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-1.223 3.084a.5.5 0 0 0-.693.139L8 7.599 6.416 5.223a.5.5 0 1 0-.832.554L7.5 8.651V10.5a.5.5 0 0 0 1 0V8.651l1.916-2.874a.5.5 0 0 0-.139-.693" />{props.children}</SvgRoot>;
});
export default IconSquareLetterYFill;
