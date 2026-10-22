import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHeartAltFill = React.forwardRef<SVGSVGElement, IconProps>(function IconHeartAltFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8.26715 14.8107C8.10429 14.9287 7.89235 14.9315 7.7265 14.8176C6.43469 13.931 1.00007 9.96532 1 6.00079C0.99996 3.79165 2.7981 1.82208 5 2.00079C6.40333 2.11469 7.5 3.00079 7.99961 4.00085C8.5 3.00079 9.5964 2.1145 11 2.00079C13.2019 1.82241 14.9833 3.79172 15 6.00079C15.028 9.69136 9.55221 13.879 8.26715 14.8107Z" fill="currentColor" /></SvgRoot>;
});
export default IconHeartAltFill;
