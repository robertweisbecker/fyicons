import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeadphones = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeadphones(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="headphones"><path fill="currentColor" d="M7.993 1c4.388 0 7.613 4.115 6.565 8.375l-.552 2.244q-.009.028-.02.054v.827a2.5 2.5 0 0 1-2.5 2.5h-.243c-.69 0-1.25-.56-1.25-1.25v-3.5c0-.69.56-1.25 1.25-1.25h.243c.77 0 1.456.348 1.915.894l.186-.757C14.48 5.507 11.732 2 7.993 2 4.255 2 1.506 5.507 2.4 9.137l.156.635A2.24 2.24 0 0 1 4.25 9h.495c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25H4.25A2.25 2.25 0 0 1 2 12.75v-1.077l-.02-.054-.55-2.244C.38 5.115 3.606 1 7.993 1M4.25 10C3.56 10 3 10.56 3 11.25v1.5c0 .69.56 1.25 1.25 1.25h.495a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25zm6.993 0a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h.243a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5z" /></SvgRoot>;
});
export default IconHeadphones;
