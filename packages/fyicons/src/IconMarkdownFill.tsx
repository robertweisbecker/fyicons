import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMarkdownFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMarkdownFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M13.25 3c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 13.25 13H2.75A1.75 1.75 0 0 1 1 11.25v-6.5C1 3.784 1.784 3 2.75 3zm-2.002 2.501a.5.5 0 0 0-.5.5v2.5H9.649a.25.25 0 0 0-.167.436l1.85 1.664a.25.25 0 0 0 .333 0l1.849-1.664a.25.25 0 0 0-.167-.436H12.25v-2.5a.5.5 0 0 0-.5-.5zm-3.578.028a.5.5 0 0 0-.555.152L5.5 7.625 3.885 5.681A.501.501 0 0 0 3 6v4a.5.5 0 0 0 1 0V7.384l1.115 1.344a.5.5 0 0 0 .77 0L7 7.384V10a.5.5 0 0 0 1 0V6c0-.21-.132-.4-.33-.47" /></SvgRoot>;
});
export default IconMarkdownFill;
