import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFastForward = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFastForward(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.5 5.03a.967.967 0 0 1 1.423-.852l5.542 2.97a.966.966 0 0 1 0 1.704l-5.542 2.97a.966.966 0 0 1-1.423-.851V9.1l-5.077 2.721A.966.966 0 0 1 1 10.971V5.029c0-.73.78-1.196 1.423-.851L7.5 6.898zM2 10.913 7.438 8 2 5.085zm6.5 0L13.938 8 8.5 5.085z" /></SvgRoot>;
});
export default IconFastForward;
