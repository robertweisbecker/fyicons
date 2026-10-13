import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCheckThick = React.forwardRef<SVGSVGElement, IconProps>(function IconCheckThick(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M10.8612 4.35652C11.0784 4.00407 11.5408 3.8944 11.8935 4.11141C12.2458 4.32862 12.3556 4.79103 12.1386 5.14363L8.13858 11.6436C8.01531 11.8437 7.80514 11.9748 7.5712 11.9971C7.33715 12.0195 7.1061 11.9302 6.94718 11.7569L4.19718 8.75691C3.91731 8.4516 3.93782 7.97725 4.24308 7.69734C4.54839 7.41751 5.02275 7.438 5.30265 7.74324L7.38077 10.0108L10.8612 4.35652Z" fill="currentColor" /></SvgRoot>;
});
export default IconCheckThick;
