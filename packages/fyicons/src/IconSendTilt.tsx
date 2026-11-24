import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSendTilt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSendTilt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="send-tilt"><path fill="currentColor" d="M13.153 3c1.191 0 1.907 1.322 1.256 2.32l-5.397 8.277c-.676 1.035-2.244.855-2.666-.307l-.835-2.298a2.46 2.46 0 0 1 .765-2.77l.162-.128-.088.028a2.47 2.47 0 0 1-2.56-.73L2.105 5.497C1.245 4.53 1.932 3 3.227 3zM3.227 4a.5.5 0 0 0-.374.832l1.684 1.896a1.47 1.47 0 0 0 1.523.437c1.129-.342 2.647-.827 3.216-1.112a.5.5 0 0 1 .448.895c-.259.129-.713.438-1.248.835A55 55 0 0 0 6.9 9.004a1.46 1.46 0 0 0-.45 1.646l.835 2.298a.5.5 0 0 0 .889.102l5.397-8.276A.5.5 0 0 0 13.153 4z" />{props.children}</SvgRoot>;
});
export default IconSendTilt;
