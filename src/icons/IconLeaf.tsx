import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLeaf = React.forwardRef<SVGSVGElement, IconProps>(function IconLeaf(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M2.5 8.78571C2.5 5.31421 5.31421 2.5 8.78571 2.5H13.5V7.21429C13.5 10.6858 10.6858 13.5 7.21429 13.5V13.5C4.61066 13.5 2.5 11.3893 2.5 8.78571V8.78571Z" stroke="currentColor" strokeLinejoin="round" /><path d="M8.5 7.5L1.5 14.5" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconLeaf;
