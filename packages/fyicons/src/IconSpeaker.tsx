import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSpeaker = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSpeaker(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="speaker"><path fill="currentColor" d="M11 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM5 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm3 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2" /></SvgRoot>;
});
export default IconSpeaker;
