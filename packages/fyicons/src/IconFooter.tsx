import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFooter = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFooter(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM2 10v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1zm1-6a1 1 0 0 0-1 1v4h12V5a1 1 0 0 0-1-1z" /></SvgRoot>;
});
export default IconFooter;
