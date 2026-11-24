import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBell2 = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBell2(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="bell-2"><path fill="currentColor" d="M8 1a1.75 1.75 0 0 1 1.644 2.346A4.1 4.1 0 0 1 12.1 7.1v2.228l.869 1.902A1.25 1.25 0 0 1 11.832 13H10a2 2 0 1 1-4 0H4.167a1.25 1.25 0 0 1-1.137-1.77l.87-1.902V7.1a4.1 4.1 0 0 1 2.455-3.755A1.75 1.75 0 0 1 8 1M7 13a1 1 0 0 0 2 0zM8 2a.75.75 0 0 0-.607 1.188c.227.314.118.816-.312.95A3.1 3.1 0 0 0 4.9 7.1v2.317a.6.6 0 0 1-.054.249l-.905 1.98a.25.25 0 0 0 .227.354h7.665l.064-.009a.25.25 0 0 0 .163-.344l-.905-1.981a.6.6 0 0 1-.054-.249V7.1c0-1.392-.918-2.57-2.182-2.962-.43-.134-.54-.637-.312-.95a.75.75 0 0 0-.53-1.184z" />{props.children}</SvgRoot>;
});
export default IconBell2;
