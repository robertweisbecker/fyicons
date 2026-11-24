import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCrownFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCrownFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="crown-fill"><path fill="currentColor" d="M12 12.75c0 .69-.56 1.25-1.25 1.25h-5.5C4.56 14 4 13.44 4 12.75V12h8zM8 2a1.5 1.5 0 0 1 .743 2.802l1.088 1.903a.5.5 0 0 0 .505.247l2.224-.318A1.248 1.248 0 0 1 13.75 5a1.25 1.25 0 1 1-.542 2.375L12 11H4L2.791 7.375a1.25 1.25 0 1 1 .647-.741l2.226.318a.5.5 0 0 0 .505-.247l1.087-1.903A1.499 1.499 0 0 1 8 2" />{props.children}</SvgRoot>;
});
export default IconCrownFill;
