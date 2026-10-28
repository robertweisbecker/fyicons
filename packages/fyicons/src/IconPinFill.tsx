import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPinFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPinFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M6 11L3.58594 13.4141C3.21094 13.7891 2.7022 13.9999 2.17188 14H2V13.8281C2.00008 13.2978 2.21094 12.7891 2.58594 12.4141L5 10L6 11ZM8.59766 2.49512C9.24316 1.33412 10.8203 1.11338 11.7598 2.05273L13.9473 4.24023C14.8865 5.17966 14.6658 6.75686 13.5049 7.40234L11 8.79395V10.6719C10.9999 11.3347 10.7363 11.9707 10.2676 12.4395L10.207 12.5C9.84097 12.866 9.2619 12.8885 8.86914 12.5684L8.79297 12.5L3.5 7.20703C3.10958 6.81652 3.10955 6.18347 3.5 5.79297L3.56055 5.73242C4.02931 5.26369 4.66522 5.00008 5.32812 5H7.20508L8.59766 2.49512Z" fill="currentColor" /></SvgRoot>;
});
export default IconPinFill;
