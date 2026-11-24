import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPointerFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPointerFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="pointer-fill"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.926 5.362 3.354 2.417a.75.75 0 0 0-.937.937l2.945 9.572c.21.681 1.161.714 1.417.05L8.5 8.5l4.475-1.721c.665-.256.632-1.208-.049-1.417" />{props.children}</SvgRoot>;
});
export default IconPointerFill;
