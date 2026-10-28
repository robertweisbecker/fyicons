import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeading5 = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHeading5(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="heading-5"><path fill="currentColor" d="M13.5 9a.5.5 0 0 1 0 1h-2.231l-.167 1.192.345-.105a2.126 2.126 0 0 1 1.26 4.06l-.089.029a2.2 2.2 0 0 1-2.306-.647l-.187-.214a.5.5 0 1 1 .75-.66l.188.213a1.2 1.2 0 0 0 1.258.353l.088-.028a1.126 1.126 0 0 0-.667-2.151l-1.094.339-.643-.547.333-2.402.021-.09A.5.5 0 0 1 10.833 9zm-8-7a.5.5 0 0 1 0 1H5v3h5V3h-.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1H11v4.5a.5.5 0 0 1-1 0V7H5v4h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H4V3h-.5a.5.5 0 0 1 0-1z" /></SvgRoot>;
});
export default IconHeading5;
