import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStarHalfPiece = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStarHalfPiece(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="star-half-piece"><path fill="currentColor" d="M8 .9a1 1 0 0 1 1 1v9.478a1 1 0 0 1-.506.87l-.247.14-.434.247-.001-.001-2.948 1.738c-.79.465-1.755-.236-1.558-1.131L4.11 9.6 1.321 7.13c-.687-.608-.318-1.743.595-1.831l3.709-.358 1.486-3.417c.155-.357.46-.56.786-.615l.016-.002L8 .898zM6.426 5.61l-.118.271-.293.028-4.003.387q-.024.004-.028.009a.06.06 0 0 0-.017.055.05.05 0 0 0 .016.023l3.012 2.665.22.194-.063.289-.87 3.926q-.003.022 0 .028.005.01.02.023.016.01.027.01.007.003.027-.007l3.465-2.042.179-.105V1.989z" /></SvgRoot>;
});
export default IconStarHalfPiece;
