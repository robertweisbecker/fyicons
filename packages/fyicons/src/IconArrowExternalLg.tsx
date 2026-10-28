import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowExternalLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowExternalLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-external-lg"><path d="M4.5 2C4.77614 2 5 2.22386 5 2.5C5 2.77614 4.77614 3 4.5 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5C13 11.2239 13.2239 11 13.5 11C13.7761 11 14 11.2239 14 11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5V4.5C2 3.11929 3.11929 2 4.5 2ZM13.5 2C13.7761 2.00002 14 2.22387 14 2.5V7.5C14 7.77613 13.7761 7.99998 13.5 8C13.2239 8 13 7.77614 13 7.5V3.70703L7.85352 8.85352C7.65826 9.04877 7.34175 9.04876 7.14648 8.85352C6.95122 8.65825 6.95122 8.34175 7.14648 8.14648L12.293 3H8.5C8.22386 3 8 2.77614 8 2.5C8 2.22386 8.22386 2 8.5 2H13.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconArrowExternalLg;
