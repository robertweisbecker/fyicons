import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconVolumeMediumFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeMediumFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.92 2.237C7.726 1.52 9 2.092 9 3.17v9.66c0 1.079-1.274 1.65-2.08.934L3.81 11H1.5A1.5 1.5 0 0 1 0 9.5v-3A1.5 1.5 0 0 1 1.5 5h2.31zm5.578 2.807a3 3 0 0 1 2.274 1.81 3 3 0 0 1 0 2.297 3 3 0 0 1-2.274 1.81c-.272.046-.498-.183-.498-.459s.228-.493.495-.561a2 2 0 0 0 .92-.525 2 2 0 0 0 .433-2.18 2 2 0 0 0-1.353-1.171c-.267-.069-.495-.287-.495-.563s.226-.504.498-.458" /><circle cx={11.75} cy={8} r={0.75} fill="currentColor" /></SvgRoot>;
});
export default IconVolumeMediumFill;
