import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMinus = React.forwardRef<SVGSVGElement, IconProps>(function IconMinus(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M13 8.5C13 8.77614 12.7761 9 12.5 9H3.5C3.22386 9 3 8.77614 3 8.5C3 8.22386 3.22386 8 3.5 8H12.5C12.7761 8 13 8.22386 13 8.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconMinus;
