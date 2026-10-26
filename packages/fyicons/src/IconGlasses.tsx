import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGlasses = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGlasses(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><rect width={5} height={5} x={1.5} y={7.5} stroke="currentColor" rx={2.5} /><rect width={5} height={5} x={9.5} y={7.5} stroke="currentColor" rx={2.5} /><path stroke="currentColor" strokeLinecap="round" d="M14.5 9.5h1m-15 0h1m10.5 3a2.5 2.5 0 0 1-2.348-1.645l-.118-.324a1.48 1.48 0 0 0-1.1-.944 2.2 2.2 0 0 0-.869 0c-.506.101-.923.46-1.1.944l-.117.324A2.5 2.5 0 0 1 4 12.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m15.5 9.5-1.544-4.632A2 2 0 0 0 12.059 3.5H11.5m-11 6 1.544-4.632A2 2 0 0 1 3.942 3.5H4.5" /></SvgRoot>;
});
export default IconGlasses;
