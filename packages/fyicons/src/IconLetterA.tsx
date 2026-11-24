import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterA = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterA(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-a"><path stroke="currentColor" strokeLinecap="round" d="M11 9.5H5m7.5 4L8.468 2.748a.5.5 0 0 0-.936 0L3.5 13.5" />{props.children}</SvgRoot>;
});
export default IconLetterA;
