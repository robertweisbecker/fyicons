import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleArrowLeftFill = React.forwardRef<SVGSVGElement, IconProps>(function IconCircleArrowLeftFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM7.85352 5.14648C7.65825 4.95122 7.34175 4.95122 7.14648 5.14648L4.64648 7.64648C4.61251 7.68046 4.58563 7.71875 4.56348 7.75879C4.53903 7.80293 4.51898 7.85033 4.50879 7.90137C4.49587 7.96599 4.496 8.03302 4.50879 8.09766C4.51889 8.14875 4.53909 8.19602 4.56348 8.24023C4.58569 8.28055 4.6123 8.31933 4.64648 8.35352L7.14648 10.8535C7.34175 11.0488 7.65825 11.0488 7.85352 10.8535C8.04878 10.6583 8.04878 10.3417 7.85352 10.1465L6.20703 8.5H11.5C11.7761 8.5 12 8.27614 12 8C12 7.72386 11.7761 7.5 11.5 7.5H6.20703L7.85352 5.85352C8.04878 5.65825 8.04878 5.34175 7.85352 5.14648Z" fill="currentColor" /></SvgRoot>;
});
export default IconCircleArrowLeftFill;
