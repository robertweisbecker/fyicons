import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterR = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterR(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-r"><path stroke="currentColor" strokeLinejoin="round" d="M4.5 2.5h4a3 3 0 1 1 0 6h-4z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.5 2.5v11m4-5 3 5" />{props.children}</SvgRoot>;
});
export default IconLetterR;
