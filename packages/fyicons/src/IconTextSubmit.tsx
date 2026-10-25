import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTextSubmit = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTextSubmit(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="text-submit"><path d="M9.5 7C9.77614 7 10 7.22386 10 7.5C10 7.77614 9.77614 8 9.5 8H5.5C5.22386 8 5 7.77614 5 7.5C5 7.22386 5.22386 7 5.5 7H9.5Z" fill="currentColor" /><path d="M12.5 11.5H5C3.61929 11.5 2.5 10.3807 2.5 9V2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M11.5 9.5L13.5 11.5L11.5 13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.5 4.5L12.5 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconTextSubmit;
