import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterZ = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterZ(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-z"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.5 2.5h9l-9 11h9" />{props.children}</SvgRoot>;
});
export default IconLetterZ;
