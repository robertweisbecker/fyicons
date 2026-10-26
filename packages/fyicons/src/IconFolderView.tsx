import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFolderView = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFolderView(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.25 9a1.5 1.5 0 0 1 1.414 1h1.086c.69 0 1.25.56 1.25 1.25v1.5c0 .69-.56 1.25-1.25 1.25h-3.5C8.56 14 8 13.44 8 12.75v-2.5C8 9.56 8.56 9 9.25 9zm-1 1a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25H11.5c-.436 0-.694-.344-.766-.624A.5.5 0 0 0 10.25 10zM2.5 1a.5.5 0 0 1 .5.5V3a1 1 0 0 0 1 1h2.5a.5.5 0 0 1 0 1H4c-.365 0-.706-.1-1-.27V10a1 1 0 0 0 1 1h2.5a.5.5 0 0 1 0 1H4a2 2 0 0 1-2-2V1.5a.5.5 0 0 1 .5-.5m7.75 1a1.5 1.5 0 0 1 1.414 1h1.086c.69 0 1.25.56 1.25 1.25v1.5C14 6.44 13.44 7 12.75 7h-3.5C8.56 7 8 6.44 8 5.75v-2.5C8 2.56 8.56 2 9.25 2zm-1 1a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25H11.5c-.436 0-.694-.344-.766-.624A.5.5 0 0 0 10.25 3z" /></SvgRoot>;
});
export default IconFolderView;
