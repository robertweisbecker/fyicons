import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconShareAndroid = React.forwardRef<SVGSVGElement, IconProps>(function IconShareAndroid(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><circle cx={4} cy={8} r={1.5} stroke="currentColor" /><circle cx={10} cy={4} r={1.5} stroke="currentColor" /><circle cx={10} cy={12} r={1.5} stroke="currentColor" /><path d="M8.79062 4.90687C9.01533 4.74636 9.06737 4.43409 8.90687 4.20938C8.74636 3.98467 8.43409 3.93263 8.20938 4.09313L8.5 4.5L8.79062 4.90687ZM8.5 4.5L8.20938 4.09313L4.70938 6.59313L5 7L5.29062 7.40687L8.79062 4.90687L8.5 4.5Z" fill="currentColor" /><path d="M8.79062 11.0931C9.01533 11.2536 9.06737 11.5659 8.90687 11.7906C8.74636 12.0153 8.43409 12.0674 8.20938 11.9069L8.5 11.5L8.79062 11.0931ZM8.5 11.5L8.20938 11.9069L4.70938 9.40687L5 9L5.29062 8.59313L8.79062 11.0931L8.5 11.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconShareAndroid;
