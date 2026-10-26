import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextHtml = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextHtml(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M12.053 7.276a.5.5 0 0 1 .894.448l-3 6a.5.5 0 0 1-.894-.448zM7.5 12a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm5.723-2.916a.5.5 0 0 1 .693.139l1 1.5a.5.5 0 0 1 0 .554l-1 1.5a.5.5 0 1 1-.832-.554L13.898 11l-.814-1.223a.5.5 0 0 1 .139-.693M8.5 9a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1zm1-3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM2.084 2.223a.5.5 0 0 1 .832.554L2.101 4l.815 1.223a.5.5 0 0 1-.832.554l-1-1.5a.5.5 0 0 1 0-.554zM13.5 3a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconTextHtml;
