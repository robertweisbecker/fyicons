import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLightbulbOn = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLightbulbOn(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="lightbulb-on"><path fill="currentColor" d="M8.226 1A4.895 4.895 0 0 1 13.1 6.337l-.054.595a5 5 0 0 1-2.017 3.584.64.64 0 0 0-.256.355l-.242 1.03c-.046.194-.122.38-.226.548q-.14.225-.31.411v.696a1.36 1.36 0 0 1-.248.732c-.298.42-.852.712-1.756.712-.903 0-1.457-.29-1.754-.713a1.35 1.35 0 0 1-.243-.796v-.63a3 3 0 0 1-.31-.412 1.9 1.9 0 0 1-.226-.549l-.265-1.12a.64.64 0 0 0-.24-.346 5 5 0 0 1-1.919-3.647l-.037-.601v-.001A4.886 4.886 0 0 1 7.874 1zm-.352 1a3.886 3.886 0 0 0-3.878 4.123l.037.602A4 4 0 0 0 5.57 9.647c.274.215.508.521.598.904l.264 1.122q.033.137.104.254a1.714 1.714 0 0 0 2.918 0 .9.9 0 0 0 .106-.254l.24-1.03c.095-.399.345-.715.635-.93a4 4 0 0 0 1.616-2.87l.053-.595a3.895 3.895 0 0 0-3.666-4.241L8.226 2z" /><path stroke="currentColor" strokeLinecap="round" d="M7.996 13.5v-5m0 0 1.5-1m-1.5 1-1.5-1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.5 6.5h1m-2 4 1 1m-13 0 1-1m0-8-1-1m12 1 1-1m-14 5h1" />{props.children}</SvgRoot>;
});
export default IconLightbulbOn;
