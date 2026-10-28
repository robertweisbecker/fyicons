import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCloudCheck = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCloudCheck(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cloud-check"><path fill="currentColor" d="M6.5 3a3.5 3.5 0 0 1 2.447.998.12.12 0 0 0 .099.033Q9.269 4 9.5 4A3.5 3.5 0 0 1 13 7.5q-.002.335-.065.65A2.999 2.999 0 0 1 12 14H4.487l-.154-.004H4.32v-.001A3.5 3.5 0 0 1 1 10.5c0-1.433.862-2.66 2.093-3.202A3.5 3.5 0 0 1 6.5 3m0 1a2.5 2.5 0 0 0-2.322 3.422.5.5 0 0 1-.334.667 2.499 2.499 0 0 0 .518 4.907l.15.003H12a2 2 0 0 0 .255-3.982.502.502 0 0 1-.407-.667A2.5 2.5 0 0 0 12 7.5a2.5 2.5 0 0 0-2.821-2.48 1.12 1.12 0 0 1-.931-.309A2.5 2.5 0 0 0 6.5 4m2.584 3.223a.5.5 0 0 1 .832.555l-2 3a.502.502 0 0 1-.77.076l-1.5-1.5a.5.5 0 0 1 .708-.707l1.068 1.068z" /></SvgRoot>;
});
export default IconCloudCheck;
