import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconForkHorizontal = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconForkHorizontal(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="fork-horizontal"><path fill="currentColor" d="M7.146 9.147a.5.5 0 0 1 .707 0L12 13.294V10.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1 0-1h2.793L7.146 9.854a.5.5 0 0 1 0-.707M12.501 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V2.707L7.73 6.975A3.5 3.5 0 0 1 5.258 8H2.5a.5.5 0 0 1 0-1h2.757a2.5 2.5 0 0 0 1.768-.732L11.293 2H8.452a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconForkHorizontal;
