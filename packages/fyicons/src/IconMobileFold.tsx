import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMobileFold = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMobileFold(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="mobile-fold"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.872V4.146a.75.75 0 0 1 .882-.739l4.882.872A1.5 1.5 0 0 1 11.5 5.756v7.202a1.5 1.5 0 0 1-1.764 1.477l-4.618-.825a.75.75 0 0 1-.618-.738" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.5 4.077V2.664A1.25 1.25 0 0 0 8.747 1.52L5.098 3.122a1 1 0 0 0-.598.916v.212" /><ellipse cx={9.375} cy={6.504} fill="currentColor" rx={0.625} ry={0.75} />{props.children}</SvgRoot>;
});
export default IconMobileFold;
