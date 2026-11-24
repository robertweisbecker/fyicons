import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextBoldInactive = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextBoldInactive(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="text-bold-inactive"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.5 7.6v5.65c0 .138.112.25.25.25h3.547c1.897 0 3.267-1.272 3.268-3 .002-1.395-1.242-2.9-3.518-2.9M4.5 7.6V2.75a.25.25 0 0 1 .25-.25h3.547c1.634 0 2.668 1.23 2.66 2.5-.01 1.353-1.17 2.6-2.91 2.6M4.5 7.6h3.547" />{props.children}</SvgRoot>;
});
export default IconTextBoldInactive;
