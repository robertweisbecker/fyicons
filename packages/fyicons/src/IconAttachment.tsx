import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAttachment = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAttachment(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="attachment"><path stroke="currentColor" d="M12.5 6v7a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 13V6A1.5 1.5 0 0 1 5 4.5h6A1.5 1.5 0 0 1 12.5 6Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 7.462V9a1.5 1.5 0 1 1-3 0V3a1.5 1.5 0 1 1 3 0v1.5" />{props.children}</SvgRoot>;
});
export default IconAttachment;
