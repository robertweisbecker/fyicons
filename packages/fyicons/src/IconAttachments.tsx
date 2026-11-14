import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAttachments = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAttachments(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="attachments"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.5 5.462v1.307a1.5 1.5 0 1 1-3 0V2a1.5 1.5 0 1 1 3 0v.25" /><path stroke="currentColor" d="M2.292 6.763a1.5 1.5 0 0 1 .77-1.995l5.436-2.354a1.5 1.5 0 0 1 1.977.79l2.804 6.619a1.5 1.5 0 0 1-.78 1.958L7.235 14.09a1.5 1.5 0 0 1-1.968-.755z" /><path fill="currentColor" d="M7.452 13.858a.5.5 0 0 0-.296.955l.148-.478zm3.167 1.504.148-.477-3.315-1.027-.148.477-.148.478 3.315 1.027zm3.689-7.749-.483-.129-1.796 6.704.482.13.483.13 1.797-6.705zm-1.06-1.837.129-.483-2.174-.582-.13.483-.129.483 2.174.582zm1.06 1.837.483.13a2 2 0 0 0-1.414-2.45l-.13.483-.13.483a1 1 0 0 1 .708 1.225zm-3.69 7.75-.147.477a2 2 0 0 0 2.523-1.393l-.482-.13-.484-.129a1 1 0 0 1-1.261.697z" /></SvgRoot>;
});
export default IconAttachments;
