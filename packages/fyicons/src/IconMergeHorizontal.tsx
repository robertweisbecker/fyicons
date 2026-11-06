import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMergeHorizontal = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMergeHorizontal(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="merge-horizontal"><path fill="currentColor" d="M14.918 7.224a.5.5 0 0 1-.064.63l-3 3a.5.5 0 0 1-.707-.708L13.293 8h-3.94a3.5 3.5 0 0 1-3.13-1.935l-.34-.683A2.5 2.5 0 0 0 3.645 4H2.499a.5.5 0 0 1 0-1h1.147a3.5 3.5 0 0 1 3.13 1.934l.342.684A2.5 2.5 0 0 0 9.354 7h3.94l-2.147-2.147a.5.5 0 1 1 .707-.707l3 3zM7.82 9.116a.5.5 0 0 1 .063.704l-1.6 1.92A3.5 3.5 0 0 1 3.594 13H2.499a.5.5 0 0 1 0-1h1.095c.742 0 1.446-.33 1.92-.9l1.602-1.92a.5.5 0 0 1 .704-.064" /></SvgRoot>;
});
export default IconMergeHorizontal;
