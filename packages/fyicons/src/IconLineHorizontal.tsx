import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLineHorizontal = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLineHorizontal(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="line-horizontal"><path d="M16 8.5C16 8.77614 15.7761 9 15.5 9H0.5C0.223858 9 0 8.77614 0 8.5C0 8.22386 0.223858 8 0.5 8H15.5C15.7761 8 16 8.22386 16 8.5Z" fill="currentColor" /></SvgRoot>;
});
export default IconLineHorizontal;
