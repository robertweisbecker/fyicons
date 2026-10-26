import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGas = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGas(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" d="M3.5 4.9c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.656c.32-.163.74-.163 1.581-.163h2.2c.84 0 1.26 0 1.581.163a1.5 1.5 0 0 1 .656.656c.163.32.163.74.163 1.581v9.6h-7z" /><rect width={4.5} height={3.5} x={4.75} y={3.75} fill="currentColor" rx={0.5} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10.5 6.5 1.707 1.707a1 1 0 0 1 .293.707V11.5a1 1 0 1 0 2 0v-6" /><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.5 4.5v2l-1-1z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.5 4.5 13 3m-1.5 11.5h-9" /></SvgRoot>;
});
export default IconGas;
