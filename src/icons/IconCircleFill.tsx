import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCircleFill = React.forwardRef<SVGSVGElement, IconProps>(function IconCircleFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13403 15 1 11.866 1 8C1 4.13402 4.13403 1.00002 8 1Z" fill="currentColor" /></SvgRoot>;
});
export default IconCircleFill;
