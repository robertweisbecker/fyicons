import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconScissorsCut = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconScissorsCut(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="scissors-cut"><path fill="currentColor" d="M13.424 2.947c1.247-.394 2.185 1.15 1.26 2.076l-.83.83a.5.5 0 0 1-.707-.706l.83-.832c.185-.185-.003-.493-.252-.415L7.618 5.83a2.277 2.277 0 0 0 0 4.341l6.107 1.929c.249.078.437-.23.252-.415l-.83-.831a.5.5 0 0 1 .707-.707l.83.83c.925.926-.013 2.47-1.26 2.076l-6.107-1.928a3.3 3.3 0 0 1-1.01-.528 3.3 3.3 0 0 1-.87-1.007L5 9.809V11a2 2 0 0 1-4 0v-.094c0-1.055.787-1.946 1.834-2.077l2.24-.28A3.3 3.3 0 0 1 5.184 7H3a2 2 0 1 1 2-2v1h.708a3.3 3.3 0 0 1 1.61-1.125zM2.958 9.821A1.094 1.094 0 0 0 2 10.906V11a1 1 0 0 0 2 0V9.69zM3 4.001a1 1 0 0 0 0 2h1V5a1 1 0 0 0-1-1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m14.5 7.5-1 1-1-1-1 1-1-1-1 1-1-1-1 1" /></SvgRoot>;
});
export default IconScissorsCut;
