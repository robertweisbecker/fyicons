import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconThoughtBubble = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconThoughtBubble(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="thought-bubble"><path fill="currentColor" d="M2.5 11.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5m0 1a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M8.5 1c.974 0 1.854.4 2.487 1.04A3.5 3.5 0 0 1 15 5.5a3.48 3.48 0 0 1-1.066 2.51q.065.361.066.74a4.25 4.25 0 0 1-7.248 3.01A2.2 2.2 0 0 1 5.75 12a2.25 2.25 0 0 1-2.167-2.858 3 3 0 0 1 1.563-5.638A3.5 3.5 0 0 1 8.5 1m0 1a2.5 2.5 0 0 0-2.474 2.13.5.5 0 0 1-.6.416 2 2 0 0 0-1.04 3.857.5.5 0 0 1 .28.725 1.25 1.25 0 0 0 1.862 1.598.5.5 0 0 1 .7.075 3.25 3.25 0 0 0 5.673-2.848.5.5 0 0 1 .17-.51 2.5 2.5 0 0 0-2.15-4.373.5.5 0 0 1-.5-.168A2.5 2.5 0 0 0 8.5 2" /></SvgRoot>;
});
export default IconThoughtBubble;
