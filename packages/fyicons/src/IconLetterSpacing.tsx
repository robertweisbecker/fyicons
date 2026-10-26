import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterSpacing = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterSpacing(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.998 10.853a.4.4 0 0 1 .657-.308l1.974 1.647a.4.4 0 0 1 0 .614l-1.974 1.647a.4.4 0 0 1-.657-.308v-1.147H4.003v1.147a.4.4 0 0 1-.656.308l-1.975-1.647a.4.4 0 0 1 0-.614l1.975-1.647a.4.4 0 0 1 .656.308v1.145h7.995zM3.285 2.497c.336-.582 1.234-.54 1.49.124l2.192 5.7a.5.5 0 0 1-.934.359L5.388 7H2.613l-.646 1.68a.5.5 0 0 1-.934-.36l2.193-5.699zm8 0c.336-.582 1.234-.54 1.49.124l2.192 5.7a.5.5 0 0 1-.934.359L13.389 7h-2.775l-.646 1.68a.5.5 0 0 1-.934-.36l2.193-5.699zM2.997 6h2.006L4 3.392zm8 0h2.006L12 3.392z" /></SvgRoot>;
});
export default IconLetterSpacing;
