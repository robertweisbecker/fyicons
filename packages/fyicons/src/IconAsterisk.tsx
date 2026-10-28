import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAsterisk = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAsterisk(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="asterisk"><path fill="currentColor" d="M8 1.001c.407 0 .731.342.71.749l-.297 5.534 4.645-3.024a.712.712 0 1 1 .71 1.23L8.826 8l4.942 2.51a.711.711 0 1 1-.71 1.23L8.414 8.717l.296 5.534a.712.712 0 1 1-1.42 0l.296-5.535-4.644 3.025a.712.712 0 1 1-.71-1.23l4.94-2.51-4.94-2.51a.711.711 0 1 1 .71-1.23l4.643 3.024L7.29 1.75A.71.71 0 0 1 8 1.001" /></SvgRoot>;
});
export default IconAsterisk;
