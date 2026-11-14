import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconListThumbnailsFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconListThumbnailsFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="list-thumbnails-fill"><path fill="currentColor" d="M6 9a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm6.5 3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm2-3a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zM6 2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm6.5 3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm2-3a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1z" />{props.children}</SvgRoot>;
});
export default IconListThumbnailsFill;
