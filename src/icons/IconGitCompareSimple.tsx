import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconGitCompareSimple = React.forwardRef<SVGSVGElement, IconProps>(function IconGitCompareSimple(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M9.5 4C10.8807 4 12 5.11929 12 6.5V9.0498C13.1411 9.28142 14 10.2905 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5C9 10.2905 9.85886 9.28142 11 9.0498V6.5C11 5.67157 10.3284 5 9.5 5H8.5C8.22386 5 8 4.77614 8 4.5C8 4.22386 8.22386 4 8.5 4H9.5ZM11.5 10C10.6716 10 10 10.6716 10 11.5C10 12.3284 10.6716 13 11.5 13C12.3284 13 13 12.3284 13 11.5C13 10.6716 12.3284 10 11.5 10ZM4.5 2C5.88071 2 7 3.11929 7 4.5C7 5.70943 6.14105 6.71753 5 6.94922V9.5C5 10.3284 5.67157 11 6.5 11H7.5C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12H6.5C5.11929 12 4 10.8807 4 9.5V6.94922C2.85895 6.71753 2 5.70943 2 4.5C2 3.11929 3.11929 2 4.5 2ZM4.5 3C3.67157 3 3 3.67157 3 4.5C3 5.32843 3.67157 6 4.5 6C5.32843 6 6 5.32843 6 4.5C6 3.67157 5.32843 3 4.5 3Z" fill="currentColor" /></SvgRoot>;
});
export default IconGitCompareSimple;
