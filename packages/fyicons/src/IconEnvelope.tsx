import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEnvelope = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEnvelope(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="envelope"><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-1.944 5.349 1.798 1.797a.5.5 0 1 1-.707.707L10.2 8.909l-1.106.724a2 2 0 0 1-2.19 0l-1.107-.724-1.944 1.946a.5.5 0 1 1-.708-.707L4.942 8.35 2 6.424V11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.424zM3 4a1 1 0 0 0-1 1v.229l5.453 3.566a1 1 0 0 0 1.094 0L14 5.229V5a1 1 0 0 0-1-1z" /></SvgRoot>;
});
export default IconEnvelope;
