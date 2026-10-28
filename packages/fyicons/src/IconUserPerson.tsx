import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUserPerson = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconUserPerson(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.999 9c2.139 0 4.037 1.113 5.222 2.83 1.03 1.493-.4 3.17-2.213 3.17H4.99c-1.757 0-3.152-1.573-2.302-3.03l.09-.14C3.963 10.113 5.86 9 8 9m0 1c-1.777 0-3.38.924-4.397 2.398-.245.357-.207.678.017.976.255.34.761.626 1.372.626h6.017c.61 0 1.117-.286 1.373-.625.224-.298.262-.62.016-.977C11.38 10.923 9.777 10 8 10m0-9c1.5 0 3 1.067 3 3s-1 4-3 4-3-2.067-3-4 1.5-3 3-3m0 1c-1.044 0-2 .712-2 2 0 .813.215 1.612.586 2.175C6.938 6.71 7.4 7 8 7s1.061-.29 1.415-.825C9.785 5.612 10 4.813 10 4c0-1.288-.955-2-2-2" /></SvgRoot>;
});
export default IconUserPerson;
