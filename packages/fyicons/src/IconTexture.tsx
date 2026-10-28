import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTexture = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTexture(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="texture"><path fill="currentColor" d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm6.147 4.146a.5.5 0 1 1 .707.708l-4 4a.5.5 0 1 1-.708-.707zm0 3a.5.5 0 1 1 .707.707l-1 1a.5.5 0 1 1-.707-.707zm-.5-5.5a.5.5 0 1 1 .707.708l-6 6a.5.5 0 1 1-.708-.707zm-2.5-.5a.5.5 0 1 1 .707.708l-4 4a.5.5 0 1 1-.708-.708zm-3 0a.5.5 0 1 1 .707.708l-1 1a.5.5 0 1 1-.708-.708z" /></SvgRoot>;
});
export default IconTexture;
