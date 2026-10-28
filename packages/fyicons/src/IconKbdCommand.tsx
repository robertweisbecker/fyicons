import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconKbdCommand = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconKbdCommand(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="kbd-command"><path fill="currentColor" d="M11.5 2a2.5 2.5 0 0 1 0 5H10v2h1.5A2.5 2.5 0 1 1 9 11.5V10H7v1.5A2.5 2.5 0 1 1 4.5 9H6V7H4.5A2.5 2.5 0 1 1 7 4.5V6h2V4.5A2.5 2.5 0 0 1 11.5 2m-7 8A1.5 1.5 0 1 0 6 11.5V10zm5.5 1.5a1.5 1.5 0 1 0 1.5-1.5H10zM7 9h2V7H7zM4.5 3a1.5 1.5 0 1 0 0 3H6V4.5A1.5 1.5 0 0 0 4.5 3m7 0A1.5 1.5 0 0 0 10 4.5V6h1.5a1.5 1.5 0 0 0 0-3" /></SvgRoot>;
});
export default IconKbdCommand;
