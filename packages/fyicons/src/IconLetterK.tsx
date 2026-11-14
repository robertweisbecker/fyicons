import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterK = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterK(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-k"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-7 1A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zm5.146 2.146a.5.5 0 1 1 .707.708l-1.71 1.71 1.773 2.659a.5.5 0 1 1-.832.554L7.922 8.284 7 9.207V10.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 1 0v2.293z" />{props.children}</SvgRoot>;
});
export default IconLetterK;
