import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHomeBirdhouseFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHomeBirdhouseFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="home-birdhouse-fill"><path fill="currentColor" d="M7.605 1.204a.75.75 0 0 1 .79 0l.115.087 6.174 5.716a1.15 1.15 0 0 1-.781 1.994h-.992l-.76 3.794A1.5 1.5 0 0 1 10.682 14H5.32a1.5 1.5 0 0 1-1.471-1.207L3.09 9.002h-.992a1.15 1.15 0 0 1-.781-1.993L7.49 1.291zM8 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />{props.children}</SvgRoot>;
});
export default IconHomeBirdhouseFill;
