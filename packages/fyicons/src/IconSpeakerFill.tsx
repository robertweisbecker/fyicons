import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSpeakerFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSpeakerFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM8 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M8 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></SvgRoot>;
});
export default IconSpeakerFill;
