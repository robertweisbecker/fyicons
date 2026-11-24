import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterD = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterD(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-d"><path stroke="currentColor" strokeLinejoin="round" d="M3.5 2.5H7a5.5 5.5 0 1 1 0 11H3.5z" />{props.children}</SvgRoot>;
});
export default IconLetterD;
