import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVolumeLowFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeLowFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.92 2.237C7.726 1.52 9 2.092 9 3.17v9.66c0 1.079-1.274 1.65-2.08.934L3.81 11H1.5A1.5 1.5 0 0 1 0 9.5v-3A1.5 1.5 0 0 1 1.5 5h2.31zm4.575 3.827a2 2 0 0 1 .92.524 2 2 0 0 1 .433 2.18 2 2 0 0 1-1.353 1.172c-.267.068-.495-.162-.495-.438v-.107c0-.217.182-.386.383-.469a1 1 0 0 0 0-1.848c-.2-.083-.383-.252-.383-.47v-.106c0-.276.228-.507.495-.438" /></SvgRoot>;
});
export default IconVolumeLowFill;
