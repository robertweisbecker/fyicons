import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeartWide = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeartWide(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="heart-wide"><path fill="currentColor" d="M3.87 2.267c1.54-.413 3.045.146 4.13 1.408 1.085-1.262 2.591-1.82 4.13-1.408A3.864 3.864 0 0 1 15 5.999c0 1.696-.897 3.06-2.144 4.284-1.236 1.215-2.907 2.373-4.555 3.616a.5.5 0 0 1-.602 0c-1.648-1.243-3.318-2.401-4.555-3.616C1.897 9.06 1 7.695 1 6a3.864 3.864 0 0 1 2.87-3.732m8 .966c-1.253-.336-2.549.186-3.454 1.543a.5.5 0 0 1-.832 0c-.905-1.357-2.2-1.88-3.454-1.543A2.865 2.865 0 0 0 2 5.999c0 1.304.678 2.427 1.844 3.571C4.95 10.656 6.414 11.69 8 12.876c1.587-1.187 3.05-2.22 4.156-3.306C13.322 8.426 14 7.303 14 6a2.865 2.865 0 0 0-2.13-2.767" />{props.children}</SvgRoot>;
});
export default IconHeartWide;
