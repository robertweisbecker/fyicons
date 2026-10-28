import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVolumeMedium = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeMedium(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="volume-medium"><path fill="currentColor" d="M6.92 2.238C7.726 1.52 9 2.093 9 3.17v9.66c0 1.078-1.274 1.65-2.08.934L3.81 11H1.5A1.5 1.5 0 0 1 0 9.5v-3A1.5 1.5 0 0 1 1.5 5h2.31zM8 3.17a.25.25 0 0 0-.416-.186l-3.252 2.89A.5.5 0 0 1 4 6.001H1.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H4l.09.008q.137.025.242.118l3.252 2.89A.25.25 0 0 0 8 12.832zm4.499 1.874a3.003 3.003 0 0 1 2.274 4.108 3 3 0 0 1-2.274 1.81c-.272.045-.498-.183-.498-.459s.228-.494.495-.562A2 2 0 0 0 13.85 8.77a2 2 0 0 0-.434-2.18 2 2 0 0 0-.919-.523c-.267-.069-.495-.287-.495-.563s.226-.505.498-.459" /><circle cx={11.75} cy={8} r={0.75} fill="currentColor" /></SvgRoot>;
});
export default IconVolumeMedium;
