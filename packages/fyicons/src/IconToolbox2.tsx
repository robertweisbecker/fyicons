import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconToolbox2 = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconToolbox2(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="toolbox-2"><path fill="currentColor" d="M9.5 2A1.5 1.5 0 0 1 11 3.5V4h.5A3.5 3.5 0 0 1 15 7.5v4a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 11.5v-4A3.5 3.5 0 0 1 4.5 4H5v-.5A1.5 1.5 0 0 1 6.5 2zm-5 3A2.5 2.5 0 0 0 2 7.5V8h1.5a.5.5 0 0 1 0 1H2v2.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V9h-1.5a.5.5 0 0 1 0-1H14v-.5A2.5 2.5 0 0 0 11.5 5H11v.5a.5.5 0 0 1-1 0V5H6v.5a.5.5 0 0 1-1 0V5zm5 3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm-3-5a.5.5 0 0 0-.5.5V4h4v-.5a.5.5 0 0 0-.5-.5z" />{props.children}</SvgRoot>;
});
export default IconToolbox2;
