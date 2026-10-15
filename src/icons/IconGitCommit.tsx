import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconGitCommit = React.forwardRef<SVGSVGElement, IconProps>(function IconGitCommit(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 5.25C9.6249 5.25 10.9714 6.44244 11.2119 8H15.5C15.7761 8 16 8.22386 16 8.5C16 8.77614 15.7761 9 15.5 9H11.2119C10.9714 10.5576 9.6249 11.75 8 11.75C6.3751 11.75 5.02858 10.5576 4.78809 9H0.5C0.223858 9 0 8.77614 0 8.5C0 8.22386 0.223858 8 0.5 8H4.78809C5.02858 6.44244 6.3751 5.25 8 5.25ZM8 6.25C6.75736 6.25 5.75 7.25736 5.75 8.5C5.75 9.74264 6.75736 10.75 8 10.75C9.24264 10.75 10.25 9.74264 10.25 8.5C10.25 7.25736 9.24264 6.25 8 6.25Z" fill="currentColor" /></SvgRoot>;
});
export default IconGitCommit;
