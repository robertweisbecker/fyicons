import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWarningFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWarningFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="warning-fill"><path fill="currentColor" d="M6.253 2.366c.762-1.37 2.734-1.37 3.496 0l4.95 8.912c.741 1.332-.223 2.97-1.747 2.971H3.049c-1.524 0-2.488-1.639-1.748-2.972zM8 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0-4.875a.65.65 0 0 0-.456.183.58.58 0 0 0-.17.442l.006.138.114 2.474.006.138a.504.504 0 0 0 .5.478c.126 0 .249-.05.342-.14A.5.5 0 0 0 8.5 8.5l.005-.138.114-2.474.006-.138a.58.58 0 0 0-.17-.442A.65.65 0 0 0 8 5.125" /></SvgRoot>;
});
export default IconWarningFill;
