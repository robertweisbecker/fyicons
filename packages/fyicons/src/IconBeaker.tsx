import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBeaker = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBeaker(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="beaker"><path fill="currentColor" d="M10.5 2a.5.5 0 0 1 0 1H10v3.293l3.395 3.395c.387.387.605.913.605 1.461A2.85 2.85 0 0 1 11.15 14h-6.3A2.85 2.85 0 0 1 2 11.15c0-.549.218-1.075.605-1.463L6 6.294V3h-.5a.5.5 0 0 1 0-1zm-7.187 8.395c-.2.2-.313.471-.313.754A1.85 1.85 0 0 0 4.85 13h6.3A1.85 1.85 0 0 0 13 11.15q-.001-.08-.014-.156c-2.909-.025-4.118-.262-5.163-.508-1.013-.238-1.829-.471-4.119-.484zM7 6.5a.5.5 0 0 1-.146.354l-2.172 2.17c1.691.068 2.474.279 3.37.49.88.207 1.902.417 4.226.471L9.146 6.854A.5.5 0 0 1 9 6.5V3H7z" /></SvgRoot>;
});
export default IconBeaker;
