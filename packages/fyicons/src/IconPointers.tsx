import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPointers = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPointers(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M4.154 10.422a1 1 0 0 1 1.28-1.28l3.893 1.402c.893.321.878 1.589-.022 1.89l-1.395.464-.465 1.395c-.3.9-1.567.914-1.89.022zm2.342 3.554.465-1.394a1 1 0 0 1 .633-.633l1.394-.465-3.893-1.401zM9.14 5.42a1 1 0 0 1 1.28-1.28l3.893 1.402c.892.321.877 1.589-.023 1.89l-1.394.464-.465 1.395c-.3.899-1.568.914-1.89.022zm2.342 3.554.464-1.394c.1-.299.335-.533.633-.633l1.395-.465-3.894-1.401zM2.144 3.42a1 1 0 0 1 1.279-1.28l3.894 1.402c.892.321.876 1.589-.023 1.89L5.9 5.895 5.435 7.29c-.3.9-1.568.914-1.89.022zm2.341 3.554L4.95 5.58c.1-.299.335-.534.633-.633l1.395-.465-3.894-1.401z" /></SvgRoot>;
});
export default IconPointers;
