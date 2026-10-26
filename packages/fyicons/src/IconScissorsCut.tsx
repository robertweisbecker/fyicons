import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconScissorsCut = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconScissorsCut(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M13.246 2.89a1.333 1.333 0 0 1 1.363 2.208l-.755.756a.5.5 0 0 1-.707-.707l.755-.756a.332.332 0 0 0-.34-.55L7.398 5.894q-.195.064-.376.165c-1.521.846-1.521 3.035 0 3.88q.18.1.376.166l6.166 2.054a.333.333 0 0 0 .34-.55l-.757-.756a.5.5 0 0 1 .707-.707l.756.756a1.334 1.334 0 0 1-1.363 2.207l-6.164-2.055a3 3 0 0 1-.546-.24 3.2 3.2 0 0 1-1.209-1.17L5 9.809V11a2 2 0 0 1-4 0v-.094c0-1.055.787-1.946 1.834-2.077l2.097-.262A3.3 3.3 0 0 1 5.037 7H3a2 2 0 1 1 2-2v1h.572a3.2 3.2 0 0 1 1.51-1.054zM2.958 9.823A1.094 1.094 0 0 0 2 10.907V11a1 1 0 0 0 2 0V9.69zM3 4a1 1 0 0 0 0 2h1V5a1 1 0 0 0-1-1" /><rect width={1.5} height={1.5} x={7.25} y={7.25} fill="currentColor" rx={0.75} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m9.75 8 .599-.25.901.75 1-1 1 1 .75-.75.75.25" /></SvgRoot>;
});
export default IconScissorsCut;
