import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCaretLeftLg = React.forwardRef<SVGSVGElement, IconProps>(function IconCaretLeftLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M9.08276 12.6245C9.24364 12.7693 9.5 12.6551 9.5 12.4387V4.56134C9.5 4.3449 9.24364 4.23072 9.08276 4.37552L4.70647 8.31418C4.59613 8.41349 4.59613 8.58651 4.70647 8.68582L9.08276 12.6245Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round" /></SvgRoot>;
});
export default IconCaretLeftLg;
