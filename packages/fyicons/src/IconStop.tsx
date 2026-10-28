import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStop = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStop(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="stop"><path fill="currentColor" d="M11.77 3.002c.326.005.524.026.684.107.188.096.34.249.437.437C13 3.76 13 4.04 13 4.6v6.8l-.002.37c-.005.326-.026.524-.107.684l-.082.134a1 1 0 0 1-.355.303l-.084.036c-.146.052-.328.067-.6.071L11.4 13H4.6c-.56 0-.84 0-1.054-.11a1 1 0 0 1-.355-.302l-.082-.134c-.081-.16-.102-.358-.107-.684L3 11.4V4.6c0-.49 0-.766.073-.97l.036-.084a1 1 0 0 1 .303-.355l.134-.082C3.76 3 4.04 3 4.6 3h6.8zM4.6 4c-.297 0-.459.001-.576.01l-.012.002-.001.012C4 4.141 4 4.304 4 4.6v6.8c0 .297.001.46.01.576l.002.011.012.002c.117.01.28.011.576.011h6.8c.297 0 .46-.001.576-.01l.011-.003.002-.011c.01-.117.011-.28.011-.576V4.6c0-.297-.001-.459-.01-.576l-.003-.012-.011-.001A8 8 0 0 0 11.4 4z" /></SvgRoot>;
});
export default IconStop;
