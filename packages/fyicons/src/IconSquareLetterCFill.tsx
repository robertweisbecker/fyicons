import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterCFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterCFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-c-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM8.033 4.901C6.368 4.791 4.975 6.24 5 8.007c.025 1.731 1.346 3.242 3.044 3.092.957-.085 1.73-.686 2.144-1.44a.5.5 0 0 0-.876-.482c-.278.506-.778.874-1.356.925-.98.087-1.937-.81-1.956-2.109-.018-1.26.958-2.16 1.968-2.094.268.018.8.114 1.106.613a.5.5 0 0 0 .853-.523c-.57-.928-1.536-1.064-1.894-1.088" />{props.children}</SvgRoot>;
});
export default IconSquareLetterCFill;
