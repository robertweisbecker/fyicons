import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconListDisc = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconListDisc(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="list-disc"><path fill="currentColor" d="M3.5 10.821a1.679 1.679 0 1 1 0 3.358 1.679 1.679 0 0 1 0-3.358m0 .858a.821.821 0 1 0 0 1.642.821.821 0 0 0 0-1.642m10 .321a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm-10-5.679a1.679 1.679 0 1 1 0 3.358 1.679 1.679 0 0 1 0-3.358m0 .858a.821.821 0 1 0 0 1.642.821.821 0 0 0 0-1.642m10 .321a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1zm-10-5.679a1.679 1.679 0 1 1 0 3.358 1.679 1.679 0 0 1 0-3.358m0 .858a.821.821 0 1 0 0 1.642.821.821 0 0 0 0-1.642M13.5 3a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconListDisc;
