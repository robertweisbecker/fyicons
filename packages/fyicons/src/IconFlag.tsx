import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFlag = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFlag(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M3.5 1a.5.5 0 0 1 .5.5v.898c.238-.105.523-.211.849-.29 1.016-.246 2.41-.238 3.919.72 1.247.792 2.355.784 3.149.592a4 4 0 0 0 1.204-.514l.06-.041.011-.01h.001A.5.5 0 0 1 14 3.25v7a.5.5 0 0 1-.192.394l-.002.002-.003.002-.01.007a1 1 0 0 1-.117.083 5 5 0 0 1-1.524.654c-1.017.246-2.41.238-3.92-.72-1.247-.791-2.355-.784-3.149-.592a4 4 0 0 0-.952.364q-.074.04-.131.077v3.98a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5m4.732 2.672c-1.247-.791-2.355-.784-3.149-.592a4 4 0 0 0-.952.364q-.074.04-.131.077v5.877c.238-.105.523-.211.849-.29 1.016-.246 2.41-.238 3.919.72 1.247.792 2.355.784 3.149.592a4 4 0 0 0 .952-.364q.074-.042.131-.078V4.101a5 5 0 0 1-.849.291c-1.016.246-2.41.238-3.919-.72" /></SvgRoot>;
});
export default IconFlag;
