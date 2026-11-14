import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBackground = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBackground(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="background"><path fill="currentColor" d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zM3.987 12.721c.298.176.644.28 1.014.28h.293l7.708-7.708V5c0-.37-.104-.717-.28-1.014zm5.722.28H11a2 2 0 0 0 2-2V9.706zm-3 0h1.585l4.708-4.708V6.707zM3 10.706V11c0 .37.103.716.279 1.014l8.735-8.735A2 2 0 0 0 11.001 3h-.293zm0-3v1.586L9.293 3H7.708zM5 3a2 2 0 0 0-2 2v1.293L6.293 3z" />{props.children}</SvgRoot>;
});
export default IconBackground;
