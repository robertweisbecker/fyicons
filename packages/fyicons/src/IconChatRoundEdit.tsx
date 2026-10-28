import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconChatRoundEdit = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconChatRoundEdit(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="chat-round-edit"><path fill="currentColor" d="M8.001 1a7 7 0 1 1-2.758 13.434c-.23-.099-.54-.076-.835.075C3.7 14.87 2.841 15 1.914 15a.9.9 0 0 1-.877-.67 1.02 1.02 0 0 1 .283-1.024l.1-.11a2.5 2.5 0 0 0 .31-.516c.13-.28.23-.595.286-.886.012-.065 0-.164-.073-.29A7 7 0 0 1 8.002 1m0 1a6 6 0 0 0-5.193 9.002c.151.26.263.607.19.981a5 5 0 0 1-.36 1.116c-.153.33-.354.656-.598.898.79-.011 1.429-.131 1.914-.379.483-.246 1.11-.35 1.684-.103A6 6 0 1 0 8 2m.588 3.334a1.473 1.473 0 0 1 2.082 2.082L8.16 9.928a4.5 4.5 0 0 1-2.497 1.265l-.33.051a.5.5 0 0 1-.571-.57l.05-.331c.146-.946.59-1.82 1.266-2.497zM6.784 8.553a3.5 3.5 0 0 0-.904 1.571 3.5 3.5 0 0 0 1.572-.903l1.534-1.533-.668-.668zm3.18-2.512a.473.473 0 0 0-.668 0l-.271.271.668.668.271-.271a.473.473 0 0 0 0-.668" /></SvgRoot>;
});
export default IconChatRoundEdit;
