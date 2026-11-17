import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSwitchOff = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSwitchOff(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="switch-off"><path fill="currentColor" d="M10 3a5 5 0 0 1 0 10H6A5 5 0 0 1 6 3zM6 4a4 4 0 1 0 0 8h4a4 4 0 0 0 0-8zm0 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />{props.children}</SvgRoot>;
});
export default IconSwitchOff;
