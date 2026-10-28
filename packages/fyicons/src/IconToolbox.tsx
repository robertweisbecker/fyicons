import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconToolbox = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconToolbox(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="toolbox"><path fill="currentColor" d="M9.5 2A1.5 1.5 0 0 1 11 3.5V4h.5A3.5 3.5 0 0 1 15 7.5v4a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 11.5v-4A3.5 3.5 0 0 1 4.5 4H5v-.5A1.5 1.5 0 0 1 6.5 2zM11 9v.5a.5.5 0 0 1-1 0V9H6v.5a.5.5 0 0 1-1 0V9H2v2.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V9zM4.5 5A2.5 2.5 0 0 0 2 7.5V8h3v-.5a.5.5 0 0 1 1 0V8h4v-.5a.5.5 0 0 1 1 0V8h3v-.5A2.5 2.5 0 0 0 11.5 5H11v.5a.5.5 0 0 1-1 0V5H6v.5a.5.5 0 0 1-1 0V5zm2-2a.5.5 0 0 0-.5.5V4h4v-.5a.5.5 0 0 0-.5-.5z" /></SvgRoot>;
});
export default IconToolbox;
