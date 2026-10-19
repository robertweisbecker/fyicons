import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconArticleSimple = React.forwardRef<SVGSVGElement, IconProps>(function IconArticleSimple(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M10.5 13C10.7761 13 11 13.2239 11 13.5C11 13.7761 10.7761 14 10.5 14H2.5C2.22386 14 2 13.7761 2 13.5C2 13.2239 2.22386 13 2.5 13H10.5ZM12.5 10C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5C2 10.2239 2.22386 10 2.5 10H12.5ZM13 2C13.5523 2 14 2.44772 14 3V7C14 7.55228 13.5523 8 13 8H3C2.44772 8 2 7.55229 2 7V3C2 2.44772 2.44772 2 3 2H13ZM3 7H13V3H3V7Z" fill="currentColor" /></SvgRoot>;
});
export default IconArticleSimple;
