import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEnvelopeSimpleLetter = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEnvelopeSimpleLetter(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="envelope-simple-letter"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 7.5V12A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.5-1.5V7.5" /><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" d="M11.5 9V3.5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1V9" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.5 8.5V7.357a2 2 0 0 0-.62-1.448L11.5 4.595M2.5 8.5V7.357a2 2 0 0 1 .62-1.448L4.5 4.595m9 6.155L8.805 7.762a1.5 1.5 0 0 0-1.61 0L2.5 10.75" /></SvgRoot>;
});
export default IconEnvelopeSimpleLetter;
