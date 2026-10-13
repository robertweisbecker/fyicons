import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconLightbulbSimpleFill = React.forwardRef<SVGSVGElement, IconProps>(function IconLightbulbSimpleFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M10.1182 13.7119C10.0125 14.451 9.37886 14.9999 8.63281 15H7.36719C6.62114 14.9999 5.98752 14.451 5.88184 13.7119L5.78027 13H10.2197L10.1182 13.7119ZM8 1C10.7614 1 13 3.23858 13 6C13 7.29583 12.5059 8.47736 11.6973 9.36523C11.0588 10.0664 10.5419 10.7435 10.4316 11.5146L10.3623 12H5.63672L5.56738 11.5146C5.45713 10.7437 4.94011 10.0663 4.30176 9.36523C3.49339 8.47726 3 7.29563 3 6C3 3.23858 5.23858 1 8 1Z" fill="currentColor" /></SvgRoot>;
});
export default IconLightbulbSimpleFill;
