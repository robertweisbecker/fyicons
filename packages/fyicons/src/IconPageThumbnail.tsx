import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPageThumbnail = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPageThumbnail(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="page-thumbnail"><path stroke="currentColor" strokeLinecap="round" d="M5.5 9.5h5m-5 2h3" /><path stroke="currentColor" d="M5 14.5h6a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 11 1.5H5A1.5 1.5 0 0 0 3.5 3v10A1.5 1.5 0 0 0 5 14.5Z" /><path fill="currentColor" d="M5 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" />{props.children}</SvgRoot>;
});
export default IconPageThumbnail;
