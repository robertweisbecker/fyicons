import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStar = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStar(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.078 1.65c.344-.816 1.5-.815 1.844 0l1.354 3.216 3.478.295c.826.07 1.192 1.04.684 1.638l-.114.114-2.641 2.282.796 3.4c.2.863-.735 1.54-1.492 1.083L8 11.871 5.014 13.68c-.758.457-1.693-.223-1.493-1.084l.795-3.4-2.64-2.28c-.67-.58-.31-1.679.57-1.754l3.477-.295zm-.55 3.883-.118.279-.302.025-3.778.32v.001l2.87 2.48.229.197-.069.295-.864 3.693 3.245-1.963.259-.157.259.157 3.244 1.962-.863-3.693-.069-.295.229-.197 2.87-2.48-3.78-.32-.301-.025-.117-.279L8 2.038z" /></SvgRoot>;
});
export default IconStar;
