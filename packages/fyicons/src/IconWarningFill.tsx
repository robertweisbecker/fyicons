import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWarningFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWarningFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M6.701 1.752c.577-1 2.02-1 2.598 0l5.552 9.623c.673 1.167-.169 2.625-1.515 2.625H2.664c-1.347 0-2.189-1.458-1.516-2.625zM8 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-4.875a.65.65 0 0 0-.456.183.58.58 0 0 0-.17.442l.007.138.113 2.474.006.138a.504.504 0 0 0 .5.478c.126 0 .249-.05.343-.14A.5.5 0 0 0 8.5 8.5l.006-.138.113-2.474.006-.138a.58.58 0 0 0-.17-.442A.65.65 0 0 0 8 5.125" /></SvgRoot>;
});
export default IconWarningFill;
