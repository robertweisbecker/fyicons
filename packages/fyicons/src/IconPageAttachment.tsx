import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPageAttachment = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPageAttachment(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="page-attachment"><path stroke="currentColor" d="M3.5 4A1.5 1.5 0 0 1 5 2.5h6A1.5 1.5 0 0 1 12.5 4v9a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 13z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.75 5.462v1.682a1.125 1.125 0 0 1-2.25 0V2a1.5 1.5 0 1 1 3 0v.5" /></SvgRoot>;
});
export default IconPageAttachment;
