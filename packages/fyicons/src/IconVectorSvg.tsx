import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVectorSvg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVectorSvg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="vector-svg"><path fill="currentColor" d="M8 2a1 1 0 0 1 .5 1.865V5c0 .58-.085 1.5-.155 2.167.422-.522 1.012-1.232 1.423-1.643l.803-.802a.999.999 0 0 1 1.672-.965 1 1 0 0 1-.966 1.673l-.802.801c-.411.411-1.12 1.002-1.643 1.424C9.5 7.585 10.419 7.5 11 7.5h1.136a1 1 0 1 1-.001 1H11c-.581 0-1.5-.086-2.168-.156.522.422 1.232 1.012 1.644 1.424l.802.802a1 1 0 1 1-.707.707l-.802-.802c-.411-.411-1.002-1.12-1.424-1.643.07.668.156 1.587.156 2.168v1.136a.999.999 0 1 1-1.5.864c0-.37.201-.692.5-.865V11c0-.581.084-1.5.154-2.168-.422.522-1.01 1.233-1.422 1.644l-.803.802a1 1 0 1 1-.706-.708l.802-.801c.411-.411 1.12-1.003 1.642-1.425C6.5 8.414 5.581 8.5 5 8.5H3.864A.999.999 0 0 1 2 8a1 1 0 0 1 1.865-.5H5c.581 0 1.5.085 2.168.155-.522-.422-1.232-1.012-1.643-1.423l-.802-.802a1 1 0 1 1 .707-.707l.802.802c.411.411 1.001 1.12 1.423 1.642C7.585 6.499 7.5 5.581 7.5 5V3.864A.999.999 0 0 1 8 2" /></SvgRoot>;
});
export default IconVectorSvg;
