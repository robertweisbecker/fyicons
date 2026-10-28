import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRuler = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRuler(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.439 1.853a1.5 1.5 0 0 1 2.12 0l2.587 2.586a1.5 1.5 0 0 1 0 2.121L6.56 14.146a1.5 1.5 0 0 1-2.121 0L1.853 11.56a1.5 1.5 0 0 1 0-2.12zm1.414.707a.5.5 0 0 0-.707 0l-.94.939 1.501 1.5-.707.708-1.5-1.501-.794.793 2.501 2.5-.707.708L7 5.706l-.795.794 1.149 1.146.353.354L7 8.707l-.353-.354-1.149-1.146-.792.792 2.5 2.5-.707.708-2.5-2.5-1.44 1.44a.5.5 0 0 0 0 .706l2.587 2.586a.5.5 0 0 0 .707 0l7.586-7.586a.5.5 0 0 0 0-.707z" /></SvgRoot>;
});
export default IconRuler;
