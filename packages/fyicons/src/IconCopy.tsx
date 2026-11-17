import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCopy = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCopy(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="copy"><path fill="currentColor" d="M9.5 15a2.5 2.5 0 0 0 2.5-2.5V12h.5A2.5 2.5 0 0 0 15 9.5v-6A2.5 2.5 0 0 0 12.5 1h-6A2.5 2.5 0 0 0 4 3.5V4h-.5A2.5 2.5 0 0 0 1 6.5v6A2.5 2.5 0 0 0 3.5 15zM12 6.5A2.5 2.5 0 0 0 9.5 4H5v-.5A1.5 1.5 0 0 1 6.5 2h6A1.5 1.5 0 0 1 14 3.5v6a1.5 1.5 0 0 1-1.5 1.5H12zM3.5 14A1.5 1.5 0 0 1 2 12.5v-6A1.5 1.5 0 0 1 3.5 5h6A1.5 1.5 0 0 1 11 6.5v6A1.5 1.5 0 0 1 9.5 14z" />{props.children}</SvgRoot>;
});
export default IconCopy;
