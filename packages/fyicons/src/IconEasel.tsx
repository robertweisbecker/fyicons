import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEasel = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEasel(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="easel"><path d="M8.5 1C9.32843 1 10 1.67157 10 2.5V3H12C12.5523 3 13 3.44772 13 4V9H13.5C13.7761 9 14 9.22386 14 9.5C14 9.77614 13.7761 10 13.5 10H11.1104L11.9902 14.4033C12.0435 14.6736 11.8679 14.9371 11.5977 14.9912C11.3273 15.045 11.0643 14.8688 11.0098 14.5986L10.0908 10H5.91016L4.99023 14.5986C4.93579 14.8686 4.67249 15.0447 4.40234 14.9912C4.13183 14.9371 3.95611 14.6728 4.00977 14.4023L4.89062 10H2.5C2.22386 10 2 9.77614 2 9.5C2 9.22386 2.22386 9 2.5 9H3V4C3 3.44772 3.44772 3 4 3H6V2.5C6 1.67157 6.67157 1 7.5 1H8.5ZM4 9H12V4H4V9ZM7.5 2C7.22386 2 7 2.22386 7 2.5V3H9V2.5C9 2.22386 8.77614 2 8.5 2H7.5Z" fill="currentColor" /><path d="M11 12.5H5" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconEasel;
