import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWorkflowMulti = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWorkflowMulti(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="workflow-multi"><path fill="currentColor" d="M3.5 1A2.5 2.5 0 0 1 4 5.95v4.55c0 .231.054.449.147.645l3.887-3.887A1 1 0 0 1 8 7V4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H9a1 1 0 0 1-.259-.035l-3.887 3.887c.196.093.414.148.646.148h3.917l1.226-2.043a1 1 0 0 1 1.714 0l2.118 3.528A1 1 0 0 1 13.617 15H9.383a1 1 0 0 1-.858-1.515L8.816 13H5.5A2.5 2.5 0 0 1 3 10.5V5.95A2.5 2.5 0 0 1 3.5 1m5.883 13h4.234L11.5 10.472zM9 7h3V4H9zM3.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" /></SvgRoot>;
});
export default IconWorkflowMulti;
