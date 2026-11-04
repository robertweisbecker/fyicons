import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookOpen = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookOpen(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="book-open"><path fill="currentColor" d="M4.99 2C6.268 2 7.386 2.683 8 3.703A3.51 3.51 0 0 1 11.01 2h1.49A1.5 1.5 0 0 1 14 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-1.67a2.5 2.5 0 0 0-2.342 1.622l-.02.054a.5.5 0 0 1-.936 0l-.02-.054A2.5 2.5 0 0 0 5.17 13H3.5A1.5 1.5 0 0 1 2 11.5v-8A1.5 1.5 0 0 1 3.5 2zM3.5 3a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h1.67c.88 0 1.702.33 2.33.89V5.502l-.014-.256A2.51 2.51 0 0 0 4.99 3zm7.51 0A2.51 2.51 0 0 0 8.5 5.502v7.388c.628-.56 1.45-.89 2.33-.89h1.67a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5z" /></SvgRoot>;
});
export default IconBookOpen;
