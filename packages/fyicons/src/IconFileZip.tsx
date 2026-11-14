import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFileZip = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFileZip(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="file-zip"><path fill="currentColor" d="M7.672 1a2.5 2.5 0 0 1 1.767.732l2.829 2.829A2.5 2.5 0 0 1 13 6.328V12.5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 12.5V3a2 2 0 0 1 2-2zM5 2a1 1 0 0 0-1 1v9.5A1.5 1.5 0 0 0 5.5 14H6v-.5a.5.5 0 0 1 .5-.5h1v1h3a1.5 1.5 0 0 0 1.5-1.5V6.328a1.5 1.5 0 0 0-.44-1.06L8.733 2.439A1.5 1.5 0 0 0 7.672 2zm3.5 10a.5.5 0 0 1 .5.5v.5H7.5v-1zm-1 0H6v-.5a.5.5 0 0 1 .5-.5h1zm1-2a.5.5 0 0 1 .5.5v.5H7.5v-1zm-1 0H6v-.5a.5.5 0 0 1 .5-.5h1zm1-2a.5.5 0 0 1 .5.5V9H7.5V8zm-1-5a.5.5 0 0 1 .5.5V4a1 1 0 0 1 1 1v1.493a1.5 1.5 0 1 1-3 0V5a1 1 0 0 1 1-1v-.5a.5.5 0 0 1 .5-.5m-.503 2.997h1V5h-1z" />{props.children}</SvgRoot>;
});
export default IconFileZip;
