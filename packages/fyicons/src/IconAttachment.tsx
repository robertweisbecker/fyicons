import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAttachment = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAttachment(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="attachment"><path stroke="currentColor" d="M3.5 5A1.5 1.5 0 0 1 5 3.5h6A1.5 1.5 0 0 1 12.5 5v8a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 13z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.5 6.462v1.807a1 1 0 0 1-2 0V3.5a2 2 0 1 1 4 0" /></SvgRoot>;
});
export default IconAttachment;
