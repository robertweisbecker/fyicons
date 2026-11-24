import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterH = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterH(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-h"><path stroke="currentColor" strokeLinecap="round" d="M4.5 2.5v11m7-11v11m-7-5h7" />{props.children}</SvgRoot>;
});
export default IconLetterH;
