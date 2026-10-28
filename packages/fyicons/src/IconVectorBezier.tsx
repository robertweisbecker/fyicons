import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVectorBezier = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVectorBezier(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 3a2 2 0 0 1 1.812 1.157c.893-.071 1.787-.156 2.681-.156h.007l.823-.824a.25.25 0 0 1 .355 0l1.145 1.146a.25.25 0 0 1 0 .354l-1.145 1.146a.25.25 0 0 1-.355 0l-.821-.822h-.009c-.56 0-1.12-.038-1.68-.082.37.2.717.445 1.028.742a5.38 5.38 0 0 1 1.639 3.4A1.999 1.999 0 1 1 11 11a2 2 0 0 1 1.487-1.933 4 4 0 0 0-.027-.274c-.13-.931-.58-1.818-1.241-2.51a5.3 5.3 0 0 0-1.245-.986 1.998 1.998 0 0 1-3.95.002 5.3 5.3 0 0 0-1.243.984c-.66.692-1.11 1.58-1.241 2.51a4 4 0 0 0-.027.274 2 2 0 1 1-.993-.008A5.35 5.35 0 0 1 4.16 5.66c.314-.3.666-.55 1.041-.75-.567.043-1.133.08-1.7.087l-.824.825a.25.25 0 0 1-.354 0L1.178 4.677a.25.25 0 0 1 0-.354l1.146-1.146a.25.25 0 0 1 .354 0l.827.827c.893.009 1.787.09 2.68.158A2 2 0 0 1 8 3m-5.001 7a1 1 0 1 0 .002 0zM13 10a1 1 0 1 0 .002 0zM8 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></SvgRoot>;
});
export default IconVectorBezier;
