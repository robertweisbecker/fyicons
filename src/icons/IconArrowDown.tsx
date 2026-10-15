import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconArrowDown = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowDown(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8.00045 3C8.27659 3 8.50045 3.22386 8.50045 3.5V12.793L11.6469 9.64648C11.8422 9.45122 12.1587 9.45122 12.354 9.64648C12.5492 9.84175 12.5492 10.1583 12.354 10.3535L8.35397 14.3535L8.27584 14.418C8.08176 14.5461 7.8178 14.5244 7.64693 14.3535L3.64693 10.3535C3.45167 10.1583 3.45167 9.84175 3.64693 9.64648C3.8422 9.45122 4.1587 9.45122 4.35397 9.64648L7.50045 12.793V3.5C7.50045 3.22386 7.72431 3 8.00045 3Z" fill="currentColor" /></SvgRoot>;
});
export default IconArrowDown;
