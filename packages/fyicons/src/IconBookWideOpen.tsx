import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookWideOpen = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookWideOpen(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M4.816 2A3.68 3.68 0 0 1 8 3.831a3.68 3.68 0 0 1 3.184-1.83H13.5A1.5 1.5 0 0 1 15 3.5v7.74c0 .961-.9 1.67-1.833 1.444a5.4 5.4 0 0 0-4.77 1.134l-.074.062-.009.006q-.019.015-.039.026-.022.016-.046.03l-.038.015q-.025.013-.051.02l-.053.012-.036.006q-.026.002-.051.001h-.052l-.036-.007-.053-.011-.051-.02-.038-.016q-.024-.014-.046-.03-.02-.011-.04-.026l-.007-.006-.074-.062a5.4 5.4 0 0 0-4.77-1.134A1.485 1.485 0 0 1 1 11.24V3.5A1.5 1.5 0 0 1 2.5 2zM2.5 3a.5.5 0 0 0-.5.5v7.742c0 .313.293.544.598.47a6.4 6.4 0 0 1 4.902.799V5.684A2.684 2.684 0 0 0 4.816 3zm8.684 0A2.684 2.684 0 0 0 8.5 5.684v6.827a6.4 6.4 0 0 1 4.902-.799.484.484 0 0 0 .598-.47V3.5a.5.5 0 0 0-.5-.5z" /></SvgRoot>;
});
export default IconBookWideOpen;
