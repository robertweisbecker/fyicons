import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHardDrive = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHardDrive(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="hard-drive"><path fill="currentColor" d="M10.796 3a2.5 2.5 0 0 1 2.312 1.55l1.704 4.144c.125.302.188.625.188.952V10a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-.354c0-.327.064-.65.188-.952L2.891 4.55A2.5 2.5 0 0 1 5.204 3zM4 8a2 2 0 1 0 0 4h8a2 2 0 1 0 0-4zm8 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-2.5.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zM5.204 4a1.5 1.5 0 0 0-1.388.93l-.941 2.289A3 3 0 0 1 4 7h8c.398 0 .777.078 1.124.219l-.94-2.29A1.5 1.5 0 0 0 10.796 4z" /></SvgRoot>;
});
export default IconHardDrive;
