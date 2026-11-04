import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeadphones = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeadphones(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="headphones"><path fill="currentColor" d="M7.994 1c4.387 0 7.612 4.115 6.564 8.375l-.551 2.244-.02.057v.824a2.5 2.5 0 0 1-2.5 2.5h-1.244c-.69 0-1.25-.56-1.25-1.25v-4.5c0-.69.56-1.25 1.25-1.25h1.243c.881 0 1.653.457 2.099 1.146l.003-.01C14.48 5.507 11.732 2 7.994 2 4.298 2 1.572 5.426 2.373 9.01A2.25 2.25 0 0 1 4.25 8h1.495c.69 0 1.25.56 1.25 1.25v4.5c0 .69-.56 1.25-1.25 1.25H4.25A2.25 2.25 0 0 1 2 12.75v-1.075q-.011-.027-.02-.056l-.55-2.244C.381 5.115 3.606 1 7.994 1M4.25 9C3.56 9 3 9.56 3 10.25v2.5c0 .69.56 1.25 1.25 1.25h1.495a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25zm5.992 0a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h1.243a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5z" /></SvgRoot>;
});
export default IconHeadphones;
