import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGallery = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGallery(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="gallery"><path fill="currentColor" d="M1 5.25C1 4.56 1.56 4 2.25 4H4v-.5A1.5 1.5 0 0 1 5.5 2h5A1.5 1.5 0 0 1 12 3.5V4h1.75c.69 0 1.25.56 1.25 1.25v5.5c0 .69-.56 1.25-1.25 1.25H12v.5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 12.5V12H2.25C1.56 12 1 11.44 1 10.75zM12 11h1.75a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25H12zm-7 1.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5zm-3-1.75c0 .138.112.25.25.25H4V5H2.25a.25.25 0 0 0-.25.25z" /></SvgRoot>;
});
export default IconGallery;
