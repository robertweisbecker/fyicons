import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLightbulbSimpleFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLightbulbSimpleFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M10.118 13.712A1.5 1.5 0 0 1 8.633 15H7.367a1.5 1.5 0 0 1-1.485-1.288L5.78 13h4.44zM8 1a5 5 0 0 1 3.697 8.365c-.638.701-1.155 1.378-1.265 2.15l-.07.485H5.637l-.07-.485c-.11-.771-.627-1.449-1.265-2.15A5 5 0 0 1 8 1" /></SvgRoot>;
});
export default IconLightbulbSimpleFill;
