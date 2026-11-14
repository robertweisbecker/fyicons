import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHomeFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHomeFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="home-fill"><path fill="currentColor" d="M6.708 1.439a2 2 0 0 1 2.585 0l5.288 4.475A1.183 1.183 0 0 1 13.817 8h-.816v4.5a1.5 1.5 0 0 1-1.5 1.5h-7a1.5 1.5 0 0 1-1.5-1.5L3.002 8h-.818a1.183 1.183 0 0 1-.764-2.086zm.542 8.56a.75.75 0 0 0-.75.75v3.25h3v-3.25a.75.75 0 0 0-.75-.75z" />{props.children}</SvgRoot>;
});
export default IconHomeFill;
