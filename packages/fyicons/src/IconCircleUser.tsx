import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleUser = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleUser(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="circle-user"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m-.001 9.5a3 3 0 0 0-2.985 2.703A5.97 5.97 0 0 0 8 14a5.97 5.97 0 0 0 2.983-.796 3 3 0 0 0-.863-1.825 3 3 0 0 0-2.12-.88M8 2a6 6 0 0 0-3.89 10.566 4 4 0 0 1 1.06-1.894 4 4 0 0 1 1.552-.961A2.997 2.997 0 0 1 8 4a2.996 2.996 0 0 1 1.276 5.71q.128.044.253.094a4 4 0 0 1 2.358 2.763A5.98 5.98 0 0 0 14 8a6 6 0 0 0-6-6m0 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4" /></SvgRoot>;
});
export default IconCircleUser;
