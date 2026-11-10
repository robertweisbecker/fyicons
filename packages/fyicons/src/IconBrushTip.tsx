import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBrushTip = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBrushTip(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="brush-tip"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.084 10s.386 1.216.417 2.25c.04 1.279-.417 2.25-.417 2.25H5.916s-.457-.971-.417-2.25c.032-1.034.417-2.25.417-2.25m6.51-6.962-1.957 6.26a1 1 0 0 1-.954.702h-3.03a1 1 0 0 1-.954-.702l-1.975-6.32c-.168-.536.141-1.1.693-1.205A15 15 0 0 1 7 1.5c2 0 3.5 1 3.5 1v-1l1.188.264a1 1 0 0 1 .737 1.274" /><path stroke="currentColor" strokeLinejoin="round" d="M11.5 6.5a2.47 2.47 0 0 1-1.481-.569L9.5 5.5l-.24.18c-.466.35-1.09.405-1.61.145l-.403-.201a1.2 1.2 0 0 0-.523-.124h-.165a.9.9 0 0 0-.809.5.9.9 0 0 1-.809.5H4.75" /></SvgRoot>;
});
export default IconBrushTip;
