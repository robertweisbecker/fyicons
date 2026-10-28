import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSettingsFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSettingsFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="settings-fill"><path fill="currentColor" d="M8.418 1a1.5 1.5 0 0 1 1.423 1.025l.429 1.287.652.376 1.33-.271c.632-.13 1.277.16 1.6.72l.419.725a1.5 1.5 0 0 1-.176 1.745l-.901 1.017v.751l.9 1.016c.429.483.5 1.187.178 1.746l-.42.725a1.5 1.5 0 0 1-1.599.72l-1.33-.272-.652.377-.428 1.287A1.5 1.5 0 0 1 8.42 15h-.838a1.5 1.5 0 0 1-1.422-1.025l-.43-1.285-.656-.38-1.325.273a1.5 1.5 0 0 1-1.601-.72l-.42-.725a1.5 1.5 0 0 1 .178-1.745L2.8 8.38v-.762l-.896-1.01a1.5 1.5 0 0 1-.177-1.746l.419-.725a1.5 1.5 0 0 1 1.6-.72l1.325.27.657-.38.428-1.282A1.5 1.5 0 0 1 7.58 1zm-.42 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4" /></SvgRoot>;
});
export default IconSettingsFill;
