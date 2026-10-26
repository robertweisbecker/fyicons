import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEnvelopeLetter = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEnvelopeLetter(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M11 1.75a2 2 0 0 1 2 2V8a.5.5 0 0 1-1 0V3.75a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1V8a.5.5 0 0 1-1 0V3.75a2 2 0 0 1 2-2z" /><path stroke="currentColor" strokeLinejoin="round" d="m1.5 6.5 4 3m9-3-4 3" /><path stroke="currentColor" strokeLinecap="round" d="m12.5 11.5-1.777-1.876a3.75 3.75 0 0 0-5.445 0L3.5 11.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M1.5 6.5V12A1.5 1.5 0 0 0 3 13.5h10a1.5 1.5 0 0 0 1.5-1.5V6.5" /><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m14.5 6.5-2-2V8zm-13 0 2-2V8z" /></SvgRoot>;
});
export default IconEnvelopeLetter;
