import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconArrowToLeft = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowToLeft(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M4 13.5C4 13.7761 3.77614 14 3.5 14C3.22386 14 3 13.7761 3 13.5V2.5C3 2.22386 3.22386 2 3.5 2C3.77614 2 4 2.22386 4 2.5V13.5ZM14 8.5C14 8.77614 13.7761 9 13.5 9H6.70703L8.85352 11.1465C9.04878 11.3417 9.04878 11.6583 8.85352 11.8535C8.65825 12.0488 8.34175 12.0488 8.14648 11.8535L5.14648 8.85352C4.97562 8.68265 4.95387 8.41869 5.08203 8.22461L5.14648 8.14648L8.14648 5.14648C8.34175 4.95122 8.65825 4.95122 8.85352 5.14648C9.04878 5.34175 9.04878 5.65825 8.85352 5.85352L6.70703 8H13.5C13.7761 8 14 8.22386 14 8.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconArrowToLeft;
