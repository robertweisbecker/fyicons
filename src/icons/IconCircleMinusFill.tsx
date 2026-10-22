import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleMinusFill = React.forwardRef<SVGSVGElement, IconProps>(function IconCircleMinusFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM4.5 8C4.22386 8 4 8.22386 4 8.5C4 8.77614 4.22386 9 4.5 9H11.5C11.7761 9 12 8.77614 12 8.5C12 8.22386 11.7761 8 11.5 8H4.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconCircleMinusFill;
