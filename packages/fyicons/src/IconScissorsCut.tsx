import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconScissorsCut = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconScissorsCut(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="scissors-cut"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M1.5 10.907c0-.804.598-1.482 1.396-1.581L5.5 9l-1 .5V11a1.5 1.5 0 0 1-3 0zM1.5 5A1.5 1.5 0 0 0 3 6.5h2.75H4.5V5a1.5 1.5 0 1 0-3 0m12 .5.83-.83c.556-.556-.007-1.483-.756-1.246L7.468 5.352a2.777 2.777 0 0 0 0 5.296l6.107 1.928c.748.237 1.31-.69.756-1.245L13.5 10.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m14.5 7.5-1 1-1-1-1 1-1-1-1 1-1-1-1 1" /></SvgRoot>;
});
export default IconScissorsCut;
