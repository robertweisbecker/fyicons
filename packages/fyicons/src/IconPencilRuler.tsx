import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPencilRuler = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPencilRuler(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="pencil-ruler"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m2.79 11.769-.54 1.981 1.981-.54a3 3 0 0 0 1.332-.773L13 5a1.414 1.414 0 1 0-2-2l-7.437 7.437a3 3 0 0 0-.773 1.332" /><path stroke="currentColor" strokeLinecap="round" d="m12.207 13.793 1.586-1.586a1 1 0 0 0 0-1.414L10.5 7.5l-3 3 3.293 3.293a1 1 0 0 0 1.414 0ZM3.793 2.207 2.207 3.793a1 1 0 0 0 0 1.414L5.5 8.5l3-3-3.293-3.293a1 1 0 0 0-1.414 0ZM12.5 9.5l-1 1m-5-7-1 1m7 1-2-2" /></SvgRoot>;
});
export default IconPencilRuler;
