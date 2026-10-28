import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWarning = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWarning(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="warning"><path fill="currentColor" d="M6.253 2.119c.762-1.372 2.734-1.372 3.496 0l4.95 8.91c.74 1.333-.223 2.972-1.747 2.972H3.049c-1.524 0-2.488-1.638-1.748-2.971zm2.622.486a1 1 0 0 0-1.748 0l-4.952 8.911a1 1 0 0 0 .874 1.485h9.903a1 1 0 0 0 .874-1.485zM8 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-4.875c.173 0 .339.066.456.183a.58.58 0 0 1 .169.442l-.006.138-.113 2.475L8.5 8.5a.505.505 0 0 1-.5.478.505.505 0 0 1-.5-.478l-.006-.137-.113-2.475-.006-.138a.58.58 0 0 1 .169-.442A.65.65 0 0 1 8 5.125" /></SvgRoot>;
});
export default IconWarning;
