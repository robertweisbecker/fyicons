import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSwitchesIos = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSwitchesIos(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="switches-ios"><path fill="currentColor" d="M11.5 9a2.5 2.5 0 0 1 0 5h-7a2.5 2.5 0 0 1 0-5zm-2 1a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 0 0-3zM11 2a3 3 0 1 1 0 6H5a3 3 0 0 1 0-6zM5 3a2 2 0 1 0 0 4h6a2 2 0 1 0 0-4zm3 1a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z" /></SvgRoot>;
});
export default IconSwitchesIos;
