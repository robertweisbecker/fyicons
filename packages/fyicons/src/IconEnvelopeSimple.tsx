import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEnvelopeSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEnvelopeSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="envelope-simple"><path fill="currentColor" d="M12 3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM9.414 9.293a2 2 0 0 1-2.828 0L3 5.707V12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5.707zM4 4a1 1 0 0 0-.838.455l4.131 4.13a1 1 0 0 0 1.414 0l4.13-4.13A1 1 0 0 0 12 4z" /></SvgRoot>;
});
export default IconEnvelopeSimple;
