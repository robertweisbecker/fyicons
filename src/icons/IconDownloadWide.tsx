import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDownloadWide = React.forwardRef<SVGSVGElement, IconProps>(function IconDownloadWide(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M14.5 9C14.776 9 14.9998 9.22401 15 9.5V12C14.9999 13.1045 14.1045 14 13 14H3C1.89551 14 1.00013 13.1045 1 12V9.5C1.00017 9.22401 1.22397 9 1.5 9C1.77603 9 1.99983 9.22401 2 9.5V12C2.00013 12.5522 2.4478 13 3 13H13C13.5522 13 13.9999 12.5522 14 12V9.5C14.0002 9.22401 14.224 9 14.5 9ZM8 2C8.27614 2 8.5 2.22386 8.5 2.5V8.79297L11.1465 6.14648C11.3417 5.95122 11.6583 5.95122 11.8535 6.14648C12.0488 6.34175 12.0488 6.65825 11.8535 6.85352L8.35352 10.3535C8.15825 10.5488 7.84175 10.5488 7.64648 10.3535L4.14648 6.85352C3.95122 6.65825 3.95122 6.34175 4.14648 6.14648C4.34175 5.95122 4.65825 5.95122 4.85352 6.14648L7.5 8.79297V2.5C7.5 2.22386 7.72386 2 8 2Z" fill="currentColor" /></SvgRoot>;
});
export default IconDownloadWide;
