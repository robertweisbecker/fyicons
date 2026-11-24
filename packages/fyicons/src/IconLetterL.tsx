import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterL = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterL(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-l"><path stroke="currentColor" strokeLinecap="round" d="M4.5 2.5v11m0 0h7" />{props.children}</SvgRoot>;
});
export default IconLetterL;
