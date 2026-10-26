import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArticleSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArticleSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.5 13a.5.5 0 0 1 0 1h-8a.5.5 0 0 1 0-1zm2-3a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1zM9 2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM3 7h6V3H3z" /></SvgRoot>;
});
export default IconArticleSimple;
