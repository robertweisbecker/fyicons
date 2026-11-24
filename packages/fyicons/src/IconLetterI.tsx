import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterI = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterI(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-i"><path stroke="currentColor" strokeLinecap="round" d="M8 2.5v11m-3.5 0h7m-7-11h7" />{props.children}</SvgRoot>;
});
export default IconLetterI;
