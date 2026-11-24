import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterK = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterK(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-k"><path stroke="currentColor" strokeLinecap="round" d="M4.5 2.5v11M7 8l4.5 5.5m-7-4 7-7" />{props.children}</SvgRoot>;
});
export default IconLetterK;
