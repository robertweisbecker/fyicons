import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconUmbrella = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconUmbrella(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.347 2.009A7 7 0 0 1 14 9c0 1.356-.395 2.67-1.118 3.791a.5.5 0 0 1-.914-.191 2.5 2.5 0 0 0-2.938-2.056.5.5 0 0 1-.58-.602q.049-.218.05-.442a2 2 0 0 0-2.443-1.95.5.5 0 0 1-.602-.58q.045-.23.045-.47c0-1.245-.91-2.278-2.1-2.469a.5.5 0 0 1-.192-.914A7 7 0 0 1 7 2zm-1.2 7.137a.5.5 0 0 1 .707.708l-2 2a1.914 1.914 0 0 1-2.707-2.708.5.5 0 0 1 .707.708.914.914 0 0 0 1.293 1.293zm5.85-3.467a5.64 5.64 0 0 1-1.676 3.92c.954.23 1.756.848 2.227 1.68a5.99 5.99 0 0 0-.552-5.6M10.416 5c-1.33 0-2.582.568-3.454 1.535 1.286.2 2.3 1.216 2.5 2.502A4.65 4.65 0 0 0 11 5.585V5zM7 3c-.79 0-1.563.156-2.28.45A3.5 3.5 0 0 1 6.4 5.678a5.65 5.65 0 0 1 3.919-1.675 6 6 0 0 0-3.021-.995z" /></SvgRoot>;
});
export default IconUmbrella;
