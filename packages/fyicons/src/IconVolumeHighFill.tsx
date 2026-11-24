import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVolumeHighFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeHighFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="volume-high-fill"><path fill="currentColor" d="M6.92 2.237C7.726 1.52 9 2.092 9 3.17v9.66c0 1.078-1.274 1.65-2.08.933L3.81 11H1.5A1.5 1.5 0 0 1 0 9.5v-3A1.5 1.5 0 0 1 1.5 5h2.31zm4.579.787A5.006 5.006 0 0 1 16 8a5 5 0 0 1-4.501 4.974c-.275.028-.499-.198-.499-.474 0-.277.225-.497.499-.532A4.004 4.004 0 0 0 15 8a4 4 0 0 0-3.501-3.97C11.225 3.997 11 3.777 11 3.5s.224-.503.499-.476m-.004 3.04a2 2 0 0 1 .92.524 2 2 0 0 1-.92 3.352c-.267.068-.495-.161-.495-.437v-.108c0-.217.182-.386.383-.469a1 1 0 0 0 0-1.847c-.2-.083-.383-.252-.383-.469v-.107c0-.277.228-.507.495-.439" />{props.children}</SvgRoot>;
});
export default IconVolumeHighFill;
