import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPost = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPost(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="post"><path d="M12.5 3C13.8807 3 15 4.11929 15 5.5V10.5C15 11.8807 13.8807 13 12.5 13H3.5C2.11929 13 1 11.8807 1 10.5V5.5C1 4.11929 2.11929 3 3.5 3H12.5ZM3.5 4C2.67157 4 2 4.67157 2 5.5V10.5C2 11.3284 2.67157 12 3.5 12H12.5C13.3284 12 14 11.3284 14 10.5V5.5C14 4.67157 13.3284 4 12.5 4H3.5ZM8.5 9C8.77614 9 9 9.22386 9 9.5C9 9.77614 8.77614 10 8.5 10H4.5C4.22386 10 4 9.77614 4 9.5C4 9.22386 4.22386 9 4.5 9H8.5ZM11.5 6C11.7761 6 12 6.22386 12 6.5C12 6.77614 11.7761 7 11.5 7H4.5C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6H11.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconPost;
