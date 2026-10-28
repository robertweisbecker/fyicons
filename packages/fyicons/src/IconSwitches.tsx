import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSwitches = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSwitches(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="switches"><path fill="currentColor" d="M10 9a3 3 0 1 1 0 6H6a3 3 0 1 1 0-6zm0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4m.154-8.996a3 3 0 0 1 0 5.992L10 7H6a3 3 0 0 1 0-6h4zM6 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4m2.231 0a2.985 2.985 0 0 1 0 4H10a2 2 0 1 0 0-4z" /></SvgRoot>;
});
export default IconSwitches;
