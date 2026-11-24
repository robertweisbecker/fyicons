import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterHFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterHFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-h-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM9.67 5a.5.5 0 0 0-.5.5V8H6.83V5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V9h2.34v1.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5" />{props.children}</SvgRoot>;
});
export default IconSquareLetterHFill;
