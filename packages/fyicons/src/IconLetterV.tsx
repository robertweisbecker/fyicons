import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterV = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterV(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-v"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m3 2.5 5 11 5-11" />{props.children}</SvgRoot>;
});
export default IconLetterV;
