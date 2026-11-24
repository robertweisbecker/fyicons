import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWifi = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWifi(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="wifi"><path fill="currentColor" d="M8 11c.435 0 .842.112 1.198.308.254.14.265.48.06.685l-.902.903a.5.5 0 0 1-.708 0l-.904-.904c-.205-.205-.194-.546.06-.686A2.5 2.5 0 0 1 8 11m0-4c1.547 0 2.956.586 4.02 1.547.2.181.194.49.003.68-.2.2-.523.192-.735.007A4.98 4.98 0 0 0 8 8a4.98 4.98 0 0 0-3.287 1.232c-.212.186-.536.193-.735-.006a.47.47 0 0 1 .004-.68A5.98 5.98 0 0 1 8 7m0-4a9.96 9.96 0 0 1 6.844 2.713.48.48 0 0 1 .002.692.52.52 0 0 1-.723.003A8.96 8.96 0 0 0 8 4a8.97 8.97 0 0 0-6.122 2.406.52.52 0 0 1-.723-.003.48.48 0 0 1 .002-.692A9.96 9.96 0 0 1 8 3" />{props.children}</SvgRoot>;
});
export default IconWifi;
