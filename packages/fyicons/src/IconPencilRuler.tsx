import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPencilRuler = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPencilRuler(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="pencil-ruler"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.04 11.519 2.5 13.5l1.981-.54a3 3 0 0 0 1.332-.773L13 5a1.414 1.414 0 1 0-2-2l-7.187 7.187a3 3 0 0 0-.773 1.332" /><path stroke="currentColor" strokeLinecap="round" d="m11.707 13.293 1.586-1.586a1 1 0 0 0 0-1.414L10.5 7.5l-3 3 2.793 2.793a1 1 0 0 0 1.414 0ZM4.293 2.707 2.707 4.293a1 1 0 0 0 0 1.414L5.5 8.5l3-3-2.793-2.793a1 1 0 0 0-1.414 0Z" /><path stroke="currentColor" strokeLinecap="square" d="m12 9-1.25 1.25M7 4 5.75 5.25" /><path stroke="currentColor" strokeLinecap="round" d="m12.5 5.5-2-2" />{props.children}</SvgRoot>;
});
export default IconPencilRuler;
