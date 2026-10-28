import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBlockquote = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBlockquote(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="blockquote"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5a.5.5 0 1 1 1 0V12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-1.5a.5.5 0 0 1 0-1zM1.098 3.136a1.5 1.5 0 0 1 2.898.777 1.5 1.5 0 0 1-1.473 1.109q.04.096.095.19c.123.214.285.392.471.53.192.141.315.376.254.606-.068.255-.333.411-.574.304a3 3 0 0 1-1.67-3.516m4 0a1.5 1.5 0 1 1 1.425 1.887q.04.096.094.19c.123.213.285.391.472.529.192.141.315.376.254.606-.068.255-.333.411-.574.304A3 3 0 0 1 5.1 3.136" /></SvgRoot>;
});
export default IconBlockquote;
