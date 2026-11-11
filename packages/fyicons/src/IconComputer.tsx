import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconComputer = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconComputer(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="computer"><path fill="currentColor" d="M11 1a2 2 0 0 1 2 2v6c0 .74-.403 1.383-1 1.73v2.77a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 13.5v-2.77c-.597-.347-1-.99-1-1.73V3a2 2 0 0 1 2-2zM5 2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h.556a.5.5 0 0 1 0 1H5v2.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V11h-.556a.5.5 0 0 1 0-1H11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm1.51 9.938a.562.562 0 1 1 0 1.124H6.5a.562.562 0 1 1 0-1.124zm3 .062a.5.5 0 0 1 0 1H8.5a.5.5 0 0 1 0-1zm.99-9a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z" /></SvgRoot>;
});
export default IconComputer;
