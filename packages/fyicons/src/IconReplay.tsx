import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconReplay = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconReplay(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="replay"><path fill="currentColor" d="M8.342 1.009a7 7 0 1 1-7.104 8.803.5.5 0 0 1 .966-.26 6.002 6.002 0 0 0 10.556 2.1 6 6 0 0 0-4.653-9.65A6.43 6.43 0 0 0 3.563 4.03l-.258.275 1.132 1.132A.33.33 0 0 1 4.205 6H1.33A.33.33 0 0 1 1 5.67V2.797a.33.33 0 0 1 .563-.234l1.035 1.034.235-.25a7.43 7.43 0 0 1 5.078-2.34L8 1l.153.002L8.25 1q.047 0 .092.009M6 5.835a.75.75 0 0 1 1.14-.64l3.557 2.164a.75.75 0 0 1 0 1.282L7.14 10.806A.75.75 0 0 1 6 10.165z" /></SvgRoot>;
});
export default IconReplay;
