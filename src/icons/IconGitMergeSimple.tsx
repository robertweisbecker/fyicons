import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconGitMergeSimple = React.forwardRef<SVGSVGElement, IconProps>(function IconGitMergeSimple(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M5 9.4873C5.77961 10.412 6.94585 11 8.25 11H9.0498C9.28142 12.1411 10.2905 13 11.5 13C12.8807 13 14 11.8807 14 10.5C14 9.11929 12.8807 8 11.5 8C10.2905 8 9.28142 8.85886 9.0498 10H8.25C6.52197 10 5.10878 8.65137 5.00586 6.94922C6.1441 6.71536 7 5.70744 7 4.5C7 3.11929 5.88071 2 4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.70949 2.85886 6.71858 4 6.9502V14H5V9.4873ZM4.5 6C3.67157 6 3 5.32843 3 4.5C3 3.67157 3.67157 3 4.5 3C5.32843 3 6 3.67157 6 4.5C6 5.32843 5.32843 6 4.5 6ZM11.5 12C10.6716 12 10 11.3284 10 10.5C10 9.67157 10.6716 9 11.5 9C12.3284 9 13 9.67157 13 10.5C13 11.3284 12.3284 12 11.5 12Z" fill="currentColor" /></SvgRoot>;
});
export default IconGitMergeSimple;
