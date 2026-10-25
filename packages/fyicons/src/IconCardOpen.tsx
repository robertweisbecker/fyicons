import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCardOpen = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCardOpen(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="card-open"><path d="M12.5 13.4692V5.89013C12.5 5.21632 12.0507 4.62519 11.4015 4.44485L4.76764 2.60212C4.13045 2.42512 3.5 2.90432 3.5 3.56564V11.7192C3.5 12.1781 3.8123 12.5781 4.25746 12.6894L11.2575 14.4394C11.8886 14.5972 12.5 14.1198 12.5 13.4692Z" stroke="currentColor" /><path d="M11.5 4.5V2.71048C11.5 1.94319 10.8151 1.35701 10.057 1.47546L4.34562 2.36787C3.85885 2.44393 3.5 2.8632 3.5 3.35588V5.5" stroke="currentColor" /><path d="M5.5 5.5L9.5 6.5" stroke="currentColor" strokeWidth={0.75} strokeLinecap="round" /><path d="M5.5 7.5L8.5 8.25" stroke="currentColor" strokeWidth={0.75} strokeLinecap="round" /></SvgRoot>;
});
export default IconCardOpen;
