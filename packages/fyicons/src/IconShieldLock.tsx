import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconShieldLock = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconShieldLock(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="shield-lock"><path fill="currentColor" d="M7.324 1.243a2 2 0 0 1 1.351 0l4.262 1.53a1.5 1.5 0 0 1 .99 1.508l-.241 3.776a6.5 6.5 0 0 1-2.5 4.721l-2.573 1.997-.142.092c-.294.157-.65.157-.943 0l-.142-.092-2.572-1.997a6.5 6.5 0 0 1-2.47-4.374l-.031-.347-.241-3.776a1.5 1.5 0 0 1 .875-1.46l.115-.048zm1.013.941a1 1 0 0 0-.675 0L3.4 3.714a.5.5 0 0 0-.33.503l.241 3.777a5.5 5.5 0 0 0 2.116 3.994L8 13.985l2.572-1.997a5.5 5.5 0 0 0 2.116-3.994l.241-3.777a.5.5 0 0 0-.33-.502zM8 4c1.103 0 2 .897 2 2v1.013c.193.013.331.04.449.1a1 1 0 0 1 .437.436c.11.213.11.494.11 1.053v.801c0 .56 0 .84-.11 1.054a1 1 0 0 1-.437.436c-.214.11-.494.11-1.054.11h-2.8c-.56 0-.84 0-1.053-.11a1 1 0 0 1-.438-.436c-.109-.214-.108-.495-.108-1.054v-.8c0-.56 0-.84.108-1.054.096-.188.25-.341.438-.437.119-.06.26-.087.458-.099V6c0-1.104.896-2 2-2.001m0 4.002a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M8 5a1 1 0 0 0-1 1v1.002h2V6c0-.552-.449-1-1-1" />{props.children}</SvgRoot>;
});
export default IconShieldLock;
