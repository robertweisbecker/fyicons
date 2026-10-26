import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBoltFlash = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBoltFlash(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.5 1a.5.5 0 0 1 .438.741L9.596 6H12.5a.5.5 0 0 1 .4.8l-6 8a.501.501 0 0 1-.9-.3V10H3.5a.5.5 0 0 1-.496-.562l1-8 .02-.09A.5.5 0 0 1 4.5 1zM4.066 9H7v3.999L11.5 7H7.904l.408-.741L10.654 2H4.941z" /></SvgRoot>;
});
export default IconBoltFlash;
