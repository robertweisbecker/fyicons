import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookReading = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookReading(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="book-reading"><path fill="currentColor" d="m5.082 1.05.19.037c1.283.292 2.28 1.28 2.809 2.48A3.5 3.5 0 0 1 11 2h1.5A1.5 1.5 0 0 1 14 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-1.67a2.5 2.5 0 0 0-2.342 1.622l-.02.054a.5.5 0 0 1-.915.048l-.171-.342A2.5 2.5 0 0 0 5.146 13H3.5A1.5 1.5 0 0 1 2 11.5v-8A1.5 1.5 0 0 1 3.5 2H4c0-.491.393-.992.965-.964zM11 3a2.5 2.5 0 0 0-2.5 2.5v7.39c.628-.56 1.45-.89 2.33-.89h1.67a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5zM5 9.833c0 .192.12.396.34.516a6.4 6.4 0 0 1 2.16 1.897V5.5c0-1.614-1.09-3.154-2.5-3.448zM3.5 3a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h1.646c.32 0 .635.045.936.128a5.5 5.5 0 0 0-1.219-.901C4.374 10.96 4 10.448 4 9.833V3z" /></SvgRoot>;
});
export default IconBookReading;
