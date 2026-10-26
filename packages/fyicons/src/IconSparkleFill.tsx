import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSparkleFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSparkleFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.58 2.438c.456-1.367 2.39-1.367 2.846 0l.64 1.919a2.5 2.5 0 0 0 1.58 1.581l1.92.64c1.366.456 1.366 2.39 0 2.845l-1.92.64a2.5 2.5 0 0 0-1.58 1.581l-.64 1.919c-.456 1.367-2.39 1.367-2.846 0l-.64-1.919a2.5 2.5 0 0 0-1.58-1.581l-1.92-.64c-1.367-.456-1.367-2.39 0-2.845l1.92-.64a2.5 2.5 0 0 0 1.58-1.581z" /></SvgRoot>;
});
export default IconSparkleFill;
