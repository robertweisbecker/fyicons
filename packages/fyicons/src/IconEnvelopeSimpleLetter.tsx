import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEnvelopeSimpleLetter = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEnvelopeSimpleLetter(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="envelope-simple-letter"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 7.5V12A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V7.5" /><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" d="M11.5 8.5v-5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.5 8.5v-.96a2 2 0 0 0-.85-1.637l-1.15-.808M2.5 8.5v-.96a2 2 0 0 1 .85-1.637l1.15-.808m9 4.405L8.683 7.749a2 2 0 0 0-1.366 0L2.5 9.5" /></SvgRoot>;
});
export default IconEnvelopeSimpleLetter;
