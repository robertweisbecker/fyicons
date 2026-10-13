import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconXmarkSm = React.forwardRef<SVGSVGElement, IconProps>(function IconXmarkSm(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M10.1475 5.14648C10.3427 4.95122 10.6592 4.95122 10.8545 5.14648C11.0496 5.34176 11.0497 5.65829 10.8545 5.85352L8.70703 8L10.8535 10.1465C11.0487 10.3418 11.0487 10.6583 10.8535 10.8535C10.6583 11.0487 10.3417 11.0487 10.1465 10.8535L8 8.70703L5.85449 10.8535C5.65926 11.0487 5.34272 11.0487 5.14746 10.8535C4.95221 10.6583 4.95224 10.3418 5.14746 10.1465L7.29297 8L5.14648 5.85352C4.95124 5.65827 4.95127 5.34175 5.14648 5.14648C5.34175 4.95122 5.65825 4.95122 5.85352 5.14648L8 7.29297L10.1475 5.14648Z" fill="currentColor" /></SvgRoot>;
});
export default IconXmarkSm;
