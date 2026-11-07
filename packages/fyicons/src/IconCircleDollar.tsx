import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleDollar = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleDollar(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="circle-dollar"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13" /><path fill="currentColor" d="M8.048 4a.5.5 0 0 1 .5.5v.486c.353.092.698.257 1.008.487a.5.5 0 1 1-.594.803c-.415-.307-.886-.416-1.248-.362-.34.051-.572.236-.655.562-.056.223 0 .432.177.626.186.204.506.384.92.467.584.117.996.286 1.289.51.308.236.444.502.521.725a1.7 1.7 0 0 1-.149 1.368c-.24.414-.66.732-1.269.864v.464a.5.5 0 0 1-1 0v-.454a3.1 3.1 0 0 1-1.437-.772.5.5 0 0 1 .678-.734c.49.452.988.58 1.289.558.551-.042.776-.257.874-.426a.7.7 0 0 0 .07-.54.5.5 0 0 0-.185-.259c-.126-.097-.376-.223-.876-.323-.576-.115-1.104-.38-1.464-.775-.37-.405-.559-.952-.408-1.546.196-.767.79-1.195 1.46-1.301V4.5a.5.5 0 0 1 .5-.5" /></SvgRoot>;
});
export default IconCircleDollar;
