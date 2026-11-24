import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHatSide = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHatSide(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="hat-side"><path fill="currentColor" d="M3.833 3.697a.75.75 0 0 1 .917.41q.354-.068.751-.11c1.295-.134 2.433-.003 3.411.686.94.661 1.653 1.784 2.262 3.448l3.512 1.405a.5.5 0 0 1 .252.707 3.794 3.794 0 0 1-4.303 1.82l-4.015-1.08-.33-.09c-1.38.182-3.029.063-3.987-.036a1.47 1.47 0 0 1-1.31-1.489c.013-1.056.067-2.307.677-3.34A3.6 3.6 0 0 1 2.877 4.8l-.001-.003a.75.75 0 0 1 .481-.945zm6.889 5.357a14.3 14.3 0 0 1-2.519 1.319l2.692.725a2.79 2.79 0 0 0 2.835-.868l-2.984-1.194zM8.337 5.5c-.7-.493-1.557-.63-2.733-.508-1.802.187-2.642.817-3.073 1.545-.457.775-.524 1.767-.538 2.844a.47.47 0 0 0 .413.48c1.18.123 3.19.248 4.465-.094.944-.253 1.84-.687 2.509-1.065.316-.178.577-.343.764-.466C9.59 6.8 8.998 5.966 8.337 5.5" />{props.children}</SvgRoot>;
});
export default IconHatSide;
