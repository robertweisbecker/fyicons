import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHomeBirdhouseFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHomeBirdhouseFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="home-birdhouse-fill"><path fill="currentColor" d="M7.604 1.204a.75.75 0 0 1 .79 0l.116.087 6.174 5.716A1.15 1.15 0 0 1 13.902 9h-.992l-.759 3.794a1.5 1.5 0 0 1-1.47 1.207H5.319a1.5 1.5 0 0 1-1.47-1.207L3.089 9h-.991a1.15 1.15 0 0 1-.782-1.992L7.49 1.291zM8.001 7a2 2 0 1 0 0 4.001 2 2 0 0 0 0-4m0 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />{props.children}</SvgRoot>;
});
export default IconHomeBirdhouseFill;
