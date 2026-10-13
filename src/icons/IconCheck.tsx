import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCheck = React.forwardRef<SVGSVGElement, IconProps>(function IconCheck(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M12.0625 3.25635C12.1967 3.01536 12.502 2.92813 12.7432 3.06201C12.9844 3.19607 13.0713 3.50137 12.9375 3.74268L7.9375 12.7427C7.86131 12.8798 7.72464 12.9728 7.56934 12.9946C7.41396 13.0164 7.25742 12.964 7.14648 12.853L3.14648 8.85303C2.95144 8.65775 2.95129 8.34119 3.14648 8.146C3.34169 7.95106 3.65832 7.95104 3.85352 8.146L7.38379 11.6763L12.0625 3.25635Z" fill="currentColor" /></SvgRoot>;
});
export default IconCheck;
