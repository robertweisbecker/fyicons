import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconInfinitySign = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconInfinitySign(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="infinity-sign"><path fill="currentColor" d="M12 5a3 3 0 0 1 0 6 4.12 4.12 0 0 1-2.914-1.208L8 8.707 6.914 9.792A4.12 4.12 0 0 1 4 11a3 3 0 0 1 0-6c1.093 0 2.141.435 2.914 1.208L8 7.292l1.086-1.085A4.12 4.12 0 0 1 12 5m0 1c-.828 0-1.622.328-2.207.914L8.707 8l1.086 1.085c.585.586 1.38.914 2.207.915a2 2 0 0 0 0-4M4 6a2 2 0 0 0 0 4c.828 0 1.622-.33 2.207-.915L7.293 8 6.207 6.914A3.12 3.12 0 0 0 4 6" /></SvgRoot>;
});
export default IconInfinitySign;
