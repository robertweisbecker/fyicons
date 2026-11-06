import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSearch = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSearch(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="search"><path fill="currentColor" d="M6.5 1a5.5 5.5 0 0 1 4.53 8.616l.427.427 3.251 3.25a1 1 0 0 1-1.414 1.415L9.616 11.03A5.5 5.5 0 1 1 6.5 1m0 1a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9" /></SvgRoot>;
});
export default IconSearch;
