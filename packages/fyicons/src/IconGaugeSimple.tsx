import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGaugeSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGaugeSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M4.276 2.073c.325-.204.725.045.725.429a.55.55 0 0 1-.258.459l-.076.05a6 6 0 0 0-2.552 6.16 6 6 0 0 0 1.643 3.072.502.502 0 0 1-.708.708A7.004 7.004 0 0 1 4.276 2.073m6.725.43c0-.384.399-.633.724-.429l.164.106a7.003 7.003 0 0 1 1.061 10.77.502.502 0 0 1-.708-.708 6.002 6.002 0 0 0-.909-9.23l-.075-.05a.55.55 0 0 1-.257-.46M8.003 1a.5.5 0 0 1 .5.5V6q-.002.033-.008.064A1.999 1.999 0 0 1 8.001 10a2 2 0 0 1-.492-3.937q-.005-.03-.006-.063V1.5a.5.5 0 0 1 .5-.5m-.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" /></SvgRoot>;
});
export default IconGaugeSimple;
