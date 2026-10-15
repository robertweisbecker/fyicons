import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconSendStraight = React.forwardRef<SVGSVGElement, IconProps>(function IconSendStraight(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M2.13947 4.42335C1.58673 2.92922 3.15642 1.53317 4.576 2.25635L13.2264 6.66358C14.3184 7.22 14.3185 8.78105 13.2264 9.33741L4.576 13.7446C3.15651 14.4677 1.58697 13.0717 2.13947 11.5776L3.46369 8.00049L2.13947 4.42335ZM4.12189 3.14796C3.51347 2.838 2.84096 3.43629 3.07795 4.07667L4.34455 7.50049H8.49689C8.77304 7.50049 8.99689 7.72435 8.99689 8.00049C8.99676 8.27653 8.77296 8.50049 8.49689 8.50049H4.34455L3.07795 11.9243C2.8412 12.5646 3.51357 13.1628 4.12189 12.853L12.7733 8.44581C13.1367 8.26024 13.1366 7.74081 12.7733 7.55518L4.12189 3.14796Z" fill="currentColor" /></SvgRoot>;
});
export default IconSendStraight;
