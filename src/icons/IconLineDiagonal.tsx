import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconLineDiagonal = React.forwardRef<SVGSVGElement, IconProps>(function IconLineDiagonal(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M2.14742 2.14621C2.34272 1.95143 2.65935 1.9511 2.85445 2.14621L13.8545 13.1462C14.0496 13.3413 14.0492 13.6579 13.8545 13.8532C13.6592 14.0485 13.3427 14.0485 13.1474 13.8532L2.14742 2.85324C1.95216 2.65797 1.95216 2.34147 2.14742 2.14621Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconLineDiagonal;
