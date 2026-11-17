import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLayoutRows = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLayoutRows(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="layout-rows"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM3 8.5V12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8.5zM4 3a1 1 0 0 0-1 1v3.5h10V4a1 1 0 0 0-1-1z" />{props.children}</SvgRoot>;
});
export default IconLayoutRows;
