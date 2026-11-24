import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCrownFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCrownFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="crown-fill"><path fill="currentColor" d="M12 12.75c0 .69-.56 1.25-1.25 1.25h-5.5C4.56 14 4 13.44 4 12.75V12h8zM8 2a1 1 0 0 1 .265 1.963L9.83 6.705a.5.5 0 0 0 .505.247l2.827-.404a1 1 0 1 1 .237.25L12 11H4L2.599 6.798A1 1 0 0 1 2 7a1 1 0 1 1 .836-.452l2.828.404a.5.5 0 0 0 .505-.247l1.565-2.742A1 1 0 0 1 8 2" />{props.children}</SvgRoot>;
});
export default IconCrownFill;
