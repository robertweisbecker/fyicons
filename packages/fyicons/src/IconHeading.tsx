import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeading = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeading(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M5.5 2a.5.5 0 0 1 .1.99l-.2.02a.5.5 0 0 0-.4.49V7h6V3.5a.5.5 0 0 0-.4-.49l-.2-.02a.5.5 0 0 1 .1-.99h2a.5.5 0 0 1 .1.99l-.2.02a.5.5 0 0 0-.4.49v9a.5.5 0 0 0 .4.49l.2.02a.5.5 0 0 1-.1.99h-2a.5.5 0 0 1-.1-.99l.2-.02a.5.5 0 0 0 .4-.49V8H5v4.5a.5.5 0 0 0 .4.49l.2.02a.5.5 0 0 1-.1.99h-2a.5.5 0 0 1-.1-.99l.2-.02a.5.5 0 0 0 .4-.49v-9a.5.5 0 0 0-.4-.49l-.2-.02A.5.5 0 0 1 3.5 2z" /></SvgRoot>;
});
export default IconHeading;
