import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSendAltTilt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSendAltTilt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="send-alt-tilt"><path fill="currentColor" d="M13.381 2.129c1.258-.077 2.045 1.338 1.315 2.366l-6.382 8.987c-.773 1.089-2.476.701-2.701-.615L4.838 8.33 1.385 5.465c-1.045-.868-.49-2.568.866-2.652zM2.312 3.81a.5.5 0 0 0-.288.884l3.327 2.76L8.947 5.38a.5.5 0 0 1 .5.866L5.85 8.322l.747 4.376a.5.5 0 0 0 .9.205l6.383-8.987a.5.5 0 0 0-.438-.79z" />{props.children}</SvgRoot>;
});
export default IconSendAltTilt;
