import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconGallery = React.forwardRef<SVGSVGElement, IconProps>(function IconGallery(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M1 5.25C1 4.55964 1.55964 4 2.25 4H4V3.5C4 2.67157 4.67157 2 5.5 2H10.5C11.3284 2 12 2.67157 12 3.5V4H13.75C14.4404 4 15 4.55964 15 5.25V10.75C15 11.4404 14.4404 12 13.75 12H12V12.5C12 13.3284 11.3284 14 10.5 14H5.5C4.67157 14 4 13.3284 4 12.5V12H2.25C1.55964 12 1 11.4404 1 10.75V5.25ZM12 11H13.75C13.8881 11 14 10.8881 14 10.75V5.25C14 5.11193 13.8881 5 13.75 5H12V11ZM5 12.5C5 12.7761 5.22386 13 5.5 13H10.5C10.7761 13 11 12.7761 11 12.5V3.5C11 3.22386 10.7761 3 10.5 3H5.5C5.22386 3 5 3.22386 5 3.5V12.5ZM2 10.75C2 10.8881 2.11193 11 2.25 11H4V5H2.25C2.11193 5 2 5.11193 2 5.25V10.75Z" fill="currentColor" /></SvgRoot>;
});
export default IconGallery;
