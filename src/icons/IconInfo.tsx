import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconInfo = React.forwardRef<SVGSVGElement, IconProps>(function IconInfo(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM7.70703 8C8.29185 8.00025 8.75168 8.50015 8.70312 9.08301L8.54297 11.0039C8.79891 11.0258 9 11.2384 9 11.5C9 11.7761 8.77614 12 8.5 12C7.93832 12 7.49632 11.5197 7.54297 10.96L7.70703 9H7.5C7.22386 9 7 8.77614 7 8.5C7 8.22386 7.22386 8 7.5 8H7.70703ZM8 5C8.55228 5 9 5.44772 9 6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6C7 5.44772 7.44772 5 8 5Z" fill="currentColor" /></SvgRoot>;
});
export default IconInfo;
