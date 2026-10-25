import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconText = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconText(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="text"><path d="M13.5 2C13.7761 2 14 2.22386 14 2.5V5.5C14 5.77614 13.7761 6 13.5 6C13.2239 6 13 5.77614 13 5.5V3H8.5V13H9.49902C9.77517 13 9.99902 13.2239 9.99902 13.5C9.99902 13.7761 9.77517 14 9.49902 14H6.49902C6.22288 14 5.99902 13.7761 5.99902 13.5C5.99902 13.2239 6.22288 13 6.49902 13H7.5V3H3V5.5C3 5.77614 2.77614 6 2.5 6C2.22386 6 2 5.77614 2 5.5V2.5C2 2.22386 2.22386 2 2.5 2H13.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconText;
