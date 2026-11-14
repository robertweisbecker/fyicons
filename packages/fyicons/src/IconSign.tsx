import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSign = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSign(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="sign"><path stroke="currentColor" strokeLinejoin="round" d="M2.5 4.5a1 1 0 0 1 1-1h7.609a1 1 0 0 1 .678.265l2.565 2.368a.5.5 0 0 1 0 .734l-2.565 2.368a1 1 0 0 1-.678.265H3.5a1 1 0 0 1-1-1z" /><path stroke="currentColor" strokeLinecap="round" d="M7.5 2.5v1m0 6v4m2 0h-4" />{props.children}</SvgRoot>;
});
export default IconSign;
