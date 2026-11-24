import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterT = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterT(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-t"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.5 2.5v11m5-11h-10" />{props.children}</SvgRoot>;
});
export default IconLetterT;
