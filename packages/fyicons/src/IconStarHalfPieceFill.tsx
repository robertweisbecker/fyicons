import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStarHalfPieceFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStarHalfPieceFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 11.872 5.014 13.68h-.001c-.758.457-1.69-.224-1.49-1.083v-.001l.793-3.4-2.64-2.282c-.667-.578-.313-1.676.57-1.752l3.478-.294L7.079 1.65l.073-.143A.98.98 0 0 1 8 1.04z" /></SvgRoot>;
});
export default IconStarHalfPieceFill;
