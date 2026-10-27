import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSearch = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSearch(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7 2C9.76142 2 12 4.23858 12 7C12 8.01906 11.6944 8.96641 11.1709 9.75684L14.207 12.793C14.5976 13.1835 14.5976 13.8165 14.207 14.207C13.8165 14.5976 13.1835 14.5976 12.793 14.207L9.75684 11.1709C8.96641 11.6944 8.01906 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2ZM7 3C4.79086 3 3 4.79086 3 7C3 9.20914 4.79086 11 7 11C9.20914 11 11 9.20914 11 7C11 4.79086 9.20914 3 7 3Z" fill="currentColor" /></SvgRoot>;
});
export default IconSearch;
