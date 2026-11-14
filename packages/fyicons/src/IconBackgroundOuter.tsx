import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBackgroundOuter = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBackgroundOuter(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="background-outer"><path fill="currentColor" d="M13.147 2.146a.5.5 0 1 1 .707.708l-2.2 2.199c.218.347.346.757.346 1.197v.043l1.146-1.147a.5.5 0 1 1 .707.708L12 7.707v1.586l1.146-1.147a.5.5 0 1 1 .707.708l-5 5a.5.5 0 1 1-.707-.707L9.293 12H7.707l-1.853 1.854a.5.5 0 1 1-.708-.707L6.293 12H6.25c-.44 0-.85-.128-1.197-.347l-2.2 2.2a.5.5 0 1 1-.707-.707l2.2-2.2A2.24 2.24 0 0 1 4 9.75v-.043l-1.146 1.146a.5.5 0 1 1-.708-.707L4 8.294V6.707L2.854 7.854a.5.5 0 1 1-.708-.708l5-5a.5.5 0 1 1 .708.708L6.707 4h1.586l1.854-1.854a.5.5 0 1 1 .707.708L9.707 4h.043c.44 0 .85.127 1.196.346zm0 9a.5.5 0 1 1 .707.707l-2 2a.5.5 0 1 1-.707-.707zM6.25 5C5.56 5 5 5.56 5 6.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5C11 5.56 10.44 5 9.75 5zM4.146 2.146a.5.5 0 1 1 .708.708l-2 2a.5.5 0 1 1-.708-.708z" />{props.children}</SvgRoot>;
});
export default IconBackgroundOuter;
