import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFastForward = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFastForward(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="fast-forward"><path fill="currentColor" d="M1 3.926a.967.967 0 0 1 1.419-.854l.123.077L7.5 6.824V4.131a.967.967 0 0 1 1.387-.871l.122.071 5.699 3.87a.967.967 0 0 1 0 1.599l-5.7 3.869a.966.966 0 0 1-1.508-.8V9.175L2.542 12.85A.967.967 0 0 1 1 12.075zm1 8.08L7.405 8 2 3.992zm6.5-.2L14.105 8 8.5 4.193z" /></SvgRoot>;
});
export default IconFastForward;
