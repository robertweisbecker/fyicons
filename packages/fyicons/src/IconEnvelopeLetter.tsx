import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEnvelopeLetter = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEnvelopeLetter(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="envelope-letter"><path stroke="currentColor" strokeLinejoin="round" d="M3.557 4.76 2.031 6.05A1.5 1.5 0 0 0 1.5 7.197V12A1.5 1.5 0 0 0 3 13.5h10a1.5 1.5 0 0 0 1.5-1.5V7.196a1.5 1.5 0 0 0-.531-1.145l-1.506-1.274" /><path fill="currentColor" d="M12.5 8.5V5l2 1.5zm-9 0V5l-2 1.5z" /><path stroke="currentColor" strokeLinecap="round" d="M12.5 8.5V2.75a1.5 1.5 0 0 0-1.5-1.5H5a1.5 1.5 0 0 0-1.5 1.5V8.5" /><path stroke="currentColor" strokeLinejoin="round" d="M1.5 6.5 5 10m9.5-3.5L11 10" /><path stroke="currentColor" strokeLinecap="round" d="m12.5 11.5-1.777-1.876a3.75 3.75 0 0 0-5.445 0L3.5 11.5" /></SvgRoot>;
});
export default IconEnvelopeLetter;
