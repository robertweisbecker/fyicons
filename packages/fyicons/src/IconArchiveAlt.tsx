import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArchiveAlt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArchiveAlt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="archive-alt"><path d="M13.75 2C14.4404 2 15 2.55964 15 3.25V4.75C15 5.37445 14.5417 5.8893 13.9434 5.98242L13.1602 12.248C13.035 13.2489 12.1844 14 11.1758 14H4.82422C3.81557 14 2.96495 13.2489 2.83984 12.248L2.05566 5.98242C1.45779 5.8889 1 5.37412 1 4.75V3.25C1 2.55964 1.55964 2 2.25 2H13.75ZM3.83203 12.124C3.89459 12.6244 4.3199 13 4.82422 13H11.1758C11.6801 13 12.1054 12.6244 12.168 12.124L12.9336 6H3.06641L3.83203 12.124ZM9.5 7C9.77614 7 10 7.22386 10 7.5C10 7.77614 9.77614 8 9.5 8H6.5C6.22386 8 6 7.77614 6 7.5C6 7.22386 6.22386 7 6.5 7H9.5ZM2.25 3C2.11193 3 2 3.11193 2 3.25V4.75C2 4.88807 2.11193 5 2.25 5H13.75C13.8881 5 14 4.88807 14 4.75V3.25C14 3.11193 13.8881 3 13.75 3H2.25Z" fill="currentColor" /></SvgRoot>;
});
export default IconArchiveAlt;
