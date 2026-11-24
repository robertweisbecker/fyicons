import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCloudX = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCloudX(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cloud-x"><path fill="currentColor" d="M6.5 2a3.5 3.5 0 0 1 2.448.998.12.12 0 0 0 .098.033A3.5 3.5 0 0 1 13 6.5q-.001.335-.064.651A3 3 0 0 1 12.001 13H4.488l-.155-.004h-.012v-.001A3.5 3.5 0 0 1 1 9.5c0-1.433.861-2.66 2.092-3.201A3.5 3.5 0 0 1 6.5 2m0 1a2.5 2.5 0 0 0-2.322 3.423.5.5 0 0 1-.334.667 2.499 2.499 0 0 0 .519 4.906l.15.004h7.488a2 2 0 0 0 .255-3.982.502.502 0 0 1-.408-.668c.097-.268.152-.554.152-.85a2.5 2.5 0 0 0-2.82-2.48 1.12 1.12 0 0 1-.931-.308A2.5 2.5 0 0 0 6.5 3m2.647 3.146a.5.5 0 0 1 .707.707L8.708 8l1.146 1.146a.5.5 0 0 1-.707.707L8 8.707 6.854 9.853a.5.5 0 1 1-.707-.707L7.293 8 6.147 6.853a.5.5 0 1 1 .707-.707L8 7.293z" />{props.children}</SvgRoot>;
});
export default IconCloudX;
