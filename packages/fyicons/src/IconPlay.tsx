import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPlay = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPlay(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="play"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.994 13.402 13.97 8.87a1 1 0 0 0 0-1.739L5.994 2.599a1 1 0 0 0-1.494.87v9.063a1 1 0 0 0 1.494.87" />{props.children}</SvgRoot>;
});
export default IconPlay;
