import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterSpacing = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterSpacing(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-spacing"><path fill="currentColor" d="M11.998 10.852a.4.4 0 0 1 .656-.306l1.976 1.645a.4.4 0 0 1 0 .614l-1.976 1.647a.4.4 0 0 1-.656-.308V13H4.003v1.145a.4.4 0 0 1-.656.308l-1.975-1.646a.4.4 0 0 1 0-.615l1.975-1.645a.4.4 0 0 1 .656.306V12h7.995zM3.285 2.497c.336-.582 1.233-.54 1.49.124l2.192 5.7a.5.5 0 0 1-.934.359L5.388 7H2.612l-.645 1.68a.5.5 0 0 1-.934-.36l2.193-5.7zm8 0c.336-.582 1.233-.54 1.49.124l2.192 5.7a.5.5 0 0 1-.934.359L13.388 7h-2.776l-.645 1.68a.5.5 0 0 1-.934-.36l2.193-5.7zM2.997 6h2.006L4 3.39zm8 0h2.006L12 3.39z" />{props.children}</SvgRoot>;
});
export default IconLetterSpacing;
