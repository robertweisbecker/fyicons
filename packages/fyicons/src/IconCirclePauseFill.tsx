import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCirclePauseFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCirclePauseFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="circle-pause-fill"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1M6 5.25a.5.5 0 0 0-.5.5v4.5a.5.5 0 0 0 .5.5h.75a.5.5 0 0 0 .5-.5v-4.5a.5.5 0 0 0-.5-.5zm3.25 0a.5.5 0 0 0-.5.5v4.5a.5.5 0 0 0 .5.5H10a.5.5 0 0 0 .5-.5v-4.5a.5.5 0 0 0-.5-.5z" /></SvgRoot>;
});
export default IconCirclePauseFill;
