import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBox = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBox(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="box"><path fill="currentColor" d="M7.244 1.44a1.5 1.5 0 0 1 1.512 0l4.5 2.625A1.5 1.5 0 0 1 14 5.361v5.278l-.013.197c-.06.456-.328.863-.731 1.099l-4.5 2.625-.18.088a1.5 1.5 0 0 1-1.152 0l-.18-.088-4.5-2.625a1.5 1.5 0 0 1-.731-1.1L2 10.64V5.36a1.5 1.5 0 0 1 .744-1.296zm.98 6.507a.5.5 0 0 1-.448 0L3 5.56v5.08a.5.5 0 0 0 .248.431l4.5 2.625a.5.5 0 0 0 .504 0l4.5-2.625A.5.5 0 0 0 13 10.64V5.56zm.028-5.642a.5.5 0 0 0-.504 0L3.584 4.732 8 6.94l4.415-2.208z" /><path stroke="currentColor" strokeLinecap="square" d="M8.5 7.5v6.26M7.5 2.5v4.26" /><path stroke="currentColor" strokeLinecap="round" d="m5.5 9.25-1-.5" /></SvgRoot>;
});
export default IconBox;
