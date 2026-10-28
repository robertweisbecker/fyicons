import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCloudBolt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCloudBolt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cloud-bolt"><path fill="currentColor" d="M6.5 1.999a3.5 3.5 0 0 1 2.448.998.12.12 0 0 0 .098.033Q9.27 3 9.5 3A3.5 3.5 0 0 1 13 6.5q-.001.335-.064.651A3 3 0 0 1 12.001 13H4.488l-.155-.004h-.012A3.496 3.496 0 0 1 3.093 6.3 3.5 3.5 0 0 1 6.5 1.999m0 1a2.5 2.5 0 0 0-2.322 3.423.5.5 0 0 1-.334.667 2.5 2.5 0 0 0 .519 4.906l.15.004h7.488a2 2 0 0 0 .254-3.982.5.5 0 0 1-.407-.667A2.5 2.5 0 0 0 12 6.499a2.5 2.5 0 0 0-2.82-2.478 1.12 1.12 0 0 1-.931-.31A2.5 2.5 0 0 0 6.5 3m1.735 2.875c.219-.25.628-.056.574.272L8.5 8h1.12a.4.4 0 0 1 .3.664l-2.224 2.542c-.2.227-.571.05-.522-.247L7.5 9H6.16a.3.3 0 0 1-.225-.497z" /></SvgRoot>;
});
export default IconCloudBolt;
