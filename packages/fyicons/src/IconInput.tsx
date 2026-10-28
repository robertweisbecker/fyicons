import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconInput = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconInput(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="input"><path fill="currentColor" d="M6.64 2a2.1 2.1 0 0 1 1.035.27 1.88 1.88 0 0 1 .825.948 1.9 1.9 0 0 1 1.195-1.11A2.1 2.1 0 0 1 10.359 2h.141a.5.5 0 0 1 0 1h-.14a1.1 1.1 0 0 0-.545.142 1.5 1.5 0 0 0-.195.132 1.3 1.3 0 0 0-.481.835C9.072 4.765 9 5.42 9 6.076v4.537c0 .426.046.852.099 1.277.056.36.27.65.52.838q.093.071.196.13a1.1 1.1 0 0 0 .544.142h.141a.5.5 0 0 1 0 1h-.14a2.1 2.1 0 0 1-1.035-.27 1.84 1.84 0 0 1-.825-.998 1.84 1.84 0 0 1-1.195 1.16c-.214.071-.44.108-.664.108H6.5a.5.5 0 0 1 0-1h.14a1.1 1.1 0 0 0 .545-.143q.102-.056.197-.129a1.32 1.32 0 0 0 .52-.838c.052-.425.098-.851.098-1.277V6.076c0-.656-.072-1.311-.139-1.967a1.3 1.3 0 0 0-.481-.835 1.5 1.5 0 0 0-.195-.132A1.1 1.1 0 0 0 6.64 3H6.5a.5.5 0 0 1 0-1zM6 5H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4v1H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4zm8-1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-3v-1h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-3V4z" /></SvgRoot>;
});
export default IconInput;
