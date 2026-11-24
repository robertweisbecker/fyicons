import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFireAltFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFireAltFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="fire-alt-fill"><path fill="currentColor" d="M9.596 1.022c.125-.014.189-.02.247.002a.26.26 0 0 1 .122.104c.032.054.036.128.044.275C10.214 5.503 14 5.6 14 9.501c0 2.708-2.5 5.5-6 5.5s-5.628-2.44-6-5c-.34-2.343 1.013-4.165 2.013-5.16.244-.243.366-.364.463-.37a.24.24 0 0 1 .212.101c.057.078.038.281-.001.686-.061.622.066 1.243.813 1.243 2.196 0 .769-5.102 4.096-5.479M10 7c-1 2.5-4.353 1.5-4.001 4.285C6.134 12.348 7.145 13 8.249 13s2.44-.814 2.751-2.143c.498-2.132-.985-3.84-1-3.857" />{props.children}</SvgRoot>;
});
export default IconFireAltFill;
