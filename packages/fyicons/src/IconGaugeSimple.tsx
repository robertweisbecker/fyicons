import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGaugeSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGaugeSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="gauge-simple"><path fill="currentColor" d="M5.001 2.804A6 6 0 0 0 2.115 9.17a6 6 0 0 0 1.643 3.071.501.501 0 0 1-.708.708A7.003 7.003 0 0 1 4.11 2.18q.429-.286.89-.504zm6-1.127q.46.218.888.503a7.002 7.002 0 0 1 1.061 10.77.501.501 0 0 1-.708-.708 6 6 0 0 0 1.301-6.538 6 6 0 0 0-2.542-2.9zM8.003 0a.5.5 0 0 1 .5.5V6q-.002.033-.008.063a2 2 0 1 1-.986 0q-.005-.03-.006-.063V.5a.5.5 0 0 1 .5-.5M8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />{props.children}</SvgRoot>;
});
export default IconGaugeSimple;
