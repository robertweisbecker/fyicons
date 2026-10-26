import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTelevision = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTelevision(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M14 3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2.608q.295.19.57.414l.853.7a.5.5 0 0 1-.632.773l-.855-.699a5.26 5.26 0 0 0-6.657 0l-.855.699a.5.5 0 0 1-.632-.774l.853-.699q.275-.224.57-.414H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 11h12V4H2z" /></SvgRoot>;
});
export default IconTelevision;
