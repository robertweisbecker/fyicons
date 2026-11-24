import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterW = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterW(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-w"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m1.5 2.5 3 11 3.202-6.862a.33.33 0 0 1 .598-.001l3.233 6.863 2.967-11" />{props.children}</SvgRoot>;
});
export default IconLetterW;
