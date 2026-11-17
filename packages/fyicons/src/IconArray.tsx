import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArray = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArray(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="array"><path fill="currentColor" d="M4.5 2a.5.5 0 0 1 0 1H4a1 1 0 0 0-1 1v1.393C3 6.365 2.623 7.298 1.953 8A3.78 3.78 0 0 1 3 10.607V12a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1H4a2 2 0 0 1-2-2v-1.393a2.78 2.78 0 0 0-.813-1.963.91.91 0 0 1 0-1.288c.52-.52.813-1.227.813-1.963V4a2 2 0 0 1 2-2zM12 2a2 2 0 0 1 2 2v1.393c0 .736.293 1.442.814 1.963a.91.91 0 0 1 0 1.288A2.78 2.78 0 0 0 14 10.607V12a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1h.5a1 1 0 0 0 1-1v-1.393A3.78 3.78 0 0 1 14.045 8 3.78 3.78 0 0 1 13 5.393V4a1 1 0 0 0-1-1h-.5a.5.5 0 0 1 0-1zM5 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />{props.children}</SvgRoot>;
});
export default IconArray;
