import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPencil = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPencil(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="pencil"><path fill="currentColor" d="M10.647 1.646a2.621 2.621 0 0 1 3.707 3.708L7.296 12.41a4.5 4.5 0 0 1-2.545 1.273l-2.18.311a.5.5 0 0 1-.566-.565l.311-2.181A4.5 4.5 0 0 1 3.59 8.704zM4.296 9.411a3.5 3.5 0 0 0-.99 1.98l-.217 1.52 1.52-.218a3.5 3.5 0 0 0 1.98-.989L12.793 5.5 10.5 3.207zm9.35-7.057a1.62 1.62 0 0 0-2.293 0l-.146.146L13.5 4.793l.146-.147a1.62 1.62 0 0 0 0-2.292" /></SvgRoot>;
});
export default IconPencil;
