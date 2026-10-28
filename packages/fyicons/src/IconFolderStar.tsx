import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFolderStar = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFolderStar(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M4.672 2a2.5 2.5 0 0 1 1.767.732L7.707 4H12.5A2.5 2.5 0 0 1 15 6.5v5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 11.5v-7A2.5 2.5 0 0 1 3.5 2zM3.5 3A1.5 1.5 0 0 0 2 4.5v7A1.5 1.5 0 0 0 3.5 13h9a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 12.5 5H7.293l-1.56-1.56A1.5 1.5 0 0 0 4.671 3zm4.769 3.556a.25.25 0 0 1 .46 0l.505 1.212a.25.25 0 0 0 .21.152l1.309.105a.25.25 0 0 1 .143.439l-.998.854a.25.25 0 0 0-.08.248l.305 1.277a.25.25 0 0 1-.374.271l-1.12-.684a.25.25 0 0 0-.26 0l-1.12.684a.25.25 0 0 1-.374-.271l.305-1.277a.25.25 0 0 0-.08-.248l-.997-.854a.25.25 0 0 1 .142-.439l1.309-.105a.25.25 0 0 0 .21-.152z" /></SvgRoot>;
});
export default IconFolderStar;
