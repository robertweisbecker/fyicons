import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconFolderSquare = React.forwardRef<SVGSVGElement, IconProps>(function IconFolderSquare(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M13.5 7.5V6C13.5 4.61929 12.3807 3.5 11 3.5H7.5L7.08579 3.08579C6.71071 2.71071 6.20201 2.5 5.67157 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V7.5M13.5 7.5H2.5M13.5 7.5V11C13.5 12.3807 12.3807 13.5 11 13.5H5C3.61929 13.5 2.5 12.3807 2.5 11V7.5" stroke="currentColor" strokeLinecap="square" /></SvgRoot>;
});
export default IconFolderSquare;
