import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUser = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconUser(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 9c1.577 0 3.098.57 4.226 1.595a5.44 5.44 0 0 1 1.503 2.271 1.51 1.51 0 0 1-.319 1.527c-.343.38-.861.607-1.41.607H4a1.9 1.9 0 0 1-1.41-.607 1.51 1.51 0 0 1-.32-1.527 5.44 5.44 0 0 1 1.504-2.271C4.902 9.569 6.424 9 8 9m0 1c-1.34 0-2.618.484-3.553 1.334a4.44 4.44 0 0 0-1.23 1.854.51.51 0 0 0 .116.535c.144.16.387.277.667.277h8c.28 0 .523-.117.667-.277a.51.51 0 0 0 .115-.536 4.44 4.44 0 0 0-1.23-1.853C10.619 10.484 9.34 10 8 10m0-9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" /></SvgRoot>;
});
export default IconUser;
