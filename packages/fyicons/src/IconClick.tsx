import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconClick = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconClick(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.239 1.042a7 7 0 0 1 7.734 7.568.5.5 0 1 1-.996-.088 6 6 0 0 0-6.63-6.487A6 6 0 0 0 2.24 6.32a6.002 6.002 0 0 0 5.237 7.657.5.5 0 1 1-.087.997 7.001 7.001 0 0 1-.15-13.932m.239 2.992a4 4 0 0 1 4.218 2.436c.305.736.379 1.544.222 2.322l.805.265a1 1 0 0 1 .395 1.657l-.132.132.707.707a1.5 1.5 0 1 1-2.121 2.12l-.707-.706-.155.155v.001a1 1 0 0 1-1.656-.39l-.271-.813a3.996 3.996 0 0 1-3.61-6.748 4 4 0 0 1 2.305-1.138m2.524 8.381.508-.508a.5.5 0 0 1 .708 0l1.06 1.06a.5.5 0 0 0 .708-.707l-1.06-1.06a.5.5 0 0 1 0-.708l.485-.485-3.605-1.183zM9.5 5.402a3 3 0 0 0-4.474 2.206 3 3 0 0 0 1.826 3.164 3 3 0 0 0 1.611.189L7.857 9.14a1 1 0 0 1-.04-.159.999.999 0 1 1 1.169-1.141q.066.013.132.034l1.842.604a3 3 0 0 0-.188-1.626A3 3 0 0 0 9.5 5.402" /></SvgRoot>;
});
export default IconClick;
