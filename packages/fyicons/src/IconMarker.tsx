import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMarker = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMarker(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="marker"><path fill="currentColor" d="M12.5.879a2.616 2.616 0 0 1 2.514 3.368c-.12.405-.34.786-.66 1.106l-2.99 2.99h-.001l-3.45 3.45A4.1 4.1 0 0 1 5.75 12.93l-.026.017-1.987.994c-1.075.537-2.215-.603-1.678-1.678l.994-1.987.016-.026c.15-.814.544-1.57 1.138-2.164l4.586-4.587-.439-.439a.5.5 0 0 0-.707 0L5.854 4.853a.5.5 0 1 1-.707-.707L6.94 2.353a1.5 1.5 0 0 1 2.121 0l.439.439 1.146-1.146A2.6 2.6 0 0 1 12.5.88M2.954 12.71a.25.25 0 0 0 .336.335l1.207-.604a1 1 0 0 0-.94-.94zm1.96-3.918a3.12 3.12 0 0 0-.885 1.78 2 2 0 0 1 1.396 1.396c.67-.092 1.298-.4 1.782-.883L10.89 7.4l-.241-.484A3.5 3.5 0 0 0 9.085 5.35l-.488-.243zm8.732-6.44a1.62 1.62 0 0 0-2.292 0L9.855 3.85v.003l-.004.001-.507.508.188.094a4.5 4.5 0 0 1 2.012 2.012l.093.187 2.009-2.009a1.62 1.62 0 0 0 0-2.293" /></SvgRoot>;
});
export default IconMarker;
