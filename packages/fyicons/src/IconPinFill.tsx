import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPinFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPinFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="m6 11-2.414 2.414A2 2 0 0 1 2.172 14H2v-.172a2 2 0 0 1 .586-1.414L5 10zm2.598-8.505a2 2 0 0 1 3.162-.442l2.187 2.187a2 2 0 0 1-.442 3.162l-2.573 1.43-.733 2.933a1 1 0 0 1-1.677.464L3.771 7.478A1 1 0 0 1 4.235 5.8l2.932-.734z" /></SvgRoot>;
});
export default IconPinFill;
