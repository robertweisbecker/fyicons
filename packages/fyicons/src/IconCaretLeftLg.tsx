import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCaretLeftLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCaretLeftLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" stroke="currentColor" strokeLinejoin="round" d="M9.083 12.625a.25.25 0 0 0 .417-.186V4.56a.25.25 0 0 0-.417-.185L4.706 8.314a.25.25 0 0 0 0 .372z" /></SvgRoot>;
});
export default IconCaretLeftLg;
