import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHammer = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHammer(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="hammer"><path fill="currentColor" d="M5.494 1.903a4.5 4.5 0 0 1 5.678.562l1.683 1.682A.5.5 0 0 1 13 4.5v1a.5.5 0 0 0 .5.5h.207l.44.44a1.5 1.5 0 0 1 0 2.121l-.586.586a1.5 1.5 0 0 1-2.121 0l-.294-.293L11 8.707V8.5a.5.5 0 0 0-.326-.467l-.82.82-.006.005-4.788 4.789a1.5 1.5 0 0 1-2.121 0l-.586-.586a1.5 1.5 0 0 1 0-2.121l4.793-4.793a1.248 1.248 0 0 0-.488-2.067l-.317-.105a.5.5 0 0 1-.195-.121l-1-1a.5.5 0 0 1 .076-.77zm-2.433 9.744a.5.5 0 0 0 0 .707l.586.586a.5.5 0 0 0 .707 0l4.44-4.44L7.5 7.207zm7.404-8.475a3.5 3.5 0 0 0-4.172-.586l.477.477.206.07c1.42.473 1.948 2.136 1.192 3.327L9.5 7.792l.647-.645.076-.063A.5.5 0 0 1 10.5 7c.751 0 1.371.553 1.48 1.274l.167.166a.5.5 0 0 0 .707 0l.586-.586a.5.5 0 0 0 0-.707l-.166-.166A1.5 1.5 0 0 1 12 5.5v-.794z" /></SvgRoot>;
});
export default IconHammer;
