import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconLinked = React.forwardRef<SVGSVGElement, IconProps>(function IconLinked(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M4.64453 6.64746C5.94427 5.34773 8.05171 5.34792 9.35156 6.64746C9.54682 6.84272 9.54682 7.15923 9.35156 7.35449C9.1563 7.54975 8.83979 7.54975 8.64453 7.35449C7.7352 6.44548 6.26077 6.44528 5.35156 7.35449L2.85156 9.85449C1.94236 10.7637 1.94255 12.2381 2.85156 13.1475C3.76087 14.0568 5.23522 14.0568 6.14453 13.1475L8.14551 11.1455C8.34067 10.9503 8.65823 10.9505 8.85352 11.1455C9.04878 11.3408 9.04878 11.6583 8.85352 11.8535L6.85156 13.8545C5.55173 15.1543 3.44436 15.1543 2.14453 13.8545C0.844993 12.5546 0.844803 10.4472 2.14453 9.14746L4.64453 6.64746Z" fill="currentColor" /><path d="M7.49805 4.50098L9.49805 2.50098C10.6026 1.39641 12.3935 1.39641 13.498 2.50098C14.6026 3.60555 14.6026 5.39641 13.498 6.50098L10.998 9.00098C9.89348 10.1055 8.10262 10.1055 6.99805 9.00098" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconLinked;
