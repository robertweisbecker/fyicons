import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrangeStart = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrangeStart(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="arrange-start"><path d="M9.5 7C9.77614 7 10 6.77614 10 6.5V5.5C10 5.22386 9.77614 5 9.5 5H5.5C5.22386 5 5 5.22386 5 5.5V6.5C5 6.77614 5.22386 7 5.5 7H9.5ZM13.5 11C13.7761 11 14 10.7761 14 10.5V9.5C14 9.22386 13.7761 9 13.5 9H5.5C5.22386 9 5 9.22386 5 9.5V10.5C5 10.7761 5.22386 11 5.5 11H13.5Z" fill="currentColor" /><path d="M3.5 2.5V13.5" stroke="currentColor" strokeLinecap="round" /></SvgRoot>;
});
export default IconArrangeStart;
