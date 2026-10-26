import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChatRoundCode = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChatRoundCode(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.001 1a7 7 0 1 1-2.758 13.434c-.23-.099-.54-.076-.835.075C3.7 14.87 2.841 15 1.914 15a.9.9 0 0 1-.877-.67 1.02 1.02 0 0 1 .283-1.024l.1-.11a2.5 2.5 0 0 0 .31-.516c.13-.28.23-.595.286-.886.012-.065 0-.164-.073-.29A7 7 0 0 1 8.002 1m0 1a6 6 0 0 0-5.193 9.002c.151.26.263.607.19.981a5 5 0 0 1-.36 1.116c-.153.33-.354.656-.598.898.79-.011 1.429-.131 1.914-.379.483-.246 1.11-.35 1.684-.103A6 6 0 1 0 8 2M6.147 6.146a.5.5 0 0 1 .707.708L5.707 8l1.147 1.146a.5.5 0 0 1-.707.708l-1.5-1.5a.5.5 0 0 1 0-.708zm3 0a.5.5 0 0 1 .707 0l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.707-.708L10.293 8 9.147 6.854a.5.5 0 0 1 0-.708" /></SvgRoot>;
});
export default IconChatRoundCode;
