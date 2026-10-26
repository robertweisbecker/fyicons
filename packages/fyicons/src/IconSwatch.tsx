import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSwatch = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSwatch(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M5 2c.727 0 1.36.389 1.71.969a1.78 1.78 0 0 1 1.904-.08l1.056.61c.63.363.984 1.017.997 1.694a1.78 1.78 0 0 1 1.688.883l.61 1.056a2 2 0 0 1-.034 2.056 1.89 1.89 0 0 1 1.069 1.7V12a2 2 0 0 1-2 2H4.5A2.5 2.5 0 0 1 2 11.5V4a2 2 0 0 1 2-2zM4 3a1 1 0 0 0-1 1v7.5a1.5 1.5 0 0 0 3 0V4a1 1 0 0 0-1-1zm8.111 7a.4.4 0 0 0-.21.056l-2.106 1.216-2.95 1.703-.018.025H12a1 1 0 0 0 1-1v-1.111a.89.89 0 0 0-.889-.889M4.5 11a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m6.99-4.424a.78.78 0 0 0-1.067-.285.36.36 0 0 0-.13.13l-2.951 5.11 3.303-1.904 1.088-.629a1 1 0 0 0 .366-1.366zm-3.376-2.82a.78.78 0 0 0-1.066.285.36.36 0 0 0-.047.178L7 10.124 9.536 5.73a1 1 0 0 0-.366-1.365z" /></SvgRoot>;
});
export default IconSwatch;
