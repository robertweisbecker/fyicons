import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeading4 = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeading4(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="heading-4"><path fill="currentColor" d="M12.642 9.123c.466-.408 1.238-.088 1.238.57v3.187h.62a.5.5 0 0 1 0 1h-.62v.62a.5.5 0 0 1-1 0v-.62h-2.598a.75.75 0 0 1-.578-1.229l2.849-3.436zm-1.828 3.757h2.066v-2.494zM5.5 2a.5.5 0 0 1 0 1H5v3h5V3h-.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1H11v5.5a.5.5 0 0 1-1 0V7H5v4h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H4V3h-.5a.5.5 0 0 1 0-1z" />{props.children}</SvgRoot>;
});
export default IconHeading4;
