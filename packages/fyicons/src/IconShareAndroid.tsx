import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShareAndroid = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShareAndroid(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><circle cx={4} cy={8} r={1.5} stroke="currentColor" /><circle cx={10} cy={4} r={1.5} stroke="currentColor" /><circle cx={10} cy={12} r={1.5} stroke="currentColor" /><path d="M8.77735 5.41603C9.00711 5.26285 9.0692 4.95241 8.91603 4.72265C8.76285 4.49289 8.45241 4.4308 8.22265 4.58397L8.5 5L8.77735 5.41603ZM8.5 5L8.22265 4.58397L5.22265 6.58397L5.5 7L5.77735 7.41603L8.77735 5.41603L8.5 5Z" fill="currentColor" /><path d="M8.77735 10.584C9.00711 10.7372 9.0692 11.0476 8.91603 11.2774C8.76285 11.5071 8.45241 11.5692 8.22265 11.416L8.5 11L8.77735 10.584ZM8.5 11L8.22265 11.416L5.22265 9.41603L5.5 9L5.77735 8.58397L8.77735 10.584L8.5 11Z" fill="currentColor" /></SvgRoot>;
});
export default IconShareAndroid;
