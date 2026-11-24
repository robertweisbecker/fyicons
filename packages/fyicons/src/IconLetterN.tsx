import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterN = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterN(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-n"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.5 13.571V2.75a.25.25 0 0 1 .45-.15l8.1 10.8a.25.25 0 0 0 .45-.15V2.429" />{props.children}</SvgRoot>;
});
export default IconLetterN;
