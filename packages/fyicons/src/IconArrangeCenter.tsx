import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrangeCenter = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrangeCenter(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M11.5 7C11.7761 7 12 6.77614 12 6.5V5.5C12 5.22386 11.7761 5 11.5 5H5.5C5.22386 5 5 5.22386 5 5.5V6.5C5 6.77614 5.22386 7 5.5 7H11.5ZM13.5 11C13.7761 11 14 10.7761 14 10.5V9.5C14 9.22386 13.7761 9 13.5 9H3.5C3.22386 9 3 9.22386 3 9.5V10.5C3 10.7761 3.22386 11 3.5 11H13.5Z" fill="currentColor" /><path d="M8.5 2.5V13.5" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconArrangeCenter;
