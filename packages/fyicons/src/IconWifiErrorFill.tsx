import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWifiErrorFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWifiErrorFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="wifi-error-fill"><path fill="currentColor" d="M5.946 9.567q-.275.165-.52.37c-.218.184-.544.194-.746-.007l-.702-.702a.47.47 0 0 1 .004-.683 6 6 0 0 1 1.701-1.08zm4.37-2.101a6 6 0 0 1 1.701 1.08.47.47 0 0 1 .003.683l-.701.7c-.202.202-.529.192-.746.008a4 4 0 0 0-.519-.368zm.486-3.885a9.4 9.4 0 0 1 3.866 2.335.47.47 0 0 1 0 .667l-.528.527a.526.526 0 0 1-.725.003 8 8 0 0 0-2.843-1.69zM5.428 5.423a8 8 0 0 0-2.843 1.69.526.526 0 0 1-.726-.005l-.526-.525a.47.47 0 0 1 0-.667 9.4 9.4 0 0 1 3.865-2.335zM9 4a.93.93 0 0 0-.27-.707A1.03 1.03 0 0 0 8 3c-.278 0-.544.105-.73.293A.93.93 0 0 0 7 4l.013.263.224 4.725.013.262c.01.19.096.372.237.506s.323.21.513.21.373-.076.513-.21a.76.76 0 0 0 .237-.506l.012-.262.226-4.725zm-1 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" /></SvgRoot>;
});
export default IconWifiErrorFill;
