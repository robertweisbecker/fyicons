import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCaretUpLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCaretUpLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="caret-up-lg"><path fill="currentColor" d="M7.443 4.372A.75.75 0 0 1 8.5 4.313l.058.059 3.939 4.376A.75.75 0 0 1 11.939 10H4.062a.75.75 0 0 1-.558-1.252z" /></SvgRoot>;
});
export default IconCaretUpLg;
