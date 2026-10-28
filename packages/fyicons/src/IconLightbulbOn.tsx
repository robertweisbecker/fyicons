import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLightbulbOn = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLightbulbOn(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="lightbulb-on"><g clipPath={"url(#" + idPrefix + "clip0_847_16024)"}><path fill="currentColor" d="M8.225 1A4.895 4.895 0 0 1 13.1 6.337l-.054.595a5 5 0 0 1-2.016 3.584.64.64 0 0 0-.256.355l-.242 1.03c-.046.194-.123.38-.227.548q-.14.225-.31.411v.64l.002.056a1.36 1.36 0 0 1-.248.732c-.298.42-.853.712-1.756.712-.904 0-1.458-.29-1.754-.713a1.35 1.35 0 0 1-.243-.796v-.63a3 3 0 0 1-.312-.412 1.9 1.9 0 0 1-.225-.549l-.265-1.12a.64.64 0 0 0-.24-.346 5 5 0 0 1-1.92-3.647l-.036-.601v-.001A4.886 4.886 0 0 1 7.874 1zm-.351 1a3.886 3.886 0 0 0-3.878 4.123l.037.602A4 4 0 0 0 5.57 9.647c.273.214.507.521.598.904l.263 1.122q.033.137.105.254a1.714 1.714 0 0 0 2.918 0 .9.9 0 0 0 .105-.254l.241-1.03c.094-.399.344-.715.635-.93a4 4 0 0 0 1.615-2.87l.054-.595a3.895 3.895 0 0 0-3.666-4.241L8.225 2z" /><path stroke="currentColor" strokeLinecap="round" d="M7.996 13.5v-5m0 0 1.5-1m-1.5 1-1.5-1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.5 6.5h1m-2 4 1 1m-13 0 1-1m0-8-1-1m12 1 1-1m-14 5h1" /></g><defs><clipPath id={idPrefix + "clip0_847_16024"}><path fill="white" d="M0 0h16v16H0z" /></clipPath></defs></SvgRoot>;
});
export default IconLightbulbOn;
