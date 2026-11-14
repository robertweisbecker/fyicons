import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHomeBirdhouse = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHomeBirdhouse(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="home-birdhouse"><path fill="currentColor" d="M7.614 1.191a.75.75 0 0 1 .772 0l.113.083 6.12 5.442c.415.368.549.954.346 1.461l-.045.101a1.31 1.31 0 0 1-1.17.723h-.84l-.678 3.391a2 2 0 0 1-1.962 1.609H5.73a2 2 0 0 1-1.961-1.609L3.09 9.001h-.84a1.308 1.308 0 0 1-.87-2.285l6.121-5.442zm-5.57 6.273A.308.308 0 0 0 2.25 8h1.66l.08.402.76 3.794a1 1 0 0 0 .98.804h4.54c.477 0 .888-.337.982-.804l.758-3.794.08-.402h1.66a.31.31 0 0 0 .276-.17l.02-.048a.31.31 0 0 0-.09-.32L8 2.17zM8.001 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 1a1 1 0 1 0 .001 2 1 1 0 0 0 0-2" />{props.children}</SvgRoot>;
});
export default IconHomeBirdhouse;
