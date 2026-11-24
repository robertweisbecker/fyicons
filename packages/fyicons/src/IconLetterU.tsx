import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterU = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterU(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-u"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.5 2.5V9a4.5 4.5 0 1 0 9 0V2.5" />{props.children}</SvgRoot>;
});
export default IconLetterU;
