import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookmarkCheckFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookmarkCheckFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="bookmark-check-fill"><path fill="currentColor" d="M11 .965a2 2 0 0 1 2 2v10.552c0 1.186-1.402 1.815-2.288 1.027L8 12.134l-2.712 2.41C4.401 15.332 3 14.703 3 13.517V2.965a2 2 0 0 1 2-2zm-.599 3.118a.5.5 0 0 0-.693.14L7.437 7.652 6.266 6.188a.5.5 0 0 0-.782.625l1.601 2a.5.5 0 0 0 .807-.037l2.65-4a.5.5 0 0 0-.14-.693" />{props.children}</SvgRoot>;
});
export default IconBookmarkCheckFill;
