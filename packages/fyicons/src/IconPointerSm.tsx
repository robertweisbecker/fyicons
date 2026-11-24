import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPointerSm = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPointerSm(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="pointer-sm"><path fill="currentColor" d="M8.03 11.853c-.578 1.252-2.399 1.127-2.799-.194L3.233 5.057c-.347-1.147.724-2.217 1.87-1.87l6.602 1.999c1.32.4 1.446 2.22.194 2.798L9.585 9.05c-.216.1-.39.274-.49.49zm-1.842-.483a.5.5 0 0 0 .933.064L8.188 9.12c.199-.432.546-.779.978-.978l2.314-1.067a.5.5 0 0 0-.065-.932l-6.602-2a.5.5 0 0 0-.624.624z" />{props.children}</SvgRoot>;
});
export default IconPointerSm;
