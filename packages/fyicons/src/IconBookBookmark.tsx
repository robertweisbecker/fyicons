import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookBookmark = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookBookmark(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12 1a1 1 0 0 1 1 1v9.5l-.003.023a.5.5 0 0 1-.013.095q-.007.027-.016.05-.005.018-.012.034l-.031.058-.013.021a.5.5 0 0 1-.057.07l-.018.015-.049.041-.035.022-.03.018a1.177 1.177 0 0 0 0 2.106l.03.017.035.022.049.04q.008.008.017.014l.005.006q.03.03.053.065l.013.022.031.058q.007.016.012.033.01.026.016.05a.4.4 0 0 1 .013.097L13 14.5l-.002.014-.005.053-.007.043v.005l-.013.043a.5.5 0 0 1-.347.323l-.033.01A.5.5 0 0 1 12.5 15H5a2 2 0 0 1-2-2V3.5A2.5 2.5 0 0 1 5.5 1zM5 12a1 1 0 1 0 0 2h6.313a2.21 2.21 0 0 1 0-2zm.5-10A1.5 1.5 0 0 0 4 3.5v7.77A2 2 0 0 1 5 11h7V2h-1v4.425a.5.5 0 0 1-.875.33L9 5.478 7.875 6.755A.5.5 0 0 1 7 6.425V2z" /></SvgRoot>;
});
export default IconBookBookmark;
