import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCloudBolt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCloudBolt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cloud-bolt"><path fill="currentColor" d="M6.5 1.999a3.5 3.5 0 0 1 2.448.998.12.12 0 0 0 .098.033Q9.27 3 9.5 3A3.5 3.5 0 0 1 13 6.5q-.001.335-.064.651A3 3 0 0 1 12.001 13H4.488l-.155-.004h-.012v-.001a3.496 3.496 0 0 1-1.228-6.696 3.5 3.5 0 0 1 3.407-4.3m0 1a2.5 2.5 0 0 0-2.322 3.423.5.5 0 0 1-.334.667 2.5 2.5 0 0 0 .519 4.906l.15.004h7.488a2 2 0 0 0 .254-3.983.5.5 0 0 1-.407-.667A2.5 2.5 0 0 0 12 6.5a2.5 2.5 0 0 0-2.82-2.48 1.12 1.12 0 0 1-.931-.308A2.5 2.5 0 0 0 6.5 2.999m1.735 2.375c.219-.25.628-.056.574.271L8.5 7.5h1.12a.4.4 0 0 1 .3.664l-2.224 2.542c-.2.227-.571.05-.522-.247l.327-1.96H6.16a.3.3 0 0 1-.225-.496z" />{props.children}</SvgRoot>;
});
export default IconCloudBolt;
