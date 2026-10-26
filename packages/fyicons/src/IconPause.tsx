import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPause = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPause(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M5.75 2C6.44 2 7 2.56 7 3.25v9.5C7 13.44 6.44 14 5.75 14h-1.5C3.56 14 3 13.44 3 12.75v-9.5C3 2.56 3.56 2 4.25 2zm6 0c.69 0 1.25.56 1.25 1.25v9.5c0 .69-.56 1.25-1.25 1.25h-1.5C9.56 14 9 13.44 9 12.75v-9.5C9 2.56 9.56 2 10.25 2zm-7.5 1a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-9.5A.25.25 0 0 0 5.75 3zm6 0a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25z" /></SvgRoot>;
});
export default IconPause;
