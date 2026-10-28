import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSendStraightFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSendStraightFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="send-straight-fill"><path fill="currentColor" d="M1.918 3.823c-.474-1.28.87-2.477 2.088-1.857l9.22 4.697c1.092.557 1.092 2.118 0 2.674l-9.22 4.697c-1.217.62-2.562-.577-2.088-1.857l.998-2.697a1.5 1.5 0 0 1 1.406-.98h4.175a.5.5 0 0 0 0-1H4.322a1.5 1.5 0 0 1-1.406-.98z" /></SvgRoot>;
});
export default IconSendStraightFill;
