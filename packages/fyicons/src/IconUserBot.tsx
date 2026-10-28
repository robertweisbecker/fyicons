import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUserBot = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconUserBot(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="user-bot"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.987 14.5h8.026a1 1 0 0 0 .926-1.377l-.154-.378a2 2 0 0 0-1.852-1.245H5.067a2 2 0 0 0-1.852 1.245l-.154.378a1 1 0 0 0 .926 1.377M6 3.5h4A1.5 1.5 0 0 1 11.5 5v.755a.6.6 0 0 0 .173.418c.502.502.656 1.254.393 1.913l-.105.261A1.83 1.83 0 0 1 10.258 9.5H5.743c-.75 0-1.425-.457-1.703-1.153l-.105-.261a1.77 1.77 0 0 1 .393-1.913.6.6 0 0 0 .173-.418V5A1.5 1.5 0 0 1 6 3.5m.5 2v1m3-1v1M8 1.5v2" /><rect width={2} height={2} x={7} fill="currentColor" rx={1} /></SvgRoot>;
});
export default IconUserBot;
