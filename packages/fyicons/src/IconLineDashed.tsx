import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLineDashed = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLineDashed(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="line-dashed"><path d="M5 8.5C5 8.77614 4.77614 9 4.5 9H1.5C1.22386 9 1 8.77614 1 8.5C1 8.22386 1.22386 8 1.5 8H4.5C4.77614 8 5 8.22386 5 8.5ZM10 8.5C10 8.77614 9.77614 9 9.5 9H6.5C6.22386 9 6 8.77614 6 8.5C6 8.22386 6.22386 8 6.5 8H9.5C9.77614 8 10 8.22386 10 8.5ZM15 8.5C15 8.77614 14.7761 9 14.5 9H11.5C11.2239 9 11 8.77614 11 8.5C11 8.22386 11.2239 8 11.5 8H14.5C14.7761 8 15 8.22386 15 8.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconLineDashed;
