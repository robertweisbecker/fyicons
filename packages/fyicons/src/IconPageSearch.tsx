import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPageSearch = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPageSearch(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="page-search"><path fill="currentColor" d="M11 1a2 2 0 0 1 2 2v4h-1V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4v1H5a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM8.5 6a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm2-2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" /><circle cx={10.5} cy={10.5} r={2} stroke="currentColor" /><path stroke="currentColor" strokeLinecap="round" d="m12 12 1.5 1.5" /></SvgRoot>;
});
export default IconPageSearch;
