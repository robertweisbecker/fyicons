import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrangeMiddle = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrangeMiddle(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M2 8.5C2 8.77614 2.22386 9 2.5 9H5V11.5C5 11.7761 5.22386 12 5.5 12H6.5C6.77614 12 7 11.7761 7 11.5V9H9V13.5C9 13.7761 9.22386 14 9.5 14H10.5C10.7761 14 11 13.7761 11 13.5V9H13.5C13.7761 9 14 8.77614 14 8.5C14 8.22386 13.7761 8 13.5 8H11V3.5C11 3.22386 10.7761 3 10.5 3H9.5C9.22386 3 9 3.22386 9 3.5V8H7V5.5C7 5.22386 6.77614 5 6.5 5H5.5C5.22386 5 5 5.22386 5 5.5V8H2.5C2.22386 8 2 8.22386 2 8.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconArrangeMiddle;
