import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSlashSmall = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSlashSmall(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9.04 4.302a.501.501 0 0 1 .92.395l-3 7a.501.501 0 0 1-.92-.395z" /></SvgRoot>;
});
export default IconSlashSmall;
