import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLayoutTable = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLayoutTable(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="layout-table"><path fill="currentColor" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM3 12a1 1 0 0 0 1 1h1v-3H3zm3 1h6a1 1 0 0 0 1-1v-2H6zM3 6v3h2V6zm3 0v3h7V6zM4 3a1 1 0 0 0-1 1v1h2V3zm2 2h7V4a1 1 0 0 0-1-1H6z" />{props.children}</SvgRoot>;
});
export default IconLayoutTable;
