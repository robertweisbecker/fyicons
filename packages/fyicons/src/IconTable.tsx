import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTable = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTable(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="table"><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-6 7v2h6a1 1 0 0 0 1-1v-1zm-5 1a1 1 0 0 0 1 1h3v-2H2zm5-4v2h7V7zM2 9h4V7H2zm5-3h7V5a1 1 0 0 0-1-1H7zM3 4a1 1 0 0 0-1 1v1h4V4z" /></SvgRoot>;
});
export default IconTable;
