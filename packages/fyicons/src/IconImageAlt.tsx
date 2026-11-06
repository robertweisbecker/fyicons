import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconImageAlt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconImageAlt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="image-alt"><path fill="currentColor" d="M12.5 3A2.5 2.5 0 0 1 15 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 10.5v-5A2.5 2.5 0 0 1 3.5 3zm-9 1A1.5 1.5 0 0 0 2 5.5v5A1.5 1.5 0 0 0 3.5 12h9a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 12.5 4zm4.249 2a.5.5 0 0 1 .5.5V9h1.25a.5.5 0 0 1 0 1l-1.75.001a.5.5 0 0 1-.5-.5V6.5a.5.5 0 0 1 .5-.5m-3.404.238a.626.626 0 0 1 1.105.088l1.264 2.979a.5.5 0 1 1-.92.39L5.499 9H4.258l-.293.694a.5.5 0 0 1-.922-.388l1.256-2.978zM12.5 6a.5.5 0 0 1 0 1h-.499v2.5a.5.5 0 0 1-1 0V7H10.5a.5.5 0 0 1 0-1zM4.574 8.25h.607l-.305-.717z" /></SvgRoot>;
});
export default IconImageAlt;
