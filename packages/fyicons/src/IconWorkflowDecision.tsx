import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWorkflowDecision = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWorkflowDecision(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="workflow-decision"><path fill="currentColor" d="M6 10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1v-.52a1.5 1.5 0 0 1 1.5-1.5h.59a.5.5 0 0 0 .35-.144l.724-.715-2.09-2.091a.75.75 0 0 1 0-1.06L7.47 1.572l.056-.052a.75.75 0 0 1 1.004.052l2.397 2.396a.75.75 0 0 1 0 1.061L8.832 7.125l.725.724a.5.5 0 0 0 .358.147l.57-.006A1.5 1.5 0 0 1 12 9.49V10h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1v-.51a.5.5 0 0 0-.505-.5l-.57.006a1.5 1.5 0 0 1-1.075-.44l-.852-.851-.854.843a1.5 1.5 0 0 1-1.054.431H5.5a.5.5 0 0 0-.5.5V10zm-3 4h3v-3H3zm7 0h3v-3h-3zM5.957 4.5 8 6.543 10.043 4.5 8 2.457z" /></SvgRoot>;
});
export default IconWorkflowDecision;
