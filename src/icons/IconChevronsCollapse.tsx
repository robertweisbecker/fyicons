import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconChevronsCollapse = React.forwardRef<SVGSVGElement, IconProps>(function IconChevronsCollapse(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M6.48393 9.01918C6.75828 9.02049 6.98061 9.24269 6.98181 9.51705L6.99907 13.498C7.00016 13.774 6.77719 13.9987 6.50119 14C6.22536 14.001 5.99988 13.7787 5.99849 13.5028L5.98329 10.0156L2.4961 10.0004C2.22042 9.99869 1.99775 9.77348 1.99891 9.49772C2.00043 9.22192 2.22581 8.99947 2.50162 9.00053L6.48393 9.01918ZM9.49742 1.99921C9.77348 1.99808 9.99887 2.22174 10.0001 2.49778L10.0139 5.98497L13.5011 6.00016C13.7771 6.00146 14 6.22623 13.999 6.50218C13.9977 6.7781 13.7729 7.00105 13.497 7.00006L9.51399 6.98348C9.2395 6.9823 9.01655 6.75942 9.01543 6.48492L8.99886 2.50192C8.99784 2.22591 9.2214 2.00039 9.49742 1.99921Z" fill="currentColor" /></SvgRoot>;
});
export default IconChevronsCollapse;
