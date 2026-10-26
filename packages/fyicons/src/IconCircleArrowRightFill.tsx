import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleArrowRightFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleArrowRightFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m.854 4.146a.5.5 0 1 0-.708.708L9.793 7.5H4.5a.5.5 0 0 0 0 1h5.293l-1.647 1.646a.5.5 0 1 0 .708.707l2.5-2.5a.5.5 0 0 0 .082-.113.5.5 0 0 0 .054-.339.5.5 0 0 0-.055-.142.5.5 0 0 0-.082-.113z" /></SvgRoot>;
});
export default IconCircleArrowRightFill;
