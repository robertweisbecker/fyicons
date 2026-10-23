import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPencilRuler = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPencilRuler(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M2.79038 11.7686L2.25 13.75L4.23138 13.2096C4.73506 13.0723 5.19418 12.8058 5.56335 12.4367L13 5C13.5523 4.44772 13.5523 3.55228 13 3C12.4477 2.44772 11.5523 2.44771 11 3L3.56335 10.4367C3.19418 10.8058 2.92774 11.2649 2.79038 11.7686Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.2071 13.7929L13.7929 12.2071C14.1834 11.8166 14.1834 11.1834 13.7929 10.7929L10.5 7.5L7.5 10.5L10.7929 13.7929C11.1834 14.1834 11.8166 14.1834 12.2071 13.7929Z" stroke="currentColor" strokeLinecap="round" /><path d="M3.79289 2.20711L2.20711 3.79289C1.81658 4.18342 1.81658 4.81658 2.20711 5.20711L5.5 8.5L8.5 5.5L5.20711 2.20711C4.81658 1.81658 4.18342 1.81658 3.79289 2.20711Z" stroke="currentColor" strokeLinecap="round" /><path d="M12.5 9.5L11.5 10.5" stroke="currentColor" strokeLinecap="round" /><path d="M6.5 3.5L5.5 4.5" stroke="currentColor" strokeLinecap="round" /><path d="M12.5 5.5L10.5 3.5" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconPencilRuler;
