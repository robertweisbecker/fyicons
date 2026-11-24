import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFileImage = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFileImage(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="file-image"><use xlinkHref={"#" + idPrefix + "stroke0_505_556"} fill="currentColor" /><mask id={idPrefix + "stroke1_505_556"} fill="white"><use xlinkHref={"#" + idPrefix + "stroke0_505_556"} /></mask><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M4 9h.197C5.324 9 6.375 9.563 7 10.5A3.37 3.37 0 0 0 9.803 12H12v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" mask={"url(#" + idPrefix + "stroke1_505_556)"} /><path fill="currentColor" d="M9.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" /><path fill="currentColor" d="M7.672 1a2.5 2.5 0 0 1 1.767.732l2.829 2.829A2.5 2.5 0 0 1 13 6.328V12.5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 12.5V3a2 2 0 0 1 2-2zM5 2a1 1 0 0 0-1 1v9.5A1.5 1.5 0 0 0 5.5 14h5a1.5 1.5 0 0 0 1.5-1.5V6.75a.75.75 0 0 0-.75-.75H8.5A1.5 1.5 0 0 1 7 4.5V2zm3 2.5a.5.5 0 0 0 .5.5h2.75l.045.002-2.563-2.563A1.5 1.5 0 0 0 8 2.037z" /><defs><path id={idPrefix + "stroke0_505_556"} d="M4.197 9H4v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1H9.803A3.37 3.37 0 0 1 7 10.5 3.37 3.37 0 0 0 4.197 9" /></defs>{props.children}</SvgRoot>;
});
export default IconFileImage;
