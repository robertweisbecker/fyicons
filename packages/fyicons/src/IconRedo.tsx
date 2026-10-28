import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconRedo = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconRedo(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="redo"><path d="M10.1465 2.1466C10.3417 1.9515 10.6583 1.95141 10.8535 2.1466L13.8535 5.1466C13.9472 5.24034 14 5.36758 14 5.50012C13.9999 5.63257 13.9471 5.75994 13.8535 5.85363L10.8535 8.85363C10.6583 9.04862 10.3417 9.04872 10.1465 8.85363C9.9513 8.65845 9.95147 8.34188 10.1465 8.1466L12.293 6.00012H6.5C4.567 6.00012 3 7.56712 3 9.50012C3.00012 11.433 4.56708 13.0001 6.5 13.0001H8.5C8.77614 13.0001 9 13.224 9 13.5001C8.99988 13.7762 8.77607 14.0001 8.5 14.0001H6.5C4.01479 14.0001 2.00012 11.9853 2 9.50012C2 7.01484 4.01472 5.00012 6.5 5.00012H12.293L10.1465 2.85363C9.95124 2.65838 9.95125 2.34187 10.1465 2.1466Z" fill="currentColor" /></SvgRoot>;
});
export default IconRedo;
