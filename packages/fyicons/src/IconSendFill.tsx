import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSendFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSendFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M2 3.16287C1.99998 2.03196 3.20407 1.30768 4.20312 1.83768L13.3193 6.67459C14.3818 7.23838 14.3817 8.76108 13.3193 9.32498L4.20312 14.1619C3.20405 14.692 1.99995 13.9677 2 12.8367V10.1541C2.00029 9.52932 2.462 9.00032 3.08105 8.9158L7.18945 8.35526C7.36724 8.33081 7.5 8.17929 7.5 7.99979C7.49989 7.82036 7.3672 7.66873 7.18945 7.64432L3.08203 7.08377C2.46282 6.99932 2.00116 6.47042 2.00098 5.84549L2 3.16287Z" fill="currentColor" /></SvgRoot>;
});
export default IconSendFill;
