import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLinks = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLinks(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.998 5.46c0-.43.461-.687.774-.39q.04.037.08.077a4.036 4.036 0 0 1 0 5.707l-2.5 2.5a4.036 4.036 0 0 1-5.707-5.707l1.5-1.499a.5.5 0 1 1 .706.707l-1.499 1.5a3.037 3.037 0 0 0 4.293 4.292l2.5-2.5a3.036 3.036 0 0 0 0-4.293.5.5 0 0 1-.147-.341zM4.647 3.648a4.036 4.036 0 0 1 5.707 5.707l-1.501 1.501a.5.5 0 0 1-.707-.707l1.501-1.501a3.036 3.036 0 0 0-4.293-4.293l-2.5 2.5a3.036 3.036 0 0 0 0 4.293c.09.09.146.208.146.335v.055c0 .43-.463.689-.776.392l-.077-.075a4.036 4.036 0 0 1 0-5.707z" /></SvgRoot>;
});
export default IconLinks;
