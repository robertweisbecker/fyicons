import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPointer = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPointer(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="pointer"><path fill="currentColor" d="M1.658 3.555c-.39-1.172.725-2.288 1.898-1.897l9.686 3.228c1.293.431 1.387 2.225.146 2.79L9.46 9.46l-1.784 3.928c-.564 1.242-2.358 1.147-2.79-.146zm1.581-.949a.5.5 0 0 0-.633.633l3.23 9.687a.5.5 0 0 0 .93.048l1.862-4.098a.5.5 0 0 1 .248-.248l4.099-1.863a.5.5 0 0 0-.05-.93z" /></SvgRoot>;
});
export default IconPointer;
