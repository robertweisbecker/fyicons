import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextOutdent = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextOutdent(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="text-outdent"><path d="M10.5 12C10.7761 12 11 12.2239 11 12.5C11 12.7761 10.7761 13 10.5 13H2.5C2.22386 13 2 12.7761 2 12.5C2 12.2239 2.22386 12 2.5 12H10.5ZM13.1465 6.14648C13.2895 6.00349 13.5046 5.9607 13.6914 6.03809C13.8782 6.11549 14 6.29779 14 6.5V10.5C14 10.7022 13.8782 10.8845 13.6914 10.9619C13.5046 11.0393 13.2895 10.9965 13.1465 10.8535L11.1465 8.85352C10.9512 8.65825 10.9512 8.34175 11.1465 8.14648L13.1465 6.14648ZM8.5 9C8.77614 9 9 9.22386 9 9.5C9 9.77614 8.77614 10 8.5 10H2.5C2.22386 10 2 9.77614 2 9.5C2 9.22386 2.22386 9 2.5 9H8.5ZM8.5 6C8.77614 6 9 6.22386 9 6.5C9 6.77614 8.77614 7 8.5 7H2.5C2.22386 7 2 6.77614 2 6.5C2 6.22386 2.22386 6 2.5 6H8.5ZM13.25 3C13.5261 3 13.75 3.22386 13.75 3.5C13.75 3.77614 13.5261 4 13.25 4H2.25C1.97386 4 1.75 3.77614 1.75 3.5C1.75 3.22386 1.97386 3 2.25 3H13.25Z" fill="currentColor" /></SvgRoot>;
});
export default IconTextOutdent;
