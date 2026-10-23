import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRedo = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRedo(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M10.1465 2.1466C10.3417 1.9515 10.6583 1.95141 10.8535 2.1466L13.8535 5.1466C13.9472 5.24034 14 5.36758 14 5.50012C13.9999 5.63257 13.9471 5.75994 13.8535 5.85363L10.8535 8.85363C10.6583 9.04862 10.3417 9.04872 10.1465 8.85363C9.9513 8.65845 9.95147 8.34188 10.1465 8.1466L12.293 6.00012H6C4.34315 6.00012 3 7.34326 3 9.00012C3.00012 10.6569 4.34322 12.0001 6 12.0001H8.5C8.77614 12.0001 9 12.224 9 12.5001C8.99988 12.7762 8.77607 13.0001 8.5 13.0001H6C3.79093 13.0001 2.00012 11.2092 2 9.00012C2 6.79098 3.79086 5.00012 6 5.00012H12.293L10.1465 2.85363C9.95124 2.65838 9.95125 2.34187 10.1465 2.1466Z" fill="currentColor" /></SvgRoot>;
});
export default IconRedo;
