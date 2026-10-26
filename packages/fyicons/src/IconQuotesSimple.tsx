import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconQuotesSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconQuotesSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M3.998 4a3 3 0 0 1 3 3v.022c.06 1.619-.577 3.033-1.44 4.07-.861 1.035-1.996 1.754-2.986 1.902a.5.5 0 1 1-.148-.988c.677-.102 1.61-.645 2.365-1.553q.295-.353.533-.765c-.4.198-.848.312-1.324.312a3 3 0 1 1 0-6M12 4a3 3 0 0 1 3 3l-.001.022c.061 1.619-.576 3.033-1.44 4.07-.86 1.035-1.995 1.754-2.985 1.902a.5.5 0 1 1-.148-.988c.677-.102 1.61-.645 2.365-1.553q.294-.353.533-.765c-.4.198-.848.312-1.324.312a3 3 0 1 1 0-6" /></SvgRoot>;
});
export default IconQuotesSimple;
