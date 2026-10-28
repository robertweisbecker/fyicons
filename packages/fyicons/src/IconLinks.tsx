import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLinks = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLinks(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.998 4.962c0-.431.461-.688.774-.392l.08.078a4.036 4.036 0 0 1 0 5.707l-2.5 2.5a4.036 4.036 0 0 1-5.707-5.707l1.5-1.499a.5.5 0 1 1 .706.707l-1.499 1.5a3.036 3.036 0 0 0 4.293 4.292l2.5-2.5a3.036 3.036 0 0 0 0-4.293.5.5 0 0 1-.147-.341zm-8.35-1.814a4.036 4.036 0 0 1 5.707 5.707l-1.503 1.503a.5.5 0 1 1-.707-.707l1.503-1.503a3.036 3.036 0 0 0-4.293-4.293l-2.5 2.5a3.036 3.036 0 0 0 0 4.293.47.47 0 0 1 .144.33v.058c0 .431-.463.69-.776.392l-.075-.073a4.036 4.036 0 0 1 0-5.707z" /></SvgRoot>;
});
export default IconLinks;
