import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDisclosure = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDisclosure(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.647 6.147a.5.5 0 1 1 .707.707l-3 3a.5.5 0 0 1-.707 0l-3-3a.5.5 0 0 1 .707-.707L8 8.793z" /></SvgRoot>;
});
export default IconDisclosure;
