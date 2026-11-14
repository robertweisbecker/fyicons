import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAppsSearch = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAppsSearch(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="apps-search"><path fill="currentColor" d="M4.5 8.665a2.835 2.835 0 1 1 0 5.67 2.835 2.835 0 0 1 0-5.67m7 .335a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m-7 .665a1.835 1.835 0 1 0 0 3.67 1.835 1.835 0 0 0 0-3.67m7 .335a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-7-8.335a2.835 2.835 0 1 1 0 5.67 2.835 2.835 0 0 1 0-5.67m7 0a2.835 2.835 0 1 1 0 5.67 2.835 2.835 0 0 1 0-5.67m-7 1a1.835 1.835 0 1 0 0 3.67 1.835 1.835 0 0 0 0-3.67m7 0a1.835 1.835 0 1 0 0 3.67 1.835 1.835 0 0 0 0-3.67" /><path stroke="currentColor" strokeLinecap="round" d="m13 13 1.5 1.5" /></SvgRoot>;
});
export default IconAppsSearch;
