import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCloudPointer = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCloudPointer(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cloud-pointer"><path fill="currentColor" d="M9.073 10.328a1 1 0 0 1 1.258-1.258l4.03 1.29c.885.284.938 1.518.08 1.875l-1.555.648-.648 1.555c-.358.858-1.59.805-1.875-.08zm2.242 3.725.727-1.744a.5.5 0 0 1 .27-.27l1.744-.726-4.03-1.29zM6.5 3a3.5 3.5 0 0 1 2.447.998.12.12 0 0 0 .099.033q.223-.03.454-.031A3.5 3.5 0 0 1 13 7.5q-.002.335-.065.651.137.046.27.105L11.96 7.93q.039-.21.04-.43a2.5 2.5 0 0 0-2.821-2.479 1.12 1.12 0 0 1-.931-.308 2.5 2.5 0 0 0-4.07 2.71.5.5 0 0 1-.334.667 2.5 2.5 0 0 0 .518 4.906l.15.004h3.699l.263 1H4.487l-.154-.004H4.32A3.5 3.5 0 0 1 1 10.5c0-1.433.862-2.66 2.093-3.201A3.5 3.5 0 0 1 6.5 3" /></SvgRoot>;
});
export default IconCloudPointer;
