import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconRedoSmall = React.forwardRef<SVGSVGElement, IconProps>(function IconRedoSmall(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M9.83865 4.27426C9.51837 3.97861 8.99881 4.20557 8.99881 4.64145V5.99985H6.99978C5.34302 5.99987 3.9999 7.34311 3.99978 8.99985C3.99978 10.6567 5.34295 11.9998 6.99978 11.9998H7.49978C7.77593 11.9998 7.99978 11.776 7.99978 11.4998C7.99967 11.2238 7.77585 10.9998 7.49978 10.9998H6.99978C5.89523 10.9998 4.99978 10.1044 4.99978 8.99985C4.9999 7.89539 5.89531 6.99987 6.99978 6.99985H8.99881V8.35727C8.99881 8.79315 9.51837 9.0201 9.83865 8.72446L11.8513 6.86703C12.0658 6.66905 12.0658 6.32966 11.8513 6.13168L9.83865 4.27426Z" fill="currentColor" /></SvgRoot>;
});
export default IconRedoSmall;
