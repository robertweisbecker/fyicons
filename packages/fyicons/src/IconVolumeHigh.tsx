import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVolumeHigh = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeHigh(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.92 2.237C7.726 1.52 9 2.092 9 3.17v9.66c0 1.078-1.274 1.65-2.08.934L3.81 11H1.5A1.5 1.5 0 0 1 0 9.5v-3A1.5 1.5 0 0 1 1.5 5h2.31zM8 3.17a.25.25 0 0 0-.416-.186l-3.252 2.89A.5.5 0 0 1 4 6H1.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H4l.09.008a.5.5 0 0 1 .242.118l3.252 2.89A.25.25 0 0 0 8 12.83zm2.499-.145a5 5 0 0 1 4.12 3.061 5 5 0 0 1-1.084 5.448 5 5 0 0 1-3.036 1.44c-.275.027-.499-.199-.499-.475s.225-.497.499-.531a4 4 0 0 0 0-7.938C10.225 3.996 10 3.775 10 3.5c0-.277.224-.503.499-.475m-.004 3.04a1.997 1.997 0 0 1 1.353 2.703 2 2 0 0 1-1.353 1.172c-.267.068-.495-.162-.495-.438v-.107c0-.217.182-.386.383-.469a1 1 0 0 0 0-1.848c-.2-.083-.383-.252-.383-.468v-.108c0-.276.228-.506.495-.437" /></SvgRoot>;
});
export default IconVolumeHigh;
