import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRepeatOne = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRepeatOne(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.5 7a.5.5 0 0 1 .5.5v3a2.5 2.5 0 0 1-2.5 2.5H5.001v.933a.5.5 0 0 1-.82.384l-1.72-1.433a.5.5 0 0 1 0-.768l1.72-1.432a.5.5 0 0 1 .82.384v.933H10.5a1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 0 1 .5-.5m-4.224-.947A.5.5 0 0 1 9 6.501L9.001 9H9.5a.5.5 0 0 1 0 1H7.501a.5.5 0 0 1 0-1h.5L8 7.309l-.276.139a.5.5 0 0 1-.448-.896zm2.725-3.985a.5.5 0 0 1 .82-.385l1.719 1.433a.5.5 0 0 1 0 .769l-1.72 1.432a.5.5 0 0 1-.819-.385v-.931h-5.5a1.5 1.5 0 0 0-1.5 1.5v3a.5.5 0 0 1-1 0v-3a2.5 2.5 0 0 1 2.5-2.5h5.5z" /></SvgRoot>;
});
export default IconRepeatOne;
