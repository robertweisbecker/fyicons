import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLaptopFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLaptopFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="laptop-fill"><path fill="currentColor" d="M5.586 11a1 1 0 0 1 .707.293l.414.414a1 1 0 0 0 .707.293h1.172a1 1 0 0 0 .707-.293l.414-.414a1 1 0 0 1 .707-.293H13V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm9.414.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 11.5V11h1V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6h1z" /></SvgRoot>;
});
export default IconLaptopFill;
