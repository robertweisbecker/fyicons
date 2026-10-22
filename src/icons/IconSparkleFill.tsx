import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSparkleFill = React.forwardRef<SVGSVGElement, IconProps>(function IconSparkleFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M6.5799 2.4383C7.03597 1.07135 8.96954 1.07135 9.4256 2.4383L10.0653 4.35725C10.3141 5.10357 10.8999 5.68948 11.6463 5.9383L13.5653 6.57795C14.9317 7.03424 14.9317 8.96742 13.5653 9.42365L11.6463 10.0633C10.8999 10.3121 10.3141 10.8979 10.0653 11.6444L9.4256 13.5633C8.96956 14.9302 7.03613 14.93 6.5799 13.5633L5.94025 11.6444C5.69146 10.898 5.10545 10.3122 4.3592 10.0633L2.44025 9.42365C1.0733 8.96758 1.0733 7.03402 2.44025 6.57795L4.3592 5.9383C5.10549 5.68939 5.69145 5.10358 5.94025 4.35725L6.5799 2.4383Z" fill="currentColor" /></SvgRoot>;
});
export default IconSparkleFill;
