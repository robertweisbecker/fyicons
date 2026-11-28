import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterW = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterW(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-w"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m1.5 2.5 3.25 11 2.942-7.694a.33.33 0 0 1 .616 0L11.25 13.5l3.25-11" />{props.children}</SvgRoot>;
});
export default IconLetterW;
