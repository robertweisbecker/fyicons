import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowLeft = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowLeft(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M6.64648 3.64663C6.84173 3.45145 7.15827 3.45145 7.35352 3.64663C7.5487 3.84188 7.5487 4.15841 7.35352 4.35366L4.20703 7.50015H13.5C13.7761 7.50015 14 7.724 14 8.00014C13.9999 8.27624 13.7761 8.50014 13.5 8.50014H4.20703L7.35352 11.6466C7.54873 11.8419 7.54876 12.1584 7.35352 12.3537C7.15827 12.5489 6.84173 12.5489 6.64648 12.3537L2.64648 8.35366L2.58398 8.27749C2.52965 8.19598 2.50002 8.09955 2.5 8.00014C2.5 7.86756 2.55275 7.74039 2.64648 7.64663L6.64648 3.64663Z" fill="currentColor" /></SvgRoot>;
});
export default IconArrowLeft;
