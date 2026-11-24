import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterY = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterY(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-y"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.5 2.5 8 8.458m0 0L3.5 2.5M8 8.458V13.5" />{props.children}</SvgRoot>;
});
export default IconLetterY;
