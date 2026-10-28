import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLayers = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLayers(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="layers"><path fill="currentColor" d="M6.995 2.194a2.25 2.25 0 0 1 2.011 0l5.376 2.687c.921.461.921 1.776 0 2.237L12.616 8l1.762.881c.921.461.922 1.776 0 2.237L9.115 13.75a2.5 2.5 0 0 1-2.237 0l-5.263-2.632c-.921-.461-.921-1.776 0-2.237L3.38 8l-1.76-.882c-.922-.461-.922-1.776 0-2.237zM2.062 9.777a.25.25 0 0 0 0 .447l5.264 2.632c.422.21.92.211 1.341 0l5.264-2.632a.25.25 0 0 0 0-.447l-2.433-1.218-2.38 1.19a2.5 2.5 0 0 1-2.236 0L4.498 8.558zm6.497-6.689a1.25 1.25 0 0 0-1.117 0L2.066 5.776a.25.25 0 0 0 0 .447L7.33 8.855a1.5 1.5 0 0 0 1.341 0l5.264-2.632a.25.25 0 0 0 0-.447z" /></SvgRoot>;
});
export default IconLayers;
