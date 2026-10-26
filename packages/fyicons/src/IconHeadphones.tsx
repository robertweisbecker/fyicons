import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeadphones = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeadphones(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.001 1c4.394 0 7.623 4.122 6.571 8.388l-.55 2.232q-.007.027-.018.052v.828a2.5 2.5 0 0 1-2.5 2.5h-.25c-.69 0-1.25-.56-1.25-1.25v-3.5c0-.69.56-1.25 1.25-1.25h.25a2.49 2.49 0 0 1 1.913.894l.185-.746C14.498 5.513 11.745 2 8.002 2 4.256 2 1.504 5.513 2.4 9.148l.153.624A2.24 2.24 0 0 1 4.249 9h.5C5.44 9 6 9.56 6 10.25v3.5C6 14.44 5.44 15 4.75 15h-.5A2.25 2.25 0 0 1 2 12.75v-1.074q-.011-.027-.02-.056l-.55-2.232C.38 5.122 3.609 1 8.002 1M4.25 10C3.56 10 3 10.56 3 11.25v1.5c0 .69.56 1.25 1.25 1.25h.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25zm7.005 0a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h.25a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5z" /></SvgRoot>;
});
export default IconHeadphones;
