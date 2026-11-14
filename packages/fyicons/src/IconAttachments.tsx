import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAttachments = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAttachments(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="attachments"><path stroke="currentColor" d="M2.612 6.333A1.5 1.5 0 0 1 3.83 4.606l5.91-1.041a1.5 1.5 0 0 1 1.739 1.227l1.16 6.875a1.5 1.5 0 0 1-1.218 1.727l-5.909 1.041a1.5 1.5 0 0 1-1.74-1.227z" /><path stroke="currentColor" strokeLinecap="round" d="m11.5 4.5 2.004.917a1.5 1.5 0 0 1 .726 2.018L12.5 11" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.5 6.462v1.807a1 1 0 0 1-2 0V3a1.5 1.5 0 1 1 3 0v.5" />{props.children}</SvgRoot>;
});
export default IconAttachments;
