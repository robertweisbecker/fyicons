import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCaretsMaximize = React.forwardRef<SVGSVGElement, IconProps>(function IconCaretsMaximize(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8.2929 12C8.73835 12 8.96144 11.4614 8.64646 11.1464L4.85356 7.3535C4.53857 7.03852 4 7.2616 4 7.70706V11.5C4 11.7761 4.22386 12 4.5 12H8.2929ZM12 8.29284C12 8.73829 11.4614 8.96138 11.1464 8.6464L7.35356 4.85355C7.03858 4.53857 7.26166 4 7.70712 4H11.5C11.7761 4 12 4.22386 12 4.5V8.29284Z" fill="currentColor" /></SvgRoot>;
});
export default IconCaretsMaximize;
