import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterJ = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterJ(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-j"><path stroke="currentColor" strokeLinecap="round" d="M10.5 2.5v7.67a3.5 3.5 0 1 1-7 0V8.5" />{props.children}</SvgRoot>;
});
export default IconLetterJ;
