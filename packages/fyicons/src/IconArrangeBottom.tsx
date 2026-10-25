import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrangeBottom = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrangeBottom(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="arrange-bottom"><path d="M14 13.5C14 13.7761 13.7761 14 13.5 14H2.5C2.22386 14 2 13.7761 2 13.5C2 13.2239 2.22386 13 2.5 13H13.5C13.7761 13 14 13.2239 14 13.5ZM7 11.5C7 11.7761 6.77614 12 6.5 12H5.5C5.22386 12 5 11.7761 5 11.5V3.5C5 3.22386 5.22386 3 5.5 3H6.5C6.77614 3 7 3.22386 7 3.5V11.5ZM11 11.5C11 11.7761 10.7761 12 10.5 12H9.5C9.22386 12 9 11.7761 9 11.5V7.5C9 7.22386 9.22386 7 9.5 7H10.5C10.7761 7 11 7.22386 11 7.5V11.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconArrangeBottom;
