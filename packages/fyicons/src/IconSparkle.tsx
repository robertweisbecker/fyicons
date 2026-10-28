import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSparkle = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSparkle(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="sparkle"><path fill="currentColor" d="M6.77 1.87c.394-1.187 2.07-1.187 2.465 0l.83 2.486a2.5 2.5 0 0 0 1.58 1.582l2.26.752c1.258.42 1.258 2.2 0 2.62l-2.26.752a2.5 2.5 0 0 0-1.58 1.582l-.754 2.26c-.42 1.258-2.2 1.258-2.619 0l-.753-2.26a2.5 2.5 0 0 0-1.58-1.582L2.1 9.31c-1.26-.42-1.26-2.2 0-2.62l2.26-.752a2.5 2.5 0 0 0 1.58-1.582zm1.517.315a.3.3 0 0 0-.568 0l-.83 2.488a3.5 3.5 0 0 1-2.213 2.213l-2.26.754a.38.38 0 0 0 0 .72l2.26.754a3.5 3.5 0 0 1 2.212 2.213l.754 2.26a.38.38 0 0 0 .721 0l.754-2.26a3.5 3.5 0 0 1 2.213-2.213l2.26-.754a.38.38 0 0 0 0-.72l-2.26-.754a3.5 3.5 0 0 1-2.213-2.213z" /></SvgRoot>;
});
export default IconSparkle;
