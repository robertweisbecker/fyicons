import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAtSign = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAtSign(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="at-sign"><path fill="currentColor" d="M4.913 1.718a7 7 0 0 1 8.492 1.833C14.4 4.759 15 6.19 15 7.874c0 .875-.238 1.652-.688 2.223a2.35 2.35 0 0 1-1.88.922c-1.277 0-2.088-.713-2.59-1.594-.525 1.04-1.558 1.738-2.711 1.555-1.495-.237-2.344-1.817-2.098-3.369S6.574 4.818 8.07 5.055c.35.055.665.185.939.37A.498.498 0 0 1 10 5.5c0 .767.092 1.95.472 2.92.376.965.975 1.598 1.96 1.599.444 0 .82-.192 1.095-.541.282-.358.473-.903.473-1.604 0-1.424-.501-2.636-1.367-3.687A6 6 0 0 0 2.583 5.42 6.002 6.002 0 0 0 7.96 14a6 6 0 0 0 2.347-.46.5.5 0 0 1 .385.922A7 7 0 0 1 4.913 1.718m3 4.324c-.796-.126-1.707.55-1.893 1.726-.186 1.174.472 2.099 1.267 2.225s1.708-.55 1.895-1.724c.042-.27.038-.527 0-.764l-.02-.11c-.156-.737-.665-1.26-1.25-1.353" /></SvgRoot>;
});
export default IconAtSign;
