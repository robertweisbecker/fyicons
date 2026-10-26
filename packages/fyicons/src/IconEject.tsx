import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEject = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEject(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.5 10a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 12.5v-1A1.5 1.5 0 0 1 3.5 10zm-9 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3.668-8.677a1.25 1.25 0 0 1 1.665 0l5.033 4.494c.857.765.316 2.183-.832 2.183H2.966c-1.148 0-1.688-1.418-.832-2.183zm1 .746a.25.25 0 0 0-.334 0L2.8 7.563A.25.25 0 0 0 2.966 8h10.068a.25.25 0 0 0 .166-.437z" /></SvgRoot>;
});
export default IconEject;
