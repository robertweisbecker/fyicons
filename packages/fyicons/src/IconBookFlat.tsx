import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookFlat = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookFlat(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="book-flat"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1V3zm2 10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6zm3.5-5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm2-2a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconBookFlat;
