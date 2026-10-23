import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGlasses = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGlasses(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><rect x={1.5} y={7.5} width={5} height={5} rx={2.5} stroke="currentColor" /><rect x={9.5} y={7.5} width={5} height={5} rx={2.5} stroke="currentColor" /><path d="M14.5 9.5H15.5" stroke="currentColor" strokeLinecap="round" /><path d="M0.5 9.5H1.5" stroke="currentColor" strokeLinecap="round" /><path d="M12 12.5C10.9494 12.5 10.011 11.8427 9.65195 10.8554L9.53409 10.5313C9.35769 10.0461 8.941 9.6882 8.43483 9.58697C8.14779 9.52956 7.85221 9.52956 7.56517 9.58697C7.059 9.6882 6.64231 10.0461 6.46591 10.5313L6.34805 10.8554C5.98901 11.8427 5.05063 12.5 4 12.5" stroke="currentColor" strokeLinecap="round" /><path d="M15.5 9.5L13.9558 4.86754C13.6836 4.05086 12.9193 3.5 12.0585 3.5H11.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M0.5 9.5L2.04415 4.86754C2.31638 4.05086 3.08066 3.5 3.94152 3.5H4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconGlasses;
