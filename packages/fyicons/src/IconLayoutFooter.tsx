import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLayoutFooter = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLayoutFooter(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="layout-footer"><path fill="currentColor" d="M14.001 11.5a2.5 2.5 0 0 1-2.5 2.5.5.5 0 1 1 0-1 1.5 1.5 0 0 0 1.5-1.5v-1a.5.5 0 1 1 1 0zm-4 2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5m-7.5-3.5a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 0 1.5 1.5.5.5 0 0 1 0 1 2.5 2.5 0 0 1-2.5-2.5v-1a.5.5 0 0 1 .5-.5m11.5-2.5a.5.5 0 0 1-1 0v-2a.5.5 0 1 1 1 0zM2.501 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5m9-3a2.5 2.5 0 0 1 2.255 1.421c.137.286-.101.579-.417.579h-.072c-.212 0-.394-.139-.51-.316A1.5 1.5 0 0 0 11.501 3a.5.5 0 1 1 0-1m-7 0a.5.5 0 0 1 0 1c-.527 0-.99.272-1.257.684-.116.177-.298.316-.51.316h-.072c-.316 0-.554-.293-.417-.578A2.5 2.5 0 0 1 4.5 2m5 0a.5.5 0 0 1 0 1h-3a.5.5 0 1 1 0-1z" /><path fill="currentColor" d="M13.5 9a.5.5 0 0 1 .5.5v2a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-2a.5.5 0 0 1 .5-.5zM3 11.5A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5V10H3z" /></SvgRoot>;
});
export default IconLayoutFooter;
