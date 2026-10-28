import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLightbulb = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLightbulb(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.23 1a4.895 4.895 0 0 1 4.875 5.337l-.054.595a5 5 0 0 1-2.017 3.584.64.64 0 0 0-.256.355l-.242 1.03c-.046.192-.12.378-.226.548a3 3 0 0 1-.31.412v.695a1.36 1.36 0 0 1-.248.732c-.297.42-.852.712-1.755.712-.904 0-1.458-.29-1.754-.713A1.35 1.35 0 0 1 6 13.491v-.63a3 3 0 0 1-.311-.412 1.9 1.9 0 0 1-.227-.549l-.264-1.122a.64.64 0 0 0-.24-.345A5 5 0 0 1 3.04 6.787l-.038-.601v-.001A4.886 4.886 0 0 1 7.879 1zm-.352 1a3.886 3.886 0 0 0-3.877 4.123l.037.602a4 4 0 0 0 1.536 2.92c.273.215.507.521.597.904l.264 1.123a.9.9 0 0 0 .106.254 1.714 1.714 0 0 0 2.918 0 .9.9 0 0 0 .104-.254l.241-1.03c.094-.399.344-.715.635-.93a4 4 0 0 0 1.616-2.87l.054-.595a3.895 3.895 0 0 0-3.666-4.241L8.23 2z" /><path stroke="currentColor" strokeLinecap="round" d="M8 13.5v-5m0 0 1.5-1M8 8.5l-1.5-1" /></SvgRoot>;
});
export default IconLightbulb;
