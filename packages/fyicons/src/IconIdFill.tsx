import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconIdFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconIdFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="id-fill"><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM4.501 5a.5.5 0 0 0 0 1h.5v4h-.5a.5.5 0 0 0 0 1h2a.501.501 0 0 0 0-1h-.5V6h.5a.501.501 0 0 0 0-1zm5.247-.001-1.25.007a.5.5 0 0 0-.497.5v4.985a.5.5 0 0 0 .497.5l1.25.008h.003c.445 0 1.129-.112 1.712-.562.608-.468 1.039-1.25 1.039-2.438 0-1.157-.348-1.945-.933-2.428C11.003 5.104 10.302 5 9.751 5zm.003 1c.448 0 .874.09 1.183.344.29.239.568.702.568 1.656 0 .922-.32 1.392-.65 1.646-.353.272-.796.353-1.101.353l-.75-.004V6.003z" /></SvgRoot>;
});
export default IconIdFill;
