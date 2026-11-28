import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVideoCameraSlash = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVideoCameraSlash(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="video-camera-slash"><rect width={9} height={9} x={1.5} y={3.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" rx={1.5} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m.5 1.5 15 11" /><path fill="currentColor" d="M14 11.5a.5.5 0 0 0 1 0zm-3.5-4.75-.283-.412-.217.149v.263zm4-1.8H14v6.55h1V4.95zm-4 4.3h.5v-2.5h-1v2.5zm0-2.5.283.412L14 4.951l-.283-.413-.284-.412-3.216 2.212zm4-1.8h.5a1 1 0 0 0-1.566-.824l.283.412.283.413z" />{props.children}</SvgRoot>;
});
export default IconVideoCameraSlash;
