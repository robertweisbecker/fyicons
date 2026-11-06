import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconScissors = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconScissors(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="scissors"><path fill="currentColor" d="M3 3a2 2 0 0 1 2 2v1h.703a3.3 3.3 0 0 1 1.64-1.125l5.952-1.785a1.324 1.324 0 0 1 1.216 2.296L11.293 8l3.218 2.615a1.325 1.325 0 0 1-1.216 2.296l-5.951-1.786a3.26 3.26 0 0 1-1.912-1.532L5 9.81V11a2 2 0 0 1-4 0v-.093c0-1.056.787-1.947 1.834-2.078l2.23-.279A3.3 3.3 0 0 1 5.174 7H3a2 2 0 0 1 0-4m-.042 6.822A1.094 1.094 0 0 0 2 10.907V11a1 1 0 0 0 2 0V9.69zm10.625-5.775L7.631 5.833a2.264 2.264 0 0 0-.73 3.961c.219.168.466.294.73.373l5.952 1.786a.325.325 0 0 0 .297-.562l-3.695-3.003a.5.5 0 0 1 0-.775L13.88 4.61a.324.324 0 0 0-.297-.562M8 7.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M3 4a1 1 0 1 0 0 2h1V5a1 1 0 0 0-1-1" /></SvgRoot>;
});
export default IconScissors;
