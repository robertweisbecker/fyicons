import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEnvelopeSimpleLetter = React.forwardRef<SVGSVGElement, IconProps>(function IconEnvelopeSimpleLetter(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M2.5 7.50012V12.0001C2.5 12.8285 3.17157 13.5001 4 13.5001H12C12.8284 13.5001 13.5 12.8285 13.5 12.0001V7.50012" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5 8.5V3.5C11.5 2.94772 11.0523 2.5 10.5 2.5H5.5C4.94772 2.5 4.5 2.94772 4.5 3.5V8.5" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" /><path d="M13.5 8.5V7.53931C13.5 6.88779 13.1827 6.27711 12.6495 5.90265L11.5 5.0953M2.5 8.5L2.5 7.53931C2.5 6.88779 2.81734 6.27711 3.3505 5.90265L4.5 5.0953" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.5 9.5L8.68349 7.74854C8.24197 7.58799 7.75803 7.58799 7.31651 7.74854L2.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconEnvelopeSimpleLetter;
