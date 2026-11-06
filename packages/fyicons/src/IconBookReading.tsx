import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookReading = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookReading(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="book-reading"><path fill="currentColor" d="M4 1c0-.508.448-1.09 1.116-.922 1.07.268 1.912 1.186 2.473 2.186.217.388.401.804.546 1.227A3.5 3.5 0 0 1 11 2h1.5A1.5 1.5 0 0 1 14 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-1.67a2.5 2.5 0 0 0-2.342 1.622l-.02.053a.5.5 0 0 1-.915.048l-.171-.341A2.5 2.5 0 0 0 5.146 13H3.5A1.5 1.5 0 0 1 2 11.5v-8A1.5 1.5 0 0 1 3.5 2H4zm7 2a2.5 2.5 0 0 0-2.5 2.5v7.39c.628-.56 1.45-.89 2.33-.89h1.67a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5zM3.5 3a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h1.646c.485 0 .955.102 1.385.288a5.1 5.1 0 0 0-1.678-1.56C4.376 10.458 4 9.95 4 9.334V3zM5 9.335c0 .19.12.397.346.525A6.15 6.15 0 0 1 7.5 11.934V5.501c0-.817-.286-1.859-.783-2.747C6.243 1.908 5.633 1.296 5 1.084z" /></SvgRoot>;
});
export default IconBookReading;
