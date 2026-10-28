import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVolumeBluetooth = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeBluetooth(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="volume-bluetooth"><path fill="currentColor" d="M6.92 2.237C7.726 1.521 9 2.093 9 3.171v9.66c0 1.079-1.274 1.65-2.08.934L3.81 11H1.5A1.5 1.5 0 0 1 0 9.5v-3A1.5 1.5 0 0 1 1.5 5h2.31zM8 3.171a.25.25 0 0 0-.416-.186l-3.252 2.89A.5.5 0 0 1 4 6.001H1.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H4l.09.008a.5.5 0 0 1 .242.118l3.252 2.89A.25.25 0 0 0 8 12.832zm4.286-.123a.5.5 0 0 1 .53.065l2.746 2.247a.75.75 0 0 1-.043 1.193L13.464 8l2.055 1.447a.75.75 0 0 1 .043 1.194l-2.746 2.246A.5.5 0 0 1 12 12.5V9.031l-1.212.855a.5.5 0 0 1-.576-.817L11.729 8l-1.517-1.068a.5.5 0 0 1 .576-.818L12 6.968V3.5a.5.5 0 0 1 .286-.452M13 11.445l1.674-1.37L13 8.895zm0-4.341 1.674-1.18L13 4.554z" /></SvgRoot>;
});
export default IconVolumeBluetooth;
