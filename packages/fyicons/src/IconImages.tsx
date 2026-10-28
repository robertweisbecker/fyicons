import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconImages = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconImages(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="images"><path fill="currentColor" d="M5.597 3.297A2 2 0 0 1 8.08 1.943l5.622 1.653a2 2 0 0 1 1.355 2.484l-1.654 5.622a2 2 0 0 1-2.483 1.354L10.73 13A2 2 0 0 1 9 14H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6l-.002.036.204.06a1 1 0 0 0 1.241-.677l1.654-5.622a1 1 0 0 0-.677-1.24L7.798 2.902a1 1 0 0 0-1.241.677L6.434 4H5.39zm.199 7.515a2.11 2.11 0 0 0-3.306.163l-.49.686V12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-.796q-.274.24-.61.41a2.91 2.91 0 0 1-3.494-.688zm4.978 2.11.008-.014.009-.024zM3 5a1 1 0 0 0-1 1v4.01a3.11 3.11 0 0 1 4.548.144l.101.115A1.913 1.913 0 0 0 10 9.01V6a1 1 0 0 0-1-1zm4.5 1.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" /></SvgRoot>;
});
export default IconImages;
