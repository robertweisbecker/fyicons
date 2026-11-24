import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFileSearch = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFileSearch(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="file-search"><path fill="currentColor" d="M12 9a3 3 0 0 1 2.443 4.736l1.41 1.41a.5.5 0 1 1-.707.707l-1.41-1.41A3 3 0 1 1 12 9M7.672 1a2.5 2.5 0 0 1 1.767.732l2.829 2.829A2.5 2.5 0 0 1 13 6.328V7.5a.5.5 0 0 1-1 0v-.75a.75.75 0 0 0-.75-.75H9.5A1.5 1.5 0 0 1 8 4.5V2.037A1.5 1.5 0 0 0 7.672 2H5a1 1 0 0 0-1 1v9.5A1.5 1.5 0 0 0 5.5 14h2a.5.5 0 0 1 0 1h-2A2.5 2.5 0 0 1 3 12.5V3a2 2 0 0 1 2-2zM12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4M9 4.5a.5.5 0 0 0 .5.5h1.75l.045.002L9 2.707z" />{props.children}</SvgRoot>;
});
export default IconFileSearch;
