import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFabric = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFabric(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="fabric"><path fill="currentColor" d="M6.5 9a.5.5 0 0 0 0 1zm6.223-5.806-.476.153zm1.607 5-.476.153zM13.378 9.5V9H6.5v1h6.878zm-2.878-7V2H7.071v1H10.5zm1.271 0V2H10.5v1h1.271zm2.56 5.694.475-.153-1.607-5-.476.153-.476.153 1.607 5zM11.77 2.5V3a.5.5 0 0 1 .476.347l.476-.153.476-.153A1.5 1.5 0 0 0 11.771 2zm1.607 7v.5a1.5 1.5 0 0 0 1.428-1.959l-.476.153-.476.153a.5.5 0 0 1-.476.653z" /><path stroke="currentColor" d="M6.5 13.5h-3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h1" /><path stroke="currentColor" strokeLinecap="round" d="M11.5 11.5h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2H7" /><path stroke="currentColor" d="M5.5 13.5h6.286c.947 0 1.714-.768 1.714-1.714V9.5" /></SvgRoot>;
});
export default IconFabric;
