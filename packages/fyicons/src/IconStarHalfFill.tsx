import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStarHalfFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStarHalfFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="star-half-fill"><path fill="currentColor" d="M8 1.085c.39 0 .779.206.961.626l1.485 3.417 3.712.357.165.03c.79.2 1.072 1.233.43 1.802v.001L11.96 9.785l.809 3.642c.198.896-.769 1.596-1.559 1.132L8 12.666 4.79 14.56h-.001c-.791.465-1.754-.237-1.557-1.131l.806-3.64-2.792-2.47c-.687-.608-.319-1.743.594-1.832h.001l3.71-.357 1.487-3.42c.17-.392.522-.598.885-.623v-.002h.03L8 1.082zm0 10.42.253.15 3.465 2.042c.015.009.023.008.028.008a.1.1 0 0 0 .027-.01.1.1 0 0 0 .02-.023v-.028l-.873-3.93-.063-.287.22-.196 3.013-2.663.016-.022a.06.06 0 0 0-.018-.056l-.026-.009-4.005-.384-.293-.029-.118-.27-1.603-3.689q-.01-.02-.016-.022L8 2.08z" />{props.children}</SvgRoot>;
});
export default IconStarHalfFill;
