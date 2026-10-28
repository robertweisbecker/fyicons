import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBroom = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBroom(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10.25 11.25-4.5-4.5M2.843 8.5H1.5v1a2 2 0 0 0 2 2l-1 1a5.08 5.08 0 0 0 6.541-.541L10.5 10.5a1.414 1.414 0 0 0 0-2v-1a1 1 0 0 0-1-1h-1a1.414 1.414 0 0 0-2 0l-.828.828A4 4 0 0 1 2.843 8.5m11.657-6-4 4" /></SvgRoot>;
});
export default IconBroom;
