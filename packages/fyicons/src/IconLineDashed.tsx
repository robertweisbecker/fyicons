import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLineDashed = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLineDashed(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="line-dashed"><path d="M4 8.5C4 8.77614 3.77614 9 3.5 9H0.5C0.223858 9 0 8.77614 0 8.5C0 8.22386 0.223858 8 0.5 8H3.5C3.77614 8 4 8.22386 4 8.5ZM10 8.5C10 8.77614 9.77614 9 9.5 9H6.5C6.22386 9 6 8.77614 6 8.5C6 8.22386 6.22386 8 6.5 8H9.5C9.77614 8 10 8.22386 10 8.5ZM16 8.5C16 8.77614 15.7761 9 15.5 9H12.5C12.2239 9 12 8.77614 12 8.5C12 8.22386 12.2239 8 12.5 8H15.5C15.7761 8 16 8.22386 16 8.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconLineDashed;
