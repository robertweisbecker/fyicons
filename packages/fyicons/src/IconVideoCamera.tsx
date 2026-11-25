import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVideoCamera = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVideoCamera(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="video-camera"><rect width={9} height={9} x={1.5} y={3.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx={1.5} /><path stroke="currentColor" d="M10.5 6.75v2.5l3.217 2.211a.5.5 0 0 0 .783-.412V4.952a.5.5 0 0 0-.783-.413z" />{props.children}</SvgRoot>;
});
export default IconVideoCamera;
