import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleQuestion = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleQuestion(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="circle-question"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m0 8.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M8 4a2.25 2.25 0 0 1 .634 4.41.3.3 0 0 0-.118.069L8.5 8.5V9a.5.5 0 0 1-1 0v-.5c0-.575.46-.935.853-1.05a1.25 1.25 0 1 0-1.603-1.2.5.5 0 0 1-1 0A2.25 2.25 0 0 1 8 4" /></SvgRoot>;
});
export default IconCircleQuestion;
