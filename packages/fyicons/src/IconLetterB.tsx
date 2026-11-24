import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterB = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterB(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-b"><path stroke="currentColor" strokeLinejoin="round" d="M4.5 7.625h3.563a2.562 2.562 0 1 0 0-5.125H4.86a.36.36 0 0 0-.36.36zm0 0h4.063a2.938 2.938 0 0 1 0 5.875H4.912a.41.41 0 0 1-.412-.412z" />{props.children}</SvgRoot>;
});
export default IconLetterB;
