import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLayoutTemplate = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLayoutTemplate(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="layout-template"><path fill="currentColor" d="M2.5 11a.5.5 0 0 1 .5.5v.5a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1H4a2 2 0 0 1-2-2v-.5a.5.5 0 0 1 .5-.5m6 2a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1zm5-2a.5.5 0 0 1 .5.5v.5a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1h.5a1 1 0 0 0 1-1v-.5a.5.5 0 0 1 .5-.5m-7-7a.5.5 0 0 1 .5.5V6h4.5a.5.5 0 1 1 0 1H7v4.5a.5.5 0 0 1-1 0V7H4.5a.5.5 0 0 1 0-1H6V4.5a.5.5 0 0 1 .5-.5m-4 3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m11 0a.5.5 0 0 1 .5.5v1a.5.5 0 1 1-1 0v-1a.5.5 0 0 1 .5-.5m-9-5a.5.5 0 0 1 0 1H4a1 1 0 0 0-1 1v.5a.5.5 0 0 1-1 0V4a2 2 0 0 1 2-2zM12 2a2 2 0 0 1 2 2v.5a.5.5 0 1 1-1 0V4a1 1 0 0 0-1-1h-.5a.5.5 0 0 1 0-1zM8.5 2a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconLayoutTemplate;
