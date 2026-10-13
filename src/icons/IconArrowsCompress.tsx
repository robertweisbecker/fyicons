import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconArrowsCompress = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowsCompress(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M6.5 9C6.77614 9 7 9.22386 7 9.5V13.5C6.99994 13.7761 6.7761 14 6.5 14C6.22395 13.9999 6.00006 13.7761 6 13.5V10.707L1.85352 14.8535C1.65824 15.0487 1.34171 15.0487 1.14648 14.8535C0.951263 14.6583 0.951339 14.3418 1.14648 14.1465L5.29297 10H2.5C2.22395 9.99994 2.00006 9.77605 2 9.5C2 9.2239 2.22391 9.00006 2.5 9H6.5ZM14.1465 1.14648C14.3417 0.951223 14.6583 0.951225 14.8535 1.14648C15.0488 1.34175 15.0488 1.65825 14.8535 1.85352L10.707 6H13.5C13.7761 6 14 6.22386 14 6.5C13.9999 6.77609 13.7761 7 13.5 7H9.5C9.22395 6.99994 9.00006 6.77605 9 6.5V2.5C9 2.2239 9.22391 2.00006 9.5 2C9.77614 2 10 2.22386 10 2.5V5.29297L14.1465 1.14648Z" fill="currentColor" /></SvgRoot>;
});
export default IconArrowsCompress;
