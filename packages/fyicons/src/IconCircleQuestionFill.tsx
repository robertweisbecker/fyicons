import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleQuestionFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleQuestionFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 9.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M8 4a2.25 2.25 0 0 0-2.25 2.25.5.5 0 0 0 1 0 1.25 1.25 0 1 1 1.603 1.2c-.394.115-.853.475-.853 1.05V9a.5.5 0 0 0 1 0v-.5l.016-.021a.3.3 0 0 1 .118-.07A2.251 2.251 0 0 0 8 4" /></SvgRoot>;
});
export default IconCircleQuestionFill;
