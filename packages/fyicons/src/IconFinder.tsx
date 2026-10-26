import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFinder = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFinder(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.49 2.49 0 0 1-1.102 2.073A2.5 2.5 0 0 1 11.5 14h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM7.22 8.342a.5.5 0 0 0 .41.654L7.694 9h.557a.75.75 0 0 1 .75.75v1.125q.251-.07.473-.18c.403-.201.77-.518 1.127-.995a.5.5 0 0 1 .8.6c-.428.571-.908 1.004-1.48 1.29q-.434.216-.92.315V13h2.5a1.5 1.5 0 0 0 1.492-1.346Q13 11.578 13 11.5v-7A1.5 1.5 0 0 0 11.5 3H9zM4.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13H8v-1l-.264-.006c-.607-.027-1.155-.153-1.656-.404-.572-.286-1.052-.719-1.48-1.29a.5.5 0 0 1 .8-.6c.358.477.724.794 1.127.996.354.176.76.277 1.255.3L8 11v-1h-.307a1.5 1.5 0 0 1-1.422-1.974L7.946 3zm1 2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5" /></SvgRoot>;
});
export default IconFinder;
