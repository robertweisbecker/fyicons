import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextWrapSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextWrapSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="text-wrap-simple"><path fill="currentColor" d="M11 7a3 3 0 1 1 0 6h-1v.896a.25.25 0 0 1-.427.177l-1.396-1.396a.25.25 0 0 1 0-.354l1.396-1.396a.25.25 0 0 1 .427.177V12h1a2 2 0 1 0 0-4H2.5a.5.5 0 0 1 0-1zm-4.5 5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm7-10a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1z" />{props.children}</SvgRoot>;
});
export default IconTextWrapSimple;
