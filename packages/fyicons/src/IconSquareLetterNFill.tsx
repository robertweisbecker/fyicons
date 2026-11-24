import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSquareLetterNFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSquareLetterNFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="square-letter-n-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM9.791 5a.5.5 0 0 0-.5.5v3.677L5.976 5.419a.5.5 0 0 0-.875.331v4.75a.5.5 0 0 0 1 0V7.072l3.315 3.76a.501.501 0 0 0 .875-.332v-5a.5.5 0 0 0-.5-.5" />{props.children}</SvgRoot>;
});
export default IconSquareLetterNFill;
