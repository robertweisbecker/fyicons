import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconScissorsCut = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconScissorsCut(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="scissors-cut"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m5.5 9-2.604.326c-.798.1-1.396.777-1.396 1.58V11a1.5 1.5 0 0 0 3 0V9.5zm0-2.25-2.55-.16A1.547 1.547 0 0 1 1.5 5.048V5a1.5 1.5 0 1 1 3 0v1.25zm8-1.25.83-.83c.556-.556-.007-1.483-.756-1.246L7.468 5.352a2.777 2.777 0 0 0 0 5.296l6.107 1.928c.748.237 1.31-.69.756-1.245L13.5 10.5" /><rect width={1} height={1} x={7} y={7.5} fill="currentColor" rx={0.5} /><rect width={1} height={1} x={9} y={7.5} fill="currentColor" rx={0.5} /><rect width={1} height={1} x={11} y={7.5} fill="currentColor" rx={0.5} /><rect width={1} height={1} x={13} y={7.5} fill="currentColor" rx={0.5} /><rect width={1} height={1} x={15} y={7.5} fill="currentColor" rx={0.5} />{props.children}</SvgRoot>;
});
export default IconScissorsCut;
