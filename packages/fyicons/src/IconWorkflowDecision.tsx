import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWorkflowDecision = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWorkflowDecision(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="workflow-decision"><path fill="currentColor" d="M6 10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1v-.515a1.5 1.5 0 0 1 1.509-1.5l1.488.009a.5.5 0 0 0 .503-.5v-.04l-.03-.027L5.073 5.03a.75.75 0 0 1 0-1.06L7.47 1.572l.056-.052a.75.75 0 0 1 1.004.052l2.397 2.396a.75.75 0 0 1 0 1.061L8.53 7.427l-.03.027v.025a.5.5 0 0 0 .5.5h1.5a1.5 1.5 0 0 1 1.5 1.5V10h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1v-.52a.5.5 0 0 0-.5-.5H9c-.38 0-.728-.143-.992-.377a1.5 1.5 0 0 1-1.017.392l-1.488-.009a.5.5 0 0 0-.503.5V10zm-3 4h3v-3H3zm7 0h3v-3h-3zM5.957 4.5 8 6.543 10.043 4.5 8 2.457z" />{props.children}</SvgRoot>;
});
export default IconWorkflowDecision;
