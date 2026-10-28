import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCaretDownLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCaretDownLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="caret-down-lg"><path d="M11.936 6.00049C12.5854 6.00049 12.928 6.7698 12.4937 7.25244L8.55518 11.6284C8.25725 11.959 7.7378 11.9591 7.43994 11.6284L3.50146 7.25244C3.06712 6.76984 3.40985 6.00061 4.05908 6.00049H11.936Z" fill="currentColor" /></SvgRoot>;
});
export default IconCaretDownLg;
