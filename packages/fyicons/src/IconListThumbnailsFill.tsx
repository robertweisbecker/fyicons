import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconListThumbnailsFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconListThumbnailsFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="list-thumbnails-fill"><path fill="currentColor" d="M5.75 9C6.44 9 7 9.56 7 10.25v2.5C7 13.44 6.44 14 5.75 14h-2.5C2.56 14 2 13.44 2 12.75v-2.5C2 9.56 2.56 9 3.25 9zm6.75 3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm2-3a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zM5.75 2C6.44 2 7 2.56 7 3.25v2.5C7 6.44 6.44 7 5.75 7h-2.5C2.56 7 2 6.44 2 5.75v-2.5C2 2.56 2.56 2 3.25 2zm6.75 3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm2-3a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconListThumbnailsFill;
