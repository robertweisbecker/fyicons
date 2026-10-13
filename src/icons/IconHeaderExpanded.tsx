import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconHeaderExpanded = React.forwardRef<SVGSVGElement, IconProps>(function IconHeaderExpanded(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M12.5 3C13.8807 3 15 4.11929 15 5.5V10.5C15 11.8807 13.8807 13 12.5 13H3.5C2.11929 13 1 11.8807 1 10.5V5.5C1 4.11929 2.11929 3 3.5 3H12.5ZM3.5 4C2.67157 4 2 4.67157 2 5.5V10.5C2 11.3284 2.67157 12 3.5 12H12.5C13.3284 12 14 11.3284 14 10.5V5.5C14 4.67157 13.3284 4 12.5 4H3.5ZM12.25 5C12.6642 5 13 5.33579 13 5.75V7.25C13 7.66421 12.6642 8 12.25 8H3.75C3.33579 8 3 7.66421 3 7.25V5.75C3 5.33579 3.33579 5 3.75 5H12.25Z" fill="currentColor" /></SvgRoot>;
});
export default IconHeaderExpanded;
