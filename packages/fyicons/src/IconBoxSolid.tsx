import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBoxSolid = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBoxSolid(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="box-solid"><mask id={idPrefix + "path-1-inside-1_1569_11432"} fill="white"><path d="m13.256 4.066-4.5-2.625a1.5 1.5 0 0 0-1.512 0l-4.5 2.625A1.5 1.5 0 0 0 2 5.362v5.277a1.5 1.5 0 0 0 .744 1.295l4.5 2.625a1.5 1.5 0 0 0 1.511 0l4.5-2.625A1.5 1.5 0 0 0 14 10.638V5.362a1.5 1.5 0 0 0-.744-1.296" /></mask><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="m13.256 4.066-4.5-2.625a1.5 1.5 0 0 0-1.512 0l-4.5 2.625A1.5 1.5 0 0 0 2 5.362v5.277a1.5 1.5 0 0 0 .744 1.295l4.5 2.625a1.5 1.5 0 0 0 1.511 0l4.5-2.625A1.5 1.5 0 0 0 14 10.638V5.362a1.5 1.5 0 0 0-.744-1.296Z" mask={"url(#" + idPrefix + "path-1-inside-1_1569_11432)"} /><path fill="currentColor" d="m8 7.5 5.625-2.812v6.564L8 14.5zM8 8 2 5l1-.5 5-3z" /><path stroke="currentColor" strokeLinecap="round" d="m5.5 9.25-1-.5" />{props.children}</SvgRoot>;
});
export default IconBoxSolid;
