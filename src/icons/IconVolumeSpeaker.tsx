import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconVolumeSpeaker = React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeSpeaker(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.0459 2.13647C11.8755 1.57106 12.9996 2.16481 13 3.1687V12.8308C12.9998 13.835 11.8756 14.4288 11.0459 13.863L6.84668 10.9998H3.5C2.6716 10.9998 2.00003 10.3282 2 9.49976V6.49976C2.0002 5.67153 2.67173 4.9998 3.5 4.99976H6.84668L11.0459 2.13647ZM12 3.1687C11.9996 2.96821 11.7752 2.8498 11.6094 2.96265L7.28125 5.91284C7.19831 5.96928 7.10032 5.99975 7 5.99976H3.5C3.22399 5.99977 3.0002 6.2238 3 6.49976V9.49976C3.00003 9.77587 3.22388 9.99976 3.5 9.99976H7L7.0752 10.0046C7.14882 10.0158 7.21917 10.0444 7.28125 10.0867L11.6094 13.0369C11.7753 13.15 11.9998 13.0315 12 12.8308V3.1687Z" fill="currentColor" /></SvgRoot>;
});
export default IconVolumeSpeaker;
