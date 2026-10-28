import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBullhorn = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBullhorn(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="bullhorn"><path fill="currentColor" d="M10.785 2.11A1.5 1.5 0 0 1 13 3.428V5.05a2.501 2.501 0 0 1 0 4.9v1.62a1.5 1.5 0 0 1-2.215 1.32l-2.792-1.514q.006.062.007.125v.5a2 2 0 0 1-4 0v-1.514a3.4 3.4 0 0 1-2.02-.847C1.36 9.083 1 8.314 1 7.5c0-.813.36-1.582.98-2.14a3.44 3.44 0 0 1 2.297-.86h2.095zM5 12a1 1 0 0 0 2 0v-.5a1 1 0 0 0-1-1H5zm7-8.572a.5.5 0 0 0-.738-.44L7 5.297v4.406l4.262 2.308a.5.5 0 0 0 .738-.44zM4.277 5.5c-.62 0-1.205.223-1.629.604C2.226 6.484 2 6.988 2 7.5c0 .513.226 1.017.648 1.397.424.381 1.01.603 1.63.603H6v-4zM13 8.913a1.499 1.499 0 0 0 0-2.827z" /></SvgRoot>;
});
export default IconBullhorn;
