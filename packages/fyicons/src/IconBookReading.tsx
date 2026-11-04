import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookReading = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookReading(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="book-reading"><path fill="currentColor" d="M4.027 2c.122-.56.638-1.07 1.34-.89 1.237.32 2.198 1.287 2.714 2.458A3.5 3.5 0 0 1 11 2h1.5A1.5 1.5 0 0 1 14 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-1.67a2.5 2.5 0 0 0-2.342 1.622l-.02.054a.5.5 0 0 1-.915.048l-.171-.342A2.5 2.5 0 0 0 5.146 13H3.5A1.5 1.5 0 0 1 2 11.5v-8A1.5 1.5 0 0 1 3.5 2zM11 3a2.5 2.5 0 0 0-2.5 2.5v7.39c.628-.56 1.45-.89 2.33-.89h1.67a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5zM3.5 3a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h1.646c.485 0 .955.102 1.385.287a5.1 5.1 0 0 0-1.678-1.56C4.376 10.458 4 9.95 4 9.334V3zm1.56-.905A.22.22 0 0 0 5 2.25v7.083c0 .19.12.398.346.526A6.15 6.15 0 0 1 7.5 11.934V5.5c0-1.563-1.03-3.072-2.383-3.422a.05.05 0 0 0-.028 0 .1.1 0 0 0-.03.017" /></SvgRoot>;
});
export default IconBookReading;
