import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHardDrive = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHardDrive(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.735 3a2.5 2.5 0 0 1 2.35 1.646l1.73 4.76c.122.335.185.688.185 1.045l-.002.025.002.024a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 10.5l.001-.024L1 10.45c0-.357.063-.71.185-1.046l1.73-4.76A2.5 2.5 0 0 1 5.265 3zM3.5 9a1.5 1.5 0 0 0-1.499 1.476c.013.844.7 1.524 1.548 1.524h8.902c.847 0 1.534-.68 1.547-1.524A1.5 1.5 0 0 0 12.5 9zm9 .75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-2 .25a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zM5.265 4a1.5 1.5 0 0 0-1.41.987l-1.143 3.14C2.96 8.047 3.225 8 3.5 8h9c.275 0 .54.046.787.128l-1.142-3.14A1.5 1.5 0 0 0 10.736 4z" /></SvgRoot>;
});
export default IconHardDrive;
