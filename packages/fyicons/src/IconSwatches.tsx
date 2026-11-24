import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSwatches = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSwatches(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="swatches"><path fill="currentColor" d="M5.5 2a1.5 1.5 0 0 1 1.317.781 1.5 1.5 0 0 1 1.554-.032l1.733 1a1.5 1.5 0 0 1 .748 1.335 1.5 1.5 0 0 1 1.363.749l1 1.732a1.5 1.5 0 0 1-.058 1.588c.499.244.843.755.843 1.347v2a1.5 1.5 0 0 1-1.5 1.5h-8A2.5 2.5 0 0 1 2 11.5v-8A1.5 1.5 0 0 1 3.5 2zm-2 1a.5.5 0 0 0-.5.5v8a1.5 1.5 0 0 0 3 0v-8a.5.5 0 0 0-.5-.5zm8.632 7a.5.5 0 0 0-.25.067l-5.036 2.908-.019.025H12.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM4.5 11a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m6.849-4.667a.5.5 0 0 0-.683-.183l-.21.121a.5.5 0 0 0-.183.183l-2.931 5.077 3.632-2.094 1.192-.689a.5.5 0 0 0 .183-.683zM7.87 3.615a.5.5 0 0 0-.683.183l-.12.21a.5.5 0 0 0-.068.25v5.866l2.786-4.826a.5.5 0 0 0-.182-.683z" />{props.children}</SvgRoot>;
});
export default IconSwatches;
