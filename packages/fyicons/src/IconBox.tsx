import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBox = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBox(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="box"><mask id={idPrefix + "path-1-inside-1_500_2240"} fill="white"><path d="m13.256 4.066-4.5-2.625a1.5 1.5 0 0 0-1.512 0l-4.5 2.625A1.5 1.5 0 0 0 2 5.362v5.277a1.5 1.5 0 0 0 .744 1.295l4.5 2.625a1.5 1.5 0 0 0 1.511 0l4.5-2.625A1.5 1.5 0 0 0 14 10.638V5.362a1.5 1.5 0 0 0-.744-1.296" /></mask><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="m13.256 4.066-4.5-2.625a1.5 1.5 0 0 0-1.512 0l-4.5 2.625A1.5 1.5 0 0 0 2 5.362v5.277a1.5 1.5 0 0 0 .744 1.295l4.5 2.625a1.5 1.5 0 0 0 1.511 0l4.5-2.625A1.5 1.5 0 0 0 14 10.638V5.362a1.5 1.5 0 0 0-.744-1.296Z" mask={"url(#" + idPrefix + "path-1-inside-1_500_2240)"} /><path stroke="currentColor" strokeLinejoin="round" d="M13.625 4.688 8 7.5 2.375 4.688" /><path stroke="currentColor" strokeLinecap="square" d="M8.5 7.5v6.26M7.5 2.5v4.26" /><path stroke="currentColor" strokeLinecap="round" d="m5.5 9.25-1-.5" />{props.children}</SvgRoot>;
});
export default IconBox;
