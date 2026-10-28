import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPlugSide = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPlugSide(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="plug-side"><path fill="currentColor" d="M12.5 3a.5.5 0 0 1 .5.5V4h1.5a.5.5 0 0 1 0 1H13v1h1.5a.5.5 0 0 1 0 1H13v.5l-.01.1a.5.5 0 0 1-.49.4h-1.793l-.169-.009a1.7 1.7 0 0 1-.913-.378L9.5 7.5l-.148-.148a1.2 1.2 0 0 0-.732-.346L8.502 7a1.5 1.5 0 0 1-1.415-1H3.5a1.5 1.5 0 1 0 0 3h4a2.5 2.5 0 0 1 0 5h-4a.5.5 0 0 1 0-1h4a1.5 1.5 0 0 0 0-3h-4a2.5 2.5 0 0 1 0-5h3.587c.19-.536.676-.933 1.262-.992L8.502 4c.279 0 .548-.097.762-.272l.088-.08L9.5 3.5c.32-.32.754-.5 1.207-.5zm-1.793 1a.7.7 0 0 0-.5.207l-.147.148A2.2 2.2 0 0 1 8.502 5 .5.5 0 0 0 8 5.5c0 .275.224.5.502.5.583 0 1.144.231 1.558.645l.147.148a.7.7 0 0 0 .5.207H12V4z" /></SvgRoot>;
});
export default IconPlugSide;
