import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBird = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBird(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="bird"><path fill="currentColor" d="M7 6v.5h1V6zm2.5 6.5.354-.354A.5.5 0 0 0 9.5 12zm4 0 .354.354a.5.5 0 0 0 0-.708zM7.5 6H8V5H7v1zm-5-1.025H2v.082h1v-.082zm1 2.496H3V8.5h1V7.471zm4 5.029v.5h2v-1h-2zm6 0 .354-.354-2.25-2.25-.354.354-.354.354 2.25 2.25zm-4 0-.354.354a3.33 3.33 0 0 0 4.708 0L13.5 12.5l-.354-.354c-.909.91-2.383.91-3.292 0zm-6-4H3A4.5 4.5 0 0 0 7.5 13v-1A3.5 3.5 0 0 1 4 8.5zm-.333-1.833-.354.353c.12.12.187.282.187.451h1c0-.434-.173-.85-.48-1.158zM2.5 5.057H2c0 .736.292 1.443.813 1.963l.354-.353.353-.354A1.78 1.78 0 0 1 3 5.057zM4.987 2.5V2A2.986 2.986 0 0 0 2 4.975h1C3 3.887 3.893 3 4.987 3zM7.5 5H8c0-1.66-1.36-3-3.013-3v1A2.01 2.01 0 0 1 7 5z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.658 10.5H8.536c-.664 0-1.3-.264-1.769-.733a2.013 2.013 0 0 1-.141-2.674c.532-.665 1.4-.98 2.234-.802L14.5 7.5l-1 1.2a5 5 0 0 1-3.842 1.8m-8.408-6H2.5v1z" /><circle cx={4.5} cy={4.5} r={0.5} fill="currentColor" /></SvgRoot>;
});
export default IconBird;
