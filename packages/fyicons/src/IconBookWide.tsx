import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookWide = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookWide(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="book-wide"><path fill="currentColor" d="M13 2a1 1 0 0 1 1 1v7.5l-.002.014-.005.051a.5.5 0 0 1-.157.302q-.015.014-.032.027l-.04.028-.007.007-.356.214a1 1 0 0 0 0 1.714l.356.214.008.006.039.028a.49.49 0 0 1 .194.38L14 13.5l-.003.023a.5.5 0 0 1-.014.097q0 .008-.002.014l-.008.024-.017.044-.026.049a.5.5 0 0 1-.075.099l-.014.013a.5.5 0 0 1-.217.12l-.033.007a.5.5 0 0 1-.091.01H4a2 2 0 0 1-2-2V5a3 3 0 0 1 3-3zm-9 9a1 1 0 1 0 0 2h8.182a2.02 2.02 0 0 1 0-2zm1-8a2 2 0 0 0-2 2v5.27A2 2 0 0 1 4 10h1V4.5a.5.5 0 0 1 1 0V10h7V3z" /></SvgRoot>;
});
export default IconBookWide;
