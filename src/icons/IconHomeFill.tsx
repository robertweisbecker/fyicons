import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconHomeFill = React.forwardRef<SVGSVGElement, IconProps>(function IconHomeFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.20801 2.25244C7.66845 1.8758 8.33158 1.87576 8.79199 2.25244L13.5674 6.16064C13.8405 6.3844 13.9989 6.71964 13.999 7.07275C13.9988 7.66228 13.5653 8.1483 13 8.23486V12.0005C12.9999 13.1049 12.1045 14.0004 11 14.0005H9.49902V11.5005C9.49903 10.6721 8.82747 10.0005 7.99902 10.0005C7.17108 10.0007 6.49946 10.6716 6.49902 11.4995V14.0005H5C3.8954 14.0003 2.99981 13.1041 3 11.9995V8.23486C2.43405 8.14887 2 7.66177 2 7.07178C2.00022 6.71887 2.15859 6.38424 2.43164 6.16064L7.20801 2.25244Z" fill="currentColor" /></SvgRoot>;
});
export default IconHomeFill;
