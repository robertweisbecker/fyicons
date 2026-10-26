import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVolumeHighFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeHighFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.92 2.237C7.726 1.52 9 2.092 9 3.17v9.66c0 1.079-1.274 1.65-2.08.934l-3.11-2.763H1.5A1.5 1.5 0 0 1 0 9.5v-3A1.5 1.5 0 0 1 1.5 5h2.31zm3.579.788a5 5 0 0 1 4.12 3.061 5 5 0 0 1-4.12 6.888c-.275.028-.499-.198-.499-.475s.225-.496.499-.53A4 4 0 0 0 14 7.998a4 4 0 0 0-3.501-3.968C10.225 3.996 10 3.776 10 3.5c0-.277.224-.503.499-.475m-.004 3.039a2 2 0 0 1 0 3.875c-.267.068-.495-.161-.495-.438v-.107c0-.217.182-.386.383-.469a1.001 1.001 0 0 0 0-1.847c-.2-.083-.383-.252-.383-.47v-.107c0-.276.228-.505.495-.437" /></SvgRoot>;
});
export default IconVolumeHighFill;
