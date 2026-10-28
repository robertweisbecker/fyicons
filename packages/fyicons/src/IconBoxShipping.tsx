import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBoxShipping = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBoxShipping(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="box-shipping"><path fill="currentColor" d="M7.244 1.44a1.5 1.5 0 0 1 1.512 0l4.5 2.625A1.5 1.5 0 0 1 14 5.361v5.278l-.013.197c-.06.456-.328.863-.731 1.099l-4.5 2.625-.18.088a1.5 1.5 0 0 1-1.152 0l-.18-.088-4.5-2.625a1.5 1.5 0 0 1-.731-1.1L2 10.64V5.36a1.5 1.5 0 0 1 .744-1.296zM3 10.64a.5.5 0 0 0 .248.431L7.5 13.55V7.809L6 7.059V10L5 9h-.5V6.309L3 5.559zm5.5-2.83v5.74l4.252-2.479A.5.5 0 0 0 13 10.64V5.56zM6.414 6.147 8 6.94l4.415-2.208-1.767-1.03zm1.838-3.842a.5.5 0 0 0-.504 0L3.584 4.732l1.197.6L9.05 2.77z" /></SvgRoot>;
});
export default IconBoxShipping;
