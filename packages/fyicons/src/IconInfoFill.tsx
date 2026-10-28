import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconInfoFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconInfoFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="info-fill"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m-.5 6a.5.5 0 0 0 0 1h.218l-.186 2.97A.97.97 0 0 0 8.5 12a.5.5 0 0 0 .031-.997l.185-2.94A1 1 0 0 0 7.718 7zM8 4.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5" /></SvgRoot>;
});
export default IconInfoFill;
