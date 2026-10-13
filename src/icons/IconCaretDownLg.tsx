import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconCaretDownLg = React.forwardRef<SVGSVGElement, IconProps>(function IconCaretDownLg(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.9365 6.00049C12.5859 6.00049 12.9285 6.7698 12.4941 7.25244L8.55566 11.6284C8.25774 11.959 7.73829 11.9591 7.44043 11.6284L3.50195 7.25244C3.06761 6.76984 3.41034 6.00061 4.05957 6.00049H11.9365Z" fill="currentColor" /></SvgRoot>;
});
export default IconCaretDownLg;
