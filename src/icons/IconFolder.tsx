import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFolder = React.forwardRef<SVGSVGElement, IconProps>(function IconFolder(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M4.67188 2C5.33481 2.00008 5.97068 2.26365 6.43945 2.73242L7.70703 4H12.5C13.8807 4 15 5.11929 15 6.5V11.5C15 12.8807 13.8807 14 12.5 14H3.5C2.11929 14 1 12.8807 1 11.5V4.5C1 3.11929 2.11929 2 3.5 2H4.67188ZM3 8C2.44772 8 2 8.44772 2 9V11.5C2 12.3284 2.67157 13 3.5 13H12.5C13.3284 13 14 12.3284 14 11.5V9C14 8.44772 13.5523 8 13 8H3ZM3.5 3C2.67157 3 2 3.67157 2 4.5V7.26953C2.29437 7.09906 2.63536 7 3 7H13C13.3646 7 13.7056 7.09906 14 7.26953V6.5C14 5.67157 13.3284 5 12.5 5H7.29297L5.73242 3.43945C5.45119 3.15822 5.06959 3.00008 4.67188 3H3.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconFolder;
