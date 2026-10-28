import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconListThumbnails = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconListThumbnails(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="list-thumbnails"><path fill="currentColor" d="M5.75 9C6.44 9 7 9.56 7 10.25v2.5C7 13.44 6.44 14 5.75 14h-2.5C2.56 14 2 13.44 2 12.75v-2.5C2 9.56 2.56 9 3.25 9zm-2.5 1a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h2.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25zm9.25 2a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm2-3a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zM5.75 2C6.44 2 7 2.56 7 3.25v2.5C7 6.44 6.44 7 5.75 7h-2.5C2.56 7 2 6.44 2 5.75v-2.5C2 2.56 2.56 2 3.25 2zm-2.5 1a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h2.5A.25.25 0 0 0 6 5.75v-2.5A.25.25 0 0 0 5.75 3zm9.25 2a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm2-3a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconListThumbnails;
