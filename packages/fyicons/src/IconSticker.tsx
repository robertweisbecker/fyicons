import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSticker = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSticker(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="sticker"><path fill="currentColor" d="M5.534 1.449a7 7 0 0 1 4.277-.21.5.5 0 0 1 .095.036l.004.002a.5.5 0 0 1 .237.171l4.751 6.25.008.013q.014.018.024.04.015.022.026.047l.013.035q.011.029.018.058l.005.032.007.069V8a7 7 0 1 1-9.465-6.552m3.458.634a6.002 6.002 0 0 0-5.752 9.57 6 6 0 0 0 9.637-.157c.534-.746.886-1.6 1.037-2.496h-.595a4.5 4.5 0 0 1-4.486-4.845zM9.83 4.23A3.5 3.5 0 0 0 13.32 8h.55L9.938 2.825z" /></SvgRoot>;
});
export default IconSticker;
