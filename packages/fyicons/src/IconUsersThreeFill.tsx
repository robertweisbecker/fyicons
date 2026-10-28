import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUsersThreeFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconUsersThreeFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="users-three-fill"><path fill="currentColor" d="M8 9c.558 0 1.11.104 1.626.305.516.2.985.495 1.38.867.277.261.514.558.704.88l.019.032q.109.188.197.386a1.1 1.1 0 0 1 .086.383c.017.634-.61 1.147-1.338 1.147H5.325c-.67 0-1.256-.436-1.33-1H3.99a1 1 0 0 1 0-.229v-.007l.007-.048q.009-.048.022-.098l.053-.148q.112-.255.26-.49l.036-.058a4 4 0 0 1 .114-.165l.038-.054v.001q.213-.285.474-.532a4.3 4.3 0 0 1 1.38-.867A4.5 4.5 0 0 1 8 9m-5 1a2 2 0 0 1 .701.129 5 5 0 0 0-.544.937c-.14.317-.189.634-.17.934H1.785c-.433 0-.798-.365-.632-.766A2 2 0 0 1 2.999 10m9.998 0a2 2 0 0 1 1.848 1.234c.166.401-.2.766-.634.766H13.01c.02-.3-.03-.617-.17-.934a5 5 0 0 0-.545-.937c.225-.084.463-.129.703-.129M3 6.75a1.25 1.25 0 1 1-.001 2.502A1.25 1.25 0 0 1 3 6.75m10 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M7.748 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5" /></SvgRoot>;
});
export default IconUsersThreeFill;
