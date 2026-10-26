import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFileCode = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFileCode(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8.5 1a2.5 2.5 0 0 1 2 1l2.4 3.2a.5.5 0 0 1 .1.3v7a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 12.5V3a2 2 0 0 1 2-2zM5 2a1 1 0 0 0-1 1v9.5A1.5 1.5 0 0 0 5.5 14h5a1.5 1.5 0 0 0 1.5-1.5V6h-1.5A1.5 1.5 0 0 1 9 4.5V2.086A1.5 1.5 0 0 0 8.5 2zm1.366 5.68a.5.5 0 0 1 .768.64L6.15 9.5l.984 1.18a.5.5 0 0 1-.768.64l-1.25-1.5a.5.5 0 0 1 0-.64zm2.564-.064a.5.5 0 0 1 .704.064l1.25 1.5a.5.5 0 0 1 0 .64l-1.25 1.5a.5.5 0 0 1-.768-.64L9.85 9.5l-.984-1.18a.5.5 0 0 1 .064-.704M10 4.5a.5.5 0 0 0 .5.5h1L10 2.999z" /></SvgRoot>;
});
export default IconFileCode;
