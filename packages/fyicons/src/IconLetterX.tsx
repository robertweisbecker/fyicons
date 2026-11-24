import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterX = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterX(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-x"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12.5 2.5-9 11m0-11 9 11" />{props.children}</SvgRoot>;
});
export default IconLetterX;
