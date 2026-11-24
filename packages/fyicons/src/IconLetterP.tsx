import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterP = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterP(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-p"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.5 8.423h4.038a2.962 2.962 0 1 0 0-5.923H5.5zm0 0V13.5" />{props.children}</SvgRoot>;
});
export default IconLetterP;
