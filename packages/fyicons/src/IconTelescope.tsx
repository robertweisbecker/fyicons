import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTelescope = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTelescope(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="telescope"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m6.5 9 5 4.5M6 9l-1.5 4.5M4 5.75l.75 2.75" /><rect width={3.086} height={5.914} x={9.244} y={3.043} stroke="currentColor" rx={1.138} transform="rotate(-15 9.244 3.043)" /><path stroke="currentColor" d="M9.67 3.67 2.154 6.277a1 1 0 0 0-.638 1.203l.359 1.338a1 1 0 0 0 1.163.721L10.67 8" />{props.children}</SvgRoot>;
});
export default IconTelescope;
