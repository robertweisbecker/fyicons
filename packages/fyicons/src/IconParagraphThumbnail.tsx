import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconParagraphThumbnail = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconParagraphThumbnail(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M13.5 12a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zm0-3a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zM5.75 2C6.44 2 7 2.56 7 3.25v2.5C7 6.44 6.44 7 5.75 7h-2.5C2.56 7 2 6.44 2 5.75v-2.5C2 2.56 2.56 2 3.25 2zm7.75 4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zM3.25 3a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h2.5A.25.25 0 0 0 6 5.75v-2.5A.25.25 0 0 0 5.75 3zM13.5 3a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconParagraphThumbnail;
