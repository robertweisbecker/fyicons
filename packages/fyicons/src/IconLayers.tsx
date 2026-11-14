import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLayers = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLayers(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="layers"><path fill="currentColor" d="M6.994 2.194a2.25 2.25 0 0 1 2.012 0l5.376 2.687c.92.461.92 1.776 0 2.237L12.615 8l1.763.881c.921.461.921 1.776 0 2.237L9.114 13.75a2.5 2.5 0 0 1-2.236 0l-5.264-2.632c-.921-.46-.92-1.776 0-2.237L3.381 8l-1.763-.881c-.921-.461-.921-1.776 0-2.237zM2.061 9.777a.25.25 0 0 0 0 .447l5.264 2.632c.422.211.92.21 1.342 0l5.264-2.632a.25.25 0 0 0 0-.447l-2.434-1.218-2.379 1.19a2.5 2.5 0 0 1-2.236 0L4.498 8.558zm6.497-6.689a1.25 1.25 0 0 0-1.117 0L2.065 5.776a.25.25 0 0 0 0 .447L7.33 8.855a1.5 1.5 0 0 0 1.342 0l5.263-2.632a.25.25 0 0 0 0-.447z" />{props.children}</SvgRoot>;
});
export default IconLayers;
