import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconStack = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconStack(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M12.5 2C13.3284 2 14 2.67157 14 3.5V8.5C14 9.15281 13.5822 9.70597 13 9.91211V10.5C13 11.1528 12.5822 11.706 12 11.9121V12.5C12 13.3284 11.3284 14 10.5 14H5.5C4.67157 14 4 13.3284 4 12.5V11.9121C3.41782 11.706 3 11.1528 3 10.5V9.91211C2.41782 9.70597 2 9.15281 2 8.5V3.5C2 2.67157 2.67157 2 3.5 2H12.5ZM5 12V12.5C5 12.7761 5.22386 13 5.5 13H10.5C10.7761 13 11 12.7761 11 12.5V12H5ZM4 10.5C4 10.7761 4.22386 11 4.5 11H11.5C11.7761 11 12 10.7761 12 10.5V10H4V10.5ZM3.5 3C3.22386 3 3 3.22386 3 3.5V8.5C3 8.77614 3.22386 9 3.5 9H12.5C12.7761 9 13 8.77614 13 8.5V3.5C13 3.22386 12.7761 3 12.5 3H3.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconStack;
