import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleMinus = React.forwardRef<SVGSVGElement, IconProps>(function IconCircleMinus(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM11.5 8C11.7761 8 12 8.22386 12 8.5C12 8.77614 11.7761 9 11.5 9H4.5C4.22386 9 4 8.77614 4 8.5C4 8.22386 4.22386 8 4.5 8H11.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconCircleMinus;
