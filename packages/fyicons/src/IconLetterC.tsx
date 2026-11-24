import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterC = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterC(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-c"><path stroke="currentColor" strokeLinecap="round" d="M11.527 4.53c-.928-1.409-2.005-2.022-3.568-2.03C5.371 2.486 3.5 5.34 3.5 8s1.87 5.55 4.46 5.5c1.472-.028 2.79-.75 3.54-2.03" />{props.children}</SvgRoot>;
});
export default IconLetterC;
