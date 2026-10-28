import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLinkNewWindow = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLinkNewWindow(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="link-new-window"><path fill="currentColor" d="M2.5 11.5a.5.5 0 0 1 .5.5v.25c0 .414.336.75.75.75H4a.5.5 0 0 1 0 1h-.25A1.75 1.75 0 0 1 2 12.25V12a.5.5 0 0 1 .5-.5m5 1.5a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm4.5-.75A1.75 1.75 0 0 1 10.25 14H10a.5.5 0 0 1 0-1h.25a.75.75 0 0 0 .75-.75V12H6a2 2 0 0 1-2-2V5h-.25a.75.75 0 0 0-.75.75V6a.5.5 0 0 1-1 0v-.25C2 4.784 2.784 4 3.75 4H4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2zM6 3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2.5 8a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m8-3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.854.354L9.5 7.207 7.854 8.854a.5.5 0 1 1-.708-.708L8.793 6.5l-.647-.646A.5.5 0 0 1 8.5 5z" /></SvgRoot>;
});
export default IconLinkNewWindow;
