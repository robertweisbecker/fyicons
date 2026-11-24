import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleDollar = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleDollar(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="circle-dollar"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" /><path fill="currentColor" d="M8.049 4a.5.5 0 0 1 .5.5v.487c.352.092.698.256 1.008.486a.5.5 0 0 1-.594.803c-.416-.307-.886-.416-1.248-.362-.342.051-.573.236-.655.562q-.087.335.176.626c.187.204.507.384.921.467.583.117.996.286 1.288.51.309.236.444.503.522.725.128.367.12.9-.15 1.368-.24.414-.659.732-1.268.864v.464a.5.5 0 0 1-1 0v-.454a3.1 3.1 0 0 1-1.438-.772.5.5 0 1 1 .678-.734c.49.452.989.58 1.29.558.55-.043.775-.257.873-.426a.7.7 0 0 0 .07-.54.5.5 0 0 0-.184-.259c-.127-.097-.377-.223-.877-.323-.576-.115-1.104-.38-1.464-.775-.37-.405-.558-.952-.407-1.546.195-.767.79-1.195 1.459-1.301V4.5a.5.5 0 0 1 .5-.5" />{props.children}</SvgRoot>;
});
export default IconCircleDollar;
