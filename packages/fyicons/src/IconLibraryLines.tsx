import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLibraryLines = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLibraryLines(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="library-lines"><path fill="currentColor" d="M2.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 1 1-1 0v-11a.5.5 0 0 1 .5-.5m3 3a.5.5 0 0 1 .5.5v8a.5.5 0 1 1-1 0v-8a.5.5 0 0 1 .5-.5m3-2a.5.5 0 0 1 .5.5v10a.5.5 0 1 1-1 0v-10a.5.5 0 0 1 .5-.5m1.776 2.052a.5.5 0 0 1 .671.224l4 8a.5.5 0 0 1-.894.447l-4-8a.5.5 0 0 1 .223-.67" /></SvgRoot>;
});
export default IconLibraryLines;
