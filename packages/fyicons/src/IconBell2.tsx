import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBell2 = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBell2(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a1.75 1.75 0 0 1 1.644 2.346A4.1 4.1 0 0 1 12.1 7.1v1.89c0 .224.049.445.142.649l.728 1.592.06.156A1.25 1.25 0 0 1 11.833 13H10l-.011.204a2 2 0 0 1-3.98 0L6 13H4.17a1.25 1.25 0 0 1-1.138-1.77l.728-1.591.062-.156q.08-.239.08-.493V7.1a4.1 4.1 0 0 1 2.455-3.755A1.75 1.75 0 0 1 8.001 1M7 13a1 1 0 1 0 2 0zM8 2a.75.75 0 0 0-.607 1.188c.228.314.118.816-.311.95A3.1 3.1 0 0 0 4.9 7.1v1.89c0 .275-.044.549-.13.809l-.102.256-.728 1.592a.25.25 0 0 0 .228.353h7.664a.25.25 0 0 0 .247-.291l-.02-.062-.728-1.592A2.6 2.6 0 0 1 11.1 8.99V7.1c0-1.392-.918-2.57-2.181-2.962-.43-.134-.54-.637-.312-.95A.75.75 0 0 0 8.001 2" /></SvgRoot>;
});
export default IconBell2;
