import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLightbulb = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLightbulb(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="lightbulb"><path fill="currentColor" d="M8.23 1a4.896 4.896 0 0 1 4.875 5.337l-.053.595a5 5 0 0 1-2.018 3.584.64.64 0 0 0-.256.355l-.242 1.03a1.8 1.8 0 0 1-.226.548q-.14.225-.31.411v.64l.001.056a1.36 1.36 0 0 1-.248.732c-.298.42-.852.712-1.756.712-.903 0-1.457-.29-1.754-.713A1.35 1.35 0 0 1 6 13.491v-.63a3 3 0 0 1-.31-.412 1.9 1.9 0 0 1-.227-.549l-.265-1.122a.64.64 0 0 0-.24-.345A5 5 0 0 1 3.04 6.787l-.037-.601v-.001A4.886 4.886 0 0 1 7.879 1zm-.35 1A3.886 3.886 0 0 0 4 6.123l.037.602a4 4 0 0 0 1.536 2.92c.274.215.508.521.598.904l.264 1.123a.9.9 0 0 0 .105.254 1.714 1.714 0 0 0 2.918 0 .9.9 0 0 0 .104-.254l.242-1.03a1.63 1.63 0 0 1 .635-.93 4 4 0 0 0 1.616-2.87l.053-.595a3.896 3.896 0 0 0-3.666-4.241L8.23 2z" /><path stroke="currentColor" strokeLinecap="round" d="M8 13.5v-5m0 0 1.5-1M8 8.5l-1.5-1" />{props.children}</SvgRoot>;
});
export default IconLightbulb;
