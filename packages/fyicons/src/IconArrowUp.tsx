import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowUp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowUp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.64645 1.64645C7.84171 1.45118 8.15822 1.45118 8.35348 1.64645L12.8535 6.14645C13.0487 6.34171 13.0487 6.65823 12.8535 6.85348C12.6582 7.04873 12.3417 7.0487 12.1464 6.85348L8.49996 3.20699V13.5C8.49994 13.7761 8.27607 13.9999 7.99996 14C7.72383 14 7.49998 13.7761 7.49996 13.5V3.20699L3.85348 6.85348C3.65823 7.04873 3.34171 7.0487 3.14645 6.85348C2.95118 6.65822 2.95118 6.34171 3.14645 6.14645L7.64645 1.64645Z" fill="currentColor" /></SvgRoot>;
});
export default IconArrowUp;
