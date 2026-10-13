import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCircleCheckFill = React.forwardRef<SVGSVGElement, IconProps>(function IconCircleCheckFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM10.7324 5.05664C10.4879 4.92853 10.1848 5.02307 10.0566 5.26758L7.62207 9.91504L5.85352 8.14648C5.65825 7.95122 5.34175 7.95122 5.14648 8.14648C4.95122 8.34175 4.95122 8.65825 5.14648 8.85352L7.39648 11.1035C7.50891 11.2159 7.66803 11.2681 7.8252 11.2441C7.98238 11.2202 8.11954 11.1232 8.19336 10.9824L10.9434 5.73242C11.0715 5.48785 10.9769 5.18482 10.7324 5.05664Z" fill="currentColor" /></SvgRoot>;
});
export default IconCircleCheckFill;
