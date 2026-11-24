import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPenTool = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPenTool(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="pen-tool"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m8.5 3.5 4 4h.5A1.5 1.5 0 0 0 14.5 6L10 1.5A1.5 1.5 0 0 0 8.5 3zm0 0S5.444 3.5 4 6c-1.324 2.294-1.5 7.5-1.5 7.5M3 13l3.75-3.75" /><path fill="currentColor" d="M7.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 13.5s5.206-.176 7.5-1.5c2.5-1.444 2.5-4.5 2.5-4.5" />{props.children}</SvgRoot>;
});
export default IconPenTool;
