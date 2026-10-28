import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAppsSearch = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAppsSearch(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="apps-search"><path fill="currentColor" d="M4.5 8.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m7 .25a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m-7 .75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m7 .25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-7-8.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m7 0a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m-7 1a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m7 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" /><path stroke="currentColor" strokeLinecap="round" d="m13 13 2 2" /></SvgRoot>;
});
export default IconAppsSearch;
