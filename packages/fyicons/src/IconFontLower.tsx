import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFontLower = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFontLower(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="font-lower"><path fill="currentColor" d="M6.5 7a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-.444c0-.075-.103-.106-.148-.045C5.395 12.617 4.736 13 4 13c-1.38 0-2.5-1.343-2.5-3S2.62 7 4 7c.736 0 1.395.382 1.852.989.045.06.148.03.148-.046V7.5a.5.5 0 0 1 .5-.5m7 0a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-.444c0-.075-.103-.106-.148-.045-.457.606-1.116.989-1.851.989-1.381 0-2.5-1.343-2.5-3S9.62 7 11 7c.735 0 1.394.382 1.851.989.045.06.149.03.149-.046V7.5a.5.5 0 0 1 .5-.5M4.168 8.09c-.92 0-1.666.856-1.667 1.91 0 1.054.747 1.909 1.667 1.909s1.667-.855 1.667-1.91c0-1.053-.746-1.908-1.667-1.908m7 0c-.92 0-1.666.856-1.667 1.91 0 1.054.747 1.909 1.668 1.909s1.667-.855 1.667-1.91c0-1.053-.748-1.908-1.668-1.908" /></SvgRoot>;
});
export default IconFontLower;
