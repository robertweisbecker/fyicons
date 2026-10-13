import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCirclePauseFill = React.forwardRef<SVGSVGElement, IconProps>(function IconCirclePauseFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM6 5.25C5.72386 5.25 5.5 5.47386 5.5 5.75V10.25C5.5 10.5261 5.72386 10.75 6 10.75H6.75C7.02614 10.75 7.25 10.5261 7.25 10.25V5.75C7.25 5.47386 7.02614 5.25 6.75 5.25H6ZM9.25 5.25C8.97386 5.25 8.75 5.47386 8.75 5.75V10.25C8.75 10.5261 8.97386 10.75 9.25 10.75H10C10.2761 10.75 10.5 10.5261 10.5 10.25V5.75C10.5 5.47386 10.2761 5.25 10 5.25H9.25Z" fill="currentColor" /></SvgRoot>;
});
export default IconCirclePauseFill;
