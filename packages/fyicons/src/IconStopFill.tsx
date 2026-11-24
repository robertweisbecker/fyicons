import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStopFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStopFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="stop-fill"><path fill="currentColor" d="M3 4.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C3.76 3 4.04 3 4.6 3h6.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C13 3.76 13 4.04 13 4.6v6.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C12.24 13 11.96 13 11.4 13H4.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C3 12.24 3 11.96 3 11.4z" />{props.children}</SvgRoot>;
});
export default IconStopFill;
