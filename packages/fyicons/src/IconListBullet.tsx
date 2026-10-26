import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconListBullet = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconListBullet(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M3.5 11a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m10 1a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm-10-5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m10 1a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zM3.5 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m10 1a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconListBullet;
