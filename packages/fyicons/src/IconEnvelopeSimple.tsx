import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEnvelopeSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEnvelopeSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="envelope-simple"><path fill="currentColor" d="M12 3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM9.267 9.61a2 2 0 0 1-2.534 0L3 6.554V12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6.555zM4 4a1 1 0 0 0-1 1v.263l4.367 3.573a1 1 0 0 0 1.266 0L13 5.263V5a1 1 0 0 0-1-1z" />{props.children}</SvgRoot>;
});
export default IconEnvelopeSimple;
